import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Cookie, Server, FileText } from 'lucide-react';
import MathGridBackground from '@/components/MathGridBackground';
import PageTransition from '@/components/PageTransition';

const PrivacyPolicyPage = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Privacy Policy - Rahvion</title>
        <meta name="description" content="Rahvion Privacy Policy. How we collect, use, and protect your personal information." />
      </Helmet>

      <div className="relative min-h-screen bg-[#0B0B0D]">
        <MathGridBackground />
        
        <div className="container mx-auto px-4 py-24 relative z-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-[#F5F5F5]">
              Privacy Policy
            </h1>
            <p className="text-[#D4AF37] font-medium">Last Updated: February 16, 2026</p>
          </motion.div>

          {/* AdSense Container 1 */}
          <div className="w-full h-32 bg-[#1A1F2E] border border-[#3A3F47] border-dashed rounded-xl flex items-center justify-center text-[#A0A0A0] text-sm mb-12">
            AdSense Placement
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-[#0B0B0D] backdrop-blur-xl border border-[#3A3F47] rounded-2xl p-8 md:p-12 space-y-12 text-[#A0A0A0] font-light leading-relaxed"
          >
            
            {/* Introduction */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="text-[#D4AF37]" size={24} />
                <h2 className="text-2xl font-serif font-bold text-[#F5F5F5]">Introduction</h2>
              </div>
              <p>
                At Rahvion ("we", "us", or "our"), one of our main priorities is the privacy of our visitors and clients. This Privacy Policy document contains types of information that is collected and recorded by Rahvion and how we use it. If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
              </p>
            </section>

            {/* Information Collection */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="text-[#D4AF37]" size={24} />
                <h2 className="text-2xl font-serif font-bold text-[#F5F5F5]">Information Collection</h2>
              </div>
              <p className="mb-4">
                We collect information to provide better services to all our users. This includes:
              </p>
              
              <h3 className="text-lg font-bold text-[#F5F5F5] mb-2">Tool Usage Data</h3>
              <p className="mb-4">
                When you use our diagnostic tools or client portal, we may collect data regarding the performance and health of your devices. This data is used solely for the purpose of technical support and system optimization.
              </p>

              <h3 className="text-lg font-bold text-[#F5F5F5] mb-2">Automatically Collected Information</h3>
              <p>
                We automatically collect certain information when you visit, use, or navigate the Website. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Website, and other technical information.
              </p>
            </section>

            {/* Log Data */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Server className="text-[#D4AF37]" size={24} />
                <h2 className="text-2xl font-serif font-bold text-[#F5F5F5]">Log Data</h2>
              </div>
              <p>
                Rahvion follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this as a part of hosting services' analytics. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.
              </p>
            </section>

            {/* Cookies */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Cookie className="text-[#D4AF37]" size={24} />
                <h2 className="text-2xl font-serif font-bold text-[#F5F5F5]">Cookies and Web Beacons</h2>
              </div>
              <p className="mb-4">
                Like any other website, Rahvion uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
              </p>
              
              <h3 className="text-lg font-bold text-[#F5F5F5] mb-2">Types of Cookies We Use</h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Essential Cookies:</strong> Necessary for the website to function properly.</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website.</li>
                <li><strong>Marketing Cookies:</strong> Used to track visitors across websites to display relevant ads.</li>
              </ul>
            </section>

            {/* Google DoubleClick DART Cookie */}
            <section className="bg-[#1A1F2E] p-6 rounded-xl border border-[#3A3F47]">
              <h2 className="text-2xl font-serif font-bold text-[#F5F5F5] mb-4">Google DoubleClick DART Cookie</h2>
              <p className="mb-4">
                Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to our site and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL:
              </p>
              <a 
                href="https://policies.google.com/technologies/ads" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#D4AF37] hover:underline break-all"
              >
                https://policies.google.com/technologies/ads
              </a>
            </section>

            {/* Service Providers */}
            <section>
              <h2 className="text-2xl font-serif font-bold text-[#F5F5F5] mb-4">Service Providers</h2>
              <p>
                We may employ third-party companies and individuals to facilitate our Service, to provide the Service on our behalf, to perform Service-related services, or to assist us in analyzing how our Service is used. These third parties have access to your Personal Information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
              </p>
            </section>

            {/* Data Usage & Security */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Lock className="text-[#D4AF37]" size={24} />
                <h2 className="text-2xl font-serif font-bold text-[#F5F5F5]">Data Usage & Security</h2>
              </div>
              <p className="mb-4">
                We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
              </p>
              
              <h3 className="text-lg font-bold text-[#F5F5F5] mb-2">Data We Do NOT Collect</h3>
              <p>
                Rahvion does not knowingly collect sensitive personal data such as health information, political opinions, religious beliefs, or trade union membership unless specifically required for a support case (e.g., accessibility software setup) and with your explicit consent.
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-2xl font-serif font-bold text-[#F5F5F5] mb-4">Children's Information</h2>
              <p>
                Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity. Rahvion does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
              </p>
            </section>

            {/* Changes to Privacy Policy */}
            <section>
              <h2 className="text-2xl font-serif font-bold text-[#F5F5F5] mb-4">Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately, after they are posted on this page.
              </p>
            </section>

            {/* Contact Us */}
            <section className="border-t border-[#3A3F47] pt-8">
              <h2 className="text-2xl font-serif font-bold text-[#F5F5F5] mb-4">Contact Us</h2>
              <p className="mb-4">
                If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.
              </p>
              <div className="flex flex-col gap-2">
                <a href="mailto:helpdesk@rahvion.com" className="text-[#D4AF37] hover:underline flex items-center gap-2">
                   <Eye size={16} /> helpdesk@rahvion.com
                </a>
                <a href="tel:+14104298159" className="text-[#D4AF37] hover:underline flex items-center gap-2">
                   <Shield size={16} /> 410-429-8159
                </a>
              </div>
            </section>

          </motion.div>

           {/* AdSense Container 2 */}
           <div className="w-full h-32 bg-[#1A1F2E] border border-[#3A3F47] border-dashed rounded-xl flex items-center justify-center text-[#A0A0A0] text-sm mt-12">
            AdSense Placement
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default PrivacyPolicyPage;