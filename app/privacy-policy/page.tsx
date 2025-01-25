"use client";

import React from "react";
import Header from "@/components/defined-ui/header";
import Footer from "@/components/defined-ui/footer";

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#030617] text-white min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      <div className="flex-grow container mx-auto px-4 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-200">
          Privacy Policy
        </h1>

        <div className="space-y-6 text-gray-300">
          <p>
            Welcome to the SciTech Council's website. Your privacy is important
            to us, and we are committed to protecting the personal information
            you share with us.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-6">
            1. Information We Collect
          </h2>
          <p>
            We may collect personal information such as your name, email
            address, and any other details you provide when contacting us or
            signing up for events.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-6">
            2. How We Use Your Information
          </h2>
          <p>
            The information collected is used to enhance your experience on our
            site, respond to inquiries, manage event registrations, and improve
            our services.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-6">
            3. Data Sharing
          </h2>
          <p>
            We do not sell, trade, or share your personal information with third
            parties without your consent, except as required by law.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-6">4. Cookies</h2>
          <p>
            Our website may use cookies to improve your browsing experience. You
            can disable cookies in your browser settings if you prefer.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-6">
            5. Third-Party Links
          </h2>
          <p>
            Our website may contain links to third-party websites. We are not
            responsible for the privacy practices or content of those sites.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-6">
            6. Your Consent
          </h2>
          <p>
            By using our website, you consent to the terms of this privacy
            policy.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-6">
            7. Changes to This Policy
          </h2>
          <p>
            We reserve the right to update this privacy policy at any time. Any
            changes will be posted on this page.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-6">
            8. Contact Us
          </h2>
          <p>
            If you have any questions about this privacy policy, please contact
            us at:
          </p>
          <ul className="list-disc ml-8">
            <li>Email: Gensec_Scitech_Gymkhana@iitbhilai.ac.in</li>
            <li>Phone: +91 8708943859</li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
