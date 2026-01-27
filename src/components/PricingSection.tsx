import { useNavigate } from "react-router";
import { Check, Sparkles, Crown } from "lucide-react";

export default function PricingSection() {
  const navigate = useNavigate();

  const handleSubscribe = () => {
    navigate("/dashboard");
  };

  const features = [
    "Access to 100,000+ Practice MCQs",
    "500+ Free eBooks & Study Materials",
    "24/7 AI Mentor Support",
    "Personalized Study Plans",
    "Previous Year Papers with Solutions",
    "Performance Analytics & Tracking",
    "Daily Current Affairs Updates",
    "Answer Writing Practice",
    "Mock Tests & Test Series",
    "Doubt Clearing Sessions",
    "Mobile App Access",
    "Lifetime Content Updates",
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-slate-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Everything you need to ace UPSC CSE, in one affordable subscription
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Pricing Card */}
          <div className="bg-white rounded-2xl shadow-xl border-2 border-indigo-200 overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <Crown className="size-6" />
                  <span className="font-semibold">Premium Plan</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="font-bold">₹489</span>
                  <span className="text-indigo-100">/month</span>
                </div>
                <p className="text-sm text-indigo-100 mt-1">All-access subscription</p>
              </div>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-green-50 rounded-full p-1 mt-0.5">
                      <Check className="size-4 text-green-600" />
                    </div>
                    <span className="text-slate-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={handleSubscribe}
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl hover:scale-105 transform"
              >
                <Sparkles className="size-5" />
                Subscribe Now
              </button>

              <p className="text-center text-sm text-slate-500 mt-4">
                Cancel anytime • No hidden charges • 7-day money-back guarantee
              </p>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 text-center shadow-sm border border-slate-200">
              <p className="font-semibold text-slate-900 mb-1">💳 Secure Payment</p>
              <p className="text-xs text-slate-600">100% safe & encrypted</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm border border-slate-200">
              <p className="font-semibold text-slate-900 mb-1">🔄 Money-back Guarantee</p>
              <p className="text-xs text-slate-600">7 days refund policy</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm border border-slate-200">
              <p className="font-semibold text-slate-900 mb-1">📱 Multi-device Access</p>
              <p className="text-xs text-slate-600">Study anywhere, anytime</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
