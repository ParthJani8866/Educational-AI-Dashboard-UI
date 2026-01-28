// src/pages/ShippingPolicy.tsx
import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";

export default function ShippingPolicy() {
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
          <h1 className="text-2xl font-bold text-gray-900">Shipping Policy</h1>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <section className="space-y-6 text-gray-700">
          <p>
            <strong>Effective Date:</strong> January 28, 2026
          </p>

          <p>
            At KalpGyanAI, we are committed to ensuring your study materials and products are delivered safely and on time. This Shipping Policy outlines how we handle the shipment of physical products.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">1. Order Processing</h2>
          <p>
            Orders are processed within 1–3 business days after payment confirmation. You will receive a confirmation email once your order is shipped.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">2. Shipping Methods & Delivery Time</h2>
          <p>
            We use trusted courier services for all deliveries. Estimated delivery times are:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Standard Delivery: 5–7 business days</li>
            <li>Express Delivery: 2–3 business days</li>
            <li>International Delivery: 10–20 business days (may vary by destination)</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900">3. Shipping Costs</h2>
          <p>
            Shipping charges are calculated at checkout based on your location, order weight, and delivery method. Occasionally, we offer free shipping promotions.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">4. Tracking Your Order</h2>
          <p>
            Once your order is shipped, you will receive a tracking number via email. You can use this number on the courier's website to monitor your shipment.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">5. Delivery Issues</h2>
          <p>
            If your order is delayed or damaged during shipment, please contact us immediately at:
          </p>
          <p className="text-gray-700">
            <strong>Email:</strong> support@kalpgyanai.com <br />
            <strong>Phone:</strong> +91-8866398281
          </p>
          <p>
            We will work with the courier service to resolve the issue or provide a replacement/refund as appropriate.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">6. International Shipping</h2>
          <p>
            International customers may be responsible for customs duties, import taxes, or other fees levied by their country. These charges are not included in our shipping costs.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">7. Changes to this Policy</h2>
          <p>
            We reserve the right to modify this Shipping Policy at any time. Updated policies will be posted on this page with a revised effective date.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">Contact Us</h2>
          <p>
            For any questions or assistance regarding shipping:
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
