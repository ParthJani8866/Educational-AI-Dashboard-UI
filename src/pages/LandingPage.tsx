import { useGoogleLogin, googleLogout } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { GraduationCap, ArrowRight, Sparkles, Currency } from "lucide-react";
import FeaturesSection from "../components/FeaturesSection";
import PricingSection from "../components/PricingSection";
import { useState } from "react";

interface User {
  name: string;
  email: string;
  picture?: string;
}

export default function LandingPage() {
  const [user, setUser] = useState<User | null>(null);
  const [isPaying, setIsPaying] = useState(false);
  const [pendingSubscribe, setPendingSubscribe] = useState(false);

  const navigate = useNavigate();

  // --------------------
  // Google Login
  // --------------------
  const login = useGoogleLogin({
    flow: "implicit",
    onSuccess: async (tokenResponse: any) => {
      const res = await fetch(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        {
          headers: {
            Authorization: `Bearer ${tokenResponse.access_token}`,
          },
        }
      );

      const profile = await res.json();

      const userData: User = {
        name: profile.name,
        email: profile.email,
        picture: profile.picture,
      };

      setUser(userData);
      localStorage.setItem("kg_user", JSON.stringify(userData));
      await saveUserToBackend(userData);

      // Resume payment if user clicked Subscribe first
      if (pendingSubscribe) {
        setPendingSubscribe(false);
        handleSubscribe(userData);
      } else {
        navigate("/dashboard", { replace: true });
      }
    },
    onError: () => alert("Google Login Failed"),
  });

  // --------------------
  // Save user
  // --------------------
  const saveUserToBackend = async (user: User) => {
    await fetch("https://api.kalpgyanai.com/auth/google-login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
  };

  // --------------------
  // Subscribe click
  // --------------------
  const handleSubscribeClick = () => {
    if (!user) {
      setPendingSubscribe(true);
      login();
      return;
    }
    handleSubscribe(user);
  };

  // --------------------
  // Razorpay
  // --------------------
  const handleSubscribe = async (loggedInUser: User) => {
    try {
      setIsPaying(true);

      const res = await fetch(
        "https://api.kalpgyanai.com/payment/create-order",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount: 489, currency: "INR", receipt: loggedInUser.email }),
        }
      );

      const order = await res.json();
      console.log(order, loggedInUser);
      const options = {
        key: "rzp_live_S9EGe1u7e9IGgD",
        amount: order.amount,
        currency: "INR",
        name: "KalpGyanAI",
        description: "UPSC Premium Subscription",
        order_id: order.order_id,
        prefill: {
          name: loggedInUser.name,
          email: loggedInUser.email,
        },
        handler: () => {
          if (window.gtag) {
            window.gtag('event', 'conversion', {
              send_to: 'AW-693333660/X-FUCMnj15IbEJzdzcoC',
              value: 1.0,
              currency: 'USD',
            });
          }
          navigate("/dashboard", { replace: true });
          setIsPaying(false);
        },
        modal: {
          ondismiss: () => { console.log("SUCCESS1"); setIsPaying(false) },
        },
        theme: { color: "#4f46e5" },
      };
      const Razorpay = (window as any).Razorpay;
      const razorpay = new Razorpay(options);
      razorpay.open();
    } catch {
      setIsPaying(false);
      alert("Payment failed");
    }
  };

  // --------------------
  // UI
  // --------------------
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* NAVBAR */}
      <nav className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 max-w-7xl flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-600 p-2 rounded-lg">
              <GraduationCap className="size-6 text-white" />
            </div>
            <div>
              <h1 className="font-bold">KalpGyanAI</h1>
              <p className="text-xs text-slate-600">UPSC Excellence</p>
            </div>
          </div>

          <button
            onClick={handleSubscribeClick}
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-semibold"
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="container mx-auto px-4 py-20 max-w-7xl text-center" style={{ paddingBottom: "10px", paddingTop: "20px" }}>
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-indigo-50 text-indigo-700 text-sm font-semibold shadow-sm">
          <Sparkles className="size-4" />
          <span>India’s First AI-Powered UPSC Learning Platform</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-slate-900">
          Crack UPSC Smarter with{" "}
          <span className="bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
            AI-Driven Preparation
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto mb-10" style={{ marginBottom: "12px" }}>
          Get exam-ready with <strong>personalized syllabus breakdowns</strong>,
          <strong> intelligent MCQs</strong>, <strong>PYQ analysis</strong> and a
          <strong> 24×7 AI mentor</strong> trained specifically for UPSC CSE.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleSubscribeClick}
            className="    inline-flex items-center justify-center    gap-3    px-8 py-4    rounded-xl    bg-gradient-to-r from-indigo-600 to-purple-600    text-white text-base md:text-lg font-semibold    shadow-md    hover:shadow-xl hover:from-indigo-700 hover:to-purple-700    active:scale-[0.98]    focus:outline-none focus:ring-4 focus:ring-indigo-300    transition-all duration-200  "
          >
            Subscribe Now
            <ArrowRight className="w-5 h-5" />
          </button>

          {/* Trust hint */}
          <p className="text-sm text-slate-500">
            ✔ Secure payments • ✔ Cancel anytime
          </p>
        </div>

        {/* Social Proof */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
            <p className="text-2xl font-bold text-indigo-600">100K+</p>
            <p className="text-sm text-slate-600">UPSC MCQs</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
            <p className="text-2xl font-bold text-purple-600">24/7</p>
            <p className="text-sm text-slate-600">AI Mentor</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
            <p className="text-2xl font-bold text-blue-600">GS I-IV</p>
            <p className="text-sm text-slate-600">Full Coverage</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
            <p className="text-2xl font-bold text-green-600">PYQ-Driven</p>
            <p className="text-sm text-slate-600">Smart Insights</p>
          </div>
        </div>
      </section>

      <FeaturesSection />
      <PricingSection />

      {/* FOOTER */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4 max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-2">KalpGyanAI</h3>
            <p className="text-slate-400 text-sm">
              AI-powered UPSC preparation platform.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Legal</h4>
            <ul className="text-slate-400 text-sm space-y-2">
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/TC">Terms & Conditions</a></li>
              <li><a href="/shipping">Shipping Policy</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </footer>

      {/* PAYMENT OVERLAY */}
      {isPaying && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl text-center">
            <h3 className="font-semibold mb-2">Waiting for payment…</h3>
            <p className="text-sm text-slate-600">
              Please complete payment in the popup.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
