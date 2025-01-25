"use client";

import React from "react";
import Header from "@/components/defined-ui/header";
import Footer from "@/components/defined-ui/footer";

const TermsOfService = () => {
  return (
    <div className="bg-[#030617] min-h-screen flex flex-col text-gray-300">
      <Header />

      <div className="flex-grow container mx-auto px-4 py-16 md:py-24">
        <h1 className="text-4xl font-bold text-center mb-8 text-white">
          Terms of <span className="text-[#0A66C2]">Service</span>
        </h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">
              1. Acceptance of Terms
            </h2>
            <p className="leading-relaxed">
              By accessing and using our website, you agree to comply with and
              be bound by the following terms and conditions. If you do not
              agree to these terms, please refrain from using our site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">
              2. Use of the Website
            </h2>
            <p className="leading-relaxed">
              You may use the website solely for lawful purposes and in
              accordance with these terms. You agree not to use the site:
            </p>
            <ul className="list-disc list-inside ml-6 space-y-2">
              <li>
                In any way that violates any applicable laws or regulations.
              </li>
              <li>
                To engage in fraudulent, harmful, or misleading activities.
              </li>
              <li>To transmit spam, malware, or other harmful code.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">
              3. Intellectual Property
            </h2>
            <p className="leading-relaxed">
              All content, trademarks, and data on this site are the property of
              their respective owners. Unauthorized use, reproduction, or
              distribution of this content is prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">
              4. Limitation of Liability
            </h2>
            <p className="leading-relaxed">
              We are not liable for any damages arising out of your use or
              inability to use the website, including direct, indirect,
              incidental, or consequential damages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">
              5. Changes to Terms
            </h2>
            <p className="leading-relaxed">
              We reserve the right to modify these terms at any time. Your
              continued use of the website after changes are posted constitutes
              your acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">
              6. Governing Law
            </h2>
            <p className="leading-relaxed">
              These terms are governed by and construed in accordance with the
              laws of India. Any disputes arising under these terms shall be
              subject to the exclusive jurisdiction of the courts in Durg,
              Chhattisgarh.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">
              7. Contact Us
            </h2>
            <p className="leading-relaxed">
              If you have any questions about these terms, please contact us at
              <a
                href="mailto:Gensec_Scitech_Gymkhana@iitbhilai.ac.in"
                className="text-[#0A66C2] hover:underline ml-1"
              >
                Gensec_Scitech_Gymkhana@iitbhilai.ac.in
              </a>
              .
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsOfService;
