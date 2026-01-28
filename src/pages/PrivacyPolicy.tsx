// src/pages/PrivacyPolicy.tsx
import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4 max-w-5xl">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>
          <h1 className="text-2xl font-bold text-gray-900">Privacy Policy</h1>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <section className="space-y-6 text-gray-700">
          <p>
            <strong>Effective Date:</strong> January 28, 2026
          </p>

          <p>
            KalpGyanAI (“we”, “our”, “us”) respects your privacy and is committed to protecting your personal data. 
            This Privacy Policy explains how we collect, use, store, and share your information when you access 
            our website, services, and mobile applications (collectively, the “Services”), including accepting payments, 
            using AI tools, and creating accounts.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">1. Information We Collect</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Personal Information:</strong> Name, email, profile picture, account details, payment info (handled securely).</li>
            <li><strong>Non-Personal Information:</strong> IP address, browser type, device info, usage analytics, cookies.</li>
            <li><strong>Third-Party Information:</strong> Data from services you connect to (Google login, social media).</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900">2. How We Use Your Information</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Provide, operate, and maintain our Services</li>
            <li>Process payments and manage subscriptions</li>
            <li>Communicate updates, offers, or security alerts</li>
            <li>Personalize your experience and recommend relevant AI content</li>
            <li>Conduct analytics and improve our Services</li>
            <li>Comply with legal obligations and prevent fraud</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900">3. Payment Information</h2>
          <p>
            Payments are processed through secure third-party providers (Stripe, Razorpay, PayPal). We do <strong>not</strong> store credit card or bank account details on our servers. Payment data is encrypted and used only to complete transactions.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">4. Cookies and Tracking</h2>
          <p>
            We use cookies and similar technologies to improve user experience, manage sessions, analytics, and marketing. You can manage cookies through your browser settings.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">5. Sharing Your Information</h2>
          <p>
            We do not sell your data. We may share information with:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Service providers (payments, hosting, analytics, AI tools)</li>
            <li>Legal requirements (law enforcement, regulations)</li>
            <li>Business transfers (mergers or acquisitions)</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900">6. Security of Your Data</h2>
          <p>
            We implement industry-standard security measures, including encryption and secure access. While we strive to protect your data, no method is 100% secure.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">7. Your Rights</h2>
          <p>
            Depending on your location, you may request:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Access or copy your personal data</li>
            <li>Correction or deletion of personal data</li>
            <li>Withdraw consent or object to processing</li>
            <li>Data portability in a standard format</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900">8. Third-Party Services</h2>
          <p>
            We use third-party services such as OpenAI, Stripe, Razorpay, PayPal, AWS, and Google Analytics. These services have their own privacy policies. We are not responsible for how they handle your data.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">9. Children’s Privacy</h2>
          <p>
            Our Services are not intended for users under 13 years old. We do not knowingly collect personal information from children. If discovered, it will be deleted immediately.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">10. Changes to this Privacy Policy</h2>
          <p>
            We may update this policy periodically. Changes will be posted here with the updated effective date. Please review regularly.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">11. Contact Us</h2>
          <p>
            For questions or concerns: <br />
            <strong>Email:</strong> support@kalpgyanai.com <br />
            <strong>Address:</strong> [I 402 Malabar County 1, Ahmedabad, India]
          </p>
        </section>
      </main>
    </div>
  );
}
