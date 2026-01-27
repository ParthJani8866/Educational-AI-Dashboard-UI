import { useGoogleLogin, googleLogout } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { GraduationCap, ArrowRight, Sparkles } from "lucide-react";
import FeaturesSection from "../components/FeaturesSection";
import PricingSection from "../components/PricingSection";
import { useState } from "react";

interface User {
  name: string;
  email: string;
  picture?: string;
}

interface LandingPageProps {
  user: User | null;
  setUser: (user: User | null) => void;
}

export default function LandingPage() {
  const [user, setUser] = useState<User | null>(null);

  const navigate = useNavigate();

  // --------------------
  // Google Login with useGoogleLogin
  // --------------------
  const login = useGoogleLogin({
    flow: "implicit",
    onSuccess: async (tokenResponse: any) => {
      try {
        const res = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: {
            Authorization: `Bearer ${tokenResponse.access_token}`,
          },
        });
        const profile = await res.json();
        console.log("Google profile:", profile);

        const userData: User = {
          name: profile.name,
          email: profile.email,
          picture: profile.picture,
        };
        setUser(userData);
        saveUserToBackend(userData);
        // Permanent redirect to dashboard
        navigate("/dashboard", { state: { user: userData }, replace: true });
      } catch (err) {
        console.error("Failed to fetch Google user info", err);
      }
    },
    onError: () => alert("Login Failed"),
  });
  const saveUserToBackend = async (user: User) => {
    const res = await fetch("http://127.0.0.1:8010/auth/google-login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!res.ok) {
      throw new Error("Failed to save user");
    }

    return res.json();
  };
  // --------------------
  // Guest / Get Started
  // --------------------
  const handleGetStarted = () => {
    setUser({ name: "Guest", email: "" });
    navigate("/dashboard", { replace: true });
  };

  // --------------------
  // Logout
  // --------------------
  const handleLogout = () => {
    googleLogout();
    setUser(null);
    navigate("/", { replace: true });
  };

  // --------------------
  // If user logged in, redirect handled via React Router, no need to render here
  // --------------------

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 max-w-7xl flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-2 rounded-lg">
              <GraduationCap className="size-6 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-slate-900">KalpGyanAI</h1>
              <p className="text-xs text-slate-600">UPSC Excellence</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => login()} // trigger Google login
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow-sm"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 max-w-7xl text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium mb-6">
            <Sparkles className="size-4" />
            <span>India's First AI-Powered UPSC Platform</span>
          </div>

          <h1 className="text-slate-900 mb-6 text-4xl md:text-5xl font-bold">
            Master UPSC CSE with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              AI-Driven Learning
            </span>
          </h1>

          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Experience personalized UPSC preparation with cutting-edge AI technology.
            Get access to comprehensive study materials, intelligent practice, and expert guidance—all in one platform.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={() => login()}
              className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-all shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              Start Free Trial
              <ArrowRight className="size-5" />
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200">
              <p className="font-bold text-indigo-600">100,000+</p>
              <p className="text-sm text-slate-600">Practice MCQs</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200">
              <p className="font-bold text-purple-600">500+</p>
              <p className="text-sm text-slate-600">Free eBooks</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200">
              <p className="font-bold text-blue-600">24/7</p>
              <p className="text-sm text-slate-600">AI Mentor</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200">
              <p className="font-bold text-green-600">10,000+</p>
              <p className="text-sm text-slate-600">Happy Students</p>
            </div>
          </div>
        </div>
      </section>

      <FeaturesSection />
      <PricingSection />

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-2 rounded-lg">
                  <GraduationCap className="size-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold">KalpGyanAI</h3>
                  <p className="text-xs text-slate-400">UPSC Excellence</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm max-w-md">
                India's first AI-powered UPSC preparation platform. Master your civil services exam
                with intelligent learning and comprehensive study materials.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Legal</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
            <p>&copy; {new Date().getFullYear()} KalpGyanAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
