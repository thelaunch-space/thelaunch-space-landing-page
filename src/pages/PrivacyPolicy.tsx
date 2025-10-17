/*
 * Privacy Policy Page - Dedicated page for privacy policy content
 * Features responsive design consistent with thelaunch.space brand guidelines
 */
import { motion } from "motion/react";
import { ArrowLeft } from 'lucide-react';
import { BeamsBackground } from "@/components/ui/beams-background";
import { Header } from "@/components/ui/header";
import { navigateTo } from "@/lib/utils";

export const PrivacyPolicy = () => {
  const handleBackToHome = () => {
    navigateTo('/');
  };

  return (
    <div className="relative min-h-screen bg-neutral-950">
      {/* Background */}
      <BeamsBackground 
        intensity="strong" 
        className="fixed inset-0 w-screen h-screen z-0"
      />
      
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main className="relative z-10 pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            
            {/* Back Button */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <button
                onClick={handleBackToHome}
                className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300 group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
                <span className="text-sm">Back to Home</span>
              </button>
            </motion.div>

            {/* Page Header */}
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                Privacy Policy
              </h1>
              <p className="text-white/60 text-sm">
                Last updated: 17 October 2025
              </p>
            </motion.div>

            {/* Content */}
            <motion.div
              className="bg-neutral-900/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="prose prose-invert max-w-none">
                
                {/* Introduction */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <p className="text-white/90 leading-relaxed mb-8 text-lg">
                    VAMIX TECHNOLOGIES PRIVATE LIMITED ("Company", "we", "our", "us"), operating as <em>thelaunch.space</em>, values the trust you place in us. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website, interact with us, or use our services.
                  </p>
                </motion.div>

                <hr className="border-white/10 my-8" />

                {/* Section 1 */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="mb-8"
                >
                  <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">1. Information We Collect</h2>
                  <p className="text-white/90 leading-relaxed mb-4">
                    We may collect the following types of information:
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-blue-300 mr-3 mt-1 text-lg">•</span>
                      <div>
                        <strong className="text-white">Personal Information:</strong>
                        <span className="text-white/90"> Name, email address, phone number, company name, or other details you provide when contacting us, subscribing, or engaging our services.</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-300 mr-3 mt-1 text-lg">•</span>
                      <div>
                        <strong className="text-white">Usage Information:</strong>
                        <span className="text-white/90"> Data on how you interact with our website (IP address, browser type, device information, pages visited).</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-300 mr-3 mt-1 text-lg">•</span>
                      <div>
                        <strong className="text-white">Business Information:</strong>
                        <span className="text-white/90"> Details you share with us about your company, workflows, or projects when engaging our consultancy services.</span>
                      </div>
                    </li>
                  </ul>
                </motion.section>

                <hr className="border-white/10 my-8" />

                {/* Section 2 */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="mb-8"
                >
                  <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
                  <p className="text-white/90 leading-relaxed mb-4">
                    We use your information to:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-blue-300 mr-3 mt-1">•</span>
                      <span className="text-white/90">Provide and improve our services.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-300 mr-3 mt-1">•</span>
                      <span className="text-white/90">Respond to your inquiries and communications.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-300 mr-3 mt-1">•</span>
                      <span className="text-white/90">Personalize your experience with us.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-300 mr-3 mt-1">•</span>
                      <span className="text-white/90">Carry out contractual obligations and business operations.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-300 mr-3 mt-1">•</span>
                      <span className="text-white/90">Comply with legal and regulatory requirements.</span>
                    </li>
                  </ul>
                </motion.section>

                <hr className="border-white/10 my-8" />

                {/* Section 2A */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="mb-8"
                >
                  <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">2A. Product-Specific Data Collection</h2>
                  <p className="text-white/90 leading-relaxed mb-6">
                    thelaunch.space develops and operates digital products including Chrome extensions, web applications, and mobile apps. Each product may collect specific data necessary for functionality. Below are details for our active products:
                  </p>

                  {/* Chrome Extension Subsection */}
                  <div className="ml-4 space-y-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">Bolt.new First Prompt Generator (Chrome Extension)</h3>
                    <p className="text-white/90 leading-relaxed mb-4">
                      This Chrome extension helps users create optimized prompts for bolt.new through a guided questionnaire. When you use this extension, we collect and process:
                    </p>

                    {/* Data Collected */}
                    <div className="mb-6">
                      <h4 className="text-base font-semibold text-white mb-3">Data Collected:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-blue-300 mr-3 mt-1">•</span>
                          <span className="text-white/90">Authentication credentials (email and password) for account access</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-300 mr-3 mt-1">•</span>
                          <span className="text-white/90">Questionnaire responses including project type, target audience, pain points, solution descriptions, and design preferences</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-300 mr-3 mt-1">•</span>
                          <span className="text-white/90">AI-generated prompts created based on your responses</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-300 mr-3 mt-1">•</span>
                          <span className="text-white/90">Usage analytics (whether prompts were edited or copied)</span>
                        </li>
                      </ul>
                    </div>

                    {/* How This Data Is Used */}
                    <div className="mb-6">
                      <h4 className="text-base font-semibold text-white mb-3">How This Data Is Used:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-blue-300 mr-3 mt-1">•</span>
                          <span className="text-white/90">Stored securely via Supabase (our backend infrastructure provider)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-300 mr-3 mt-1">•</span>
                          <span className="text-white/90">Processed through OpenRouter API using Anthropic's Claude AI models to generate customized prompts</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-300 mr-3 mt-1">•</span>
                          <span className="text-white/90">Used to improve service quality and user experience</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-300 mr-3 mt-1">•</span>
                          <span className="text-white/90">Not sold, shared, or used for advertising purposes</span>
                        </li>
                      </ul>
                    </div>

                    {/* Third-Party Services */}
                    <div className="mb-6">
                      <h4 className="text-base font-semibold text-white mb-3">Third-Party Services:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-blue-300 mr-3 mt-1">•</span>
                          <span className="text-white/90">Supabase: Secure data storage and authentication</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-300 mr-3 mt-1">•</span>
                          <span className="text-white/90">OpenRouter/Anthropic: AI prompt generation via API</span>
                        </li>
                      </ul>
                    </div>

                    {/* Limited Use Compliance */}
                    <div className="mb-6">
                      <h4 className="text-base font-semibold text-white mb-3">Limited Use Compliance:</h4>
                      <p className="text-white/90 leading-relaxed">
                        Our use of data collected through this extension adheres to the Chrome Web Store User Data Policy, including Limited Use requirements. Data is used exclusively to provide prompt generation functionality and is not transferred to third parties except as required for core functionality.
                      </p>
                    </div>

                    {/* Data Retention */}
                    <div>
                      <h4 className="text-base font-semibold text-white mb-3">Data Retention:</h4>
                      <p className="text-white/90 leading-relaxed">
                        Your data is retained as long as your account remains active. You may request deletion of your data at any time by contacting us at <a href="mailto:krishna@thelaunch.space" className="text-blue-300 hover:text-blue-200 transition-colors duration-300 underline underline-offset-2">krishna@thelaunch.space</a>.
                      </p>
                    </div>
                  </div>
                </motion.section>

                <hr className="border-white/10 my-8" />

                {/* Section 3 */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  className="mb-8"
                >
                  <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">3. Information Sharing & Disclosure</h2>
                  <p className="text-white/90 leading-relaxed mb-4">
                    We do not sell your personal information. We may share data only in these cases:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-blue-300 mr-3 mt-1">•</span>
                      <span className="text-white/90">
                        With trusted service providers and partners who assist in delivering our services (bound by confidentiality obligations).
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-300 mr-3 mt-1">•</span>
                      <span className="text-white/90">
                        To comply with applicable laws, regulations, or legal processes.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-300 mr-3 mt-1">•</span>
                      <span className="text-white/90">
                        To protect the rights, safety, and property of our company, our clients, or others.
                      </span>
                    </li>
                  </ul>
                </motion.section>

                <hr className="border-white/10 my-8" />

                {/* Section 4 */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.6 }}
                  className="mb-8"
                >
                  <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">4. Data Security</h2>
                  <p className="text-white/90 leading-relaxed">
                    We use reasonable technical and organizational measures to safeguard your personal information. While we strive to protect your data, no system can guarantee absolute security.
                  </p>
                </motion.section>

                <hr className="border-white/10 my-8" />

                {/* Section 5 */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.8 }}
                  className="mb-8"
                >
                  <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">5. Your Rights</h2>
                  <p className="text-white/90 leading-relaxed mb-4">
                    As per applicable laws in India, you may have rights to:
                  </p>
                  <ul className="space-y-3 mb-4">
                    <li className="flex items-start">
                      <span className="text-blue-300 mr-3 mt-1">•</span>
                      <span className="text-white/90">Access, update, or correct your personal information.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-300 mr-3 mt-1">•</span>
                      <span className="text-white/90">Request deletion of your information, subject to legal and contractual obligations.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-300 mr-3 mt-1">•</span>
                      <span className="text-white/90">Withdraw consent for specific data processing activities.</span>
                    </li>
                  </ul>
                  <p className="text-white/90 leading-relaxed">
                    To exercise these rights, please contact us at: <a href="mailto:krishna@thelaunch.space" className="text-blue-300 hover:text-blue-200 transition-colors duration-300 underline underline-offset-2">krishna@thelaunch.space</a>.
                  </p>
                </motion.section>

                <hr className="border-white/10 my-8" />

                {/* Section 6 */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 2.0 }}
                  className="mb-8"
                >
                  <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">6. Third-Party Links</h2>
                  <p className="text-white/90 leading-relaxed">
                    Our website may contain links to external websites. We are not responsible for the privacy practices or content of those websites.
                  </p>
                </motion.section>

                <hr className="border-white/10 my-8" />

                {/* Section 7 */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 2.2 }}
                  className="mb-8"
                >
                  <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">7. Updates to This Policy</h2>
                  <p className="text-white/90 leading-relaxed">
                    We may update this Privacy Policy from time to time. Any changes will be posted on this page with the "last updated" date.
                  </p>
                </motion.section>

                <hr className="border-white/10 my-8" />

                {/* Section 8 */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 2.4 }}
                  className="mb-8"
                >
                  <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">8. Contact Us</h2>
                  <p className="text-white/90 leading-relaxed mb-4">
                    For questions or concerns about this Privacy Policy, please contact us:
                  </p>
                  <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                    <p className="text-white/90 leading-relaxed">
                      <strong>VAMIX TECHNOLOGIES PRIVATE LIMITED</strong><br />
                      No 235, 13th Cross, Hoyasala Nagar 2nd Stage, Indiranagar,<br />
                      Bengaluru North, Karnataka, India – 560038<br />
                      Email: <a href="mailto:krishna@thelaunch.space" className="text-blue-300 hover:text-blue-200 transition-colors duration-300 underline underline-offset-2">krishna@thelaunch.space</a>
                    </p>
                  </div>
                </motion.section>

              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};
