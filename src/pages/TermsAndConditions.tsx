// src/pages/TermsAndConditions.tsx
import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";

export default function TermsAndConditions() {
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
          <h1 className="text-2xl font-bold text-gray-900">Terms and Conditions</h1>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <section className="space-y-6 text-gray-700">
          <p>
            <strong>Effective Date:</strong> January 28, 2026
          </p>

          <p>
            Welcome to KalpGyanAI! These Terms and Conditions (“Terms”) govern your access to and use of our website, services, and applications (collectively, the “Services”). By using our Services, you agree to comply with these Terms. If you do not agree, please do not use our Services.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">1. Eligibility</h2>
          <p>
            You must be at least 13 years old to use our Services. By using the Services, you represent and warrant that you meet this requirement.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">2. Account Responsibility</h2>
          <p>
            To access certain features, you may need to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">3. Payment and Subscription</h2>
          <p>
            Some Services may require payment or a subscription. Payments are processed securely via third-party providers (Stripe, Razorpay, PayPal). You agree to provide accurate billing information and authorize us to charge the applicable fees. Subscription cancellations and refunds are subject to our refund policy.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">4. Intellectual Property</h2>
          <p>
            All content, tools, AI models, and materials provided by KalpGyanAI are protected by copyright, trademark, and other intellectual property laws. You may not copy, distribute, or modify any part of the Services without our prior written permission.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">5. User Conduct</h2>
          <p>
            You agree not to use the Services to:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Violate any applicable laws or regulations</li>
            <li>Infringe the rights of others</li>
            <li>Engage in harmful, abusive, or fraudulent activities</li>
            <li>Attempt to hack, reverse engineer, or disrupt our Services</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900">6. Limitation of Liability</h2>
          <p>
            KalpGyanAI is provided "as-is" without warranties of any kind. We are not liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use the Services.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">7. Third-Party Services</h2>
          <p>
            Our Services may integrate or link to third-party services such as OpenAI, AWS, Google Analytics, and payment processors. We are not responsible for their policies or actions.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">8. Termination</h2>
          <p>
            We may suspend or terminate your account if you violate these Terms or engage in prohibited activities. Upon termination, your access to the Services will end.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">9. Changes to Terms</h2>
          <p>
            We may update these Terms from time to time. Updated Terms will be posted on this page with a revised effective date. Continued use of our Services constitutes acceptance of the new Terms.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">10. Governing Law</h2>
          <p>
            These Terms are governed by and construed in accordance with the laws of [Your Country/State]. Any disputes shall be resolved in the courts located in [Your City, Country].
          </p>

          <h2 className="text-xl font-semibold text-gray-900">11. Contact Us</h2>
          <p>
            For questions or concerns regarding these Terms:
          </p>
          <p className="text-gray-700">
            <strong>Email:</strong> support@kalpgyanai.com <br />
            <strong>Phone:</strong> +91-8866398281 <br />
            <strong>Address:</strong> [I 402 Malabar County 1, Ahmedabad, India]
          </p>
        </section>
      </main>
    </div>
  );
}
