import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, Users, Video, CreditCard, Lock, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MathGridBackground from '@/components/MathGridBackground';
import PageTransition from '@/components/PageTransition';

const ScamFraudProtectionPage = () => {
  const threats = [
    {
      icon: Mail,
      title: 'Phishing and Email Scams',
      whatItIs: 'Fraudulent emails that appear to come from legitimate sources (banks, government agencies, trusted companies) designed to trick you into revealing sensitive information or clicking malicious links.',
      howToRecognize: [
        'Urgent or threatening language ("Act now or your account will be closed")',
        'Requests for personal information via email',
        'Suspicious sender addresses that mimic legitimate domains',
        'Poor grammar or spelling errors',
        'Generic greetings instead of your name'
      ],
      prevention: [
        'Never click links in unsolicited emails',
        'Verify sender addresses carefully',
        'Contact companies directly using official contact information',
        'Enable two-factor authentication on all accounts',
        'Keep security software updated'
      ],
      ifTargeted: 'Do not respond or click any links. Forward suspicious emails to helpdesk@rahvion.com for verification. If you\'ve already clicked a link, change your passwords immediately and contact us.',
      gradient: 'from-red-500 to-orange-500'
    },
    {
      icon: Phone,
      title: 'Tech Support Scams',
      whatItIs: 'Scammers pose as technical support representatives from well-known companies, claiming your computer has a virus or security issue. They attempt to gain remote access to your device or trick you into paying for unnecessary services.',
      howToRecognize: [
        'Unsolicited calls claiming to be from Microsoft, Apple, or other tech companies',
        'Pop-up warnings claiming your computer is infected',
        'Requests for remote access to your computer',
        'High-pressure tactics and urgency',
        'Requests for payment via gift cards or wire transfer'
      ],
      prevention: [
        'Legitimate companies never cold-call about computer issues',
        'Never grant remote access to unsolicited callers',
        'Close suspicious pop-ups without clicking',
        'Install ad-blockers and pop-up blockers',
        'Keep your operating system and software updated'
      ],
      ifTargeted: 'Hang up immediately. If you\'ve already granted remote access, disconnect from the internet and contact us right away. Run a security scan and change all passwords from a different device.',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Users,
      title: 'Social Engineering',
      whatItIs: 'Manipulation tactics that exploit human psychology to trick people into divulging confidential information or performing actions that compromise security. This includes pretexting, baiting, and impersonation.',
      howToRecognize: [
        'Requests for information that seem routine but are actually sensitive',
        'Appeals to authority or fear ("Your boss needs this immediately")',
        'Too-good-to-be-true offers or opportunities',
        'Strangers building rapport to gain trust',
        'Unusual requests from familiar contacts'
      ],
      prevention: [
        'Verify identities through separate, trusted communication channels',
        'Be skeptical of urgent requests for money or information',
        'Never share passwords or security codes',
        'Question unusual requests, even from familiar sources',
        'Trust your instincts if something feels wrong'
      ],
      ifTargeted: 'Stop communication immediately. Verify the person\' identity through a separate, trusted channel. Document the interaction and report it to us for analysis.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Video,
      title: 'Deepfakes and AI-Generated Content',
      whatItIs: 'Sophisticated fake videos, audio recordings, or images created using artificial intelligence to impersonate real people. These can be used for fraud, extortion, or spreading misinformation.',
      howToRecognize: [
        'Unnatural facial movements or expressions',
        'Audio that doesn\'t quite match lip movements',
        'Inconsistent lighting or shadows',
        'Blurry or distorted areas around the face',
        'Content that seems out of character for the person'
      ],
      prevention: [
        'Verify unusual requests through multiple channels',
        'Be especially cautious with video/audio requests for money or sensitive actions',
        'Use Rahvion\'s human verification service for suspicious content',
        'Educate family members about deepfake capabilities',
        'Establish code words with close contacts for verification'
      ],
      ifTargeted: 'Do not comply with any requests. Save the content and contact us immediately for expert analysis. We provide human verification to determine authenticity.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: CreditCard,
      title: 'Identity Theft',
      whatItIs: 'The fraudulent acquisition and use of your personal information (name, Social Security number, credit card details) to commit fraud or other crimes in your name.',
      howToRecognize: [
        'Unexplained charges on credit cards or bank statements',
        'Bills or statements for accounts you didn\'t open',
        'Calls from debt collectors about unfamiliar debts',
        'Denial of credit for unknown reasons',
        'Missing mail or unexpected account notifications'
      ],
      prevention: [
        'Monitor credit reports regularly (free at AnnualCreditReport.com)',
        'Use strong, unique passwords for financial accounts',
        'Enable account alerts for transactions',
        'Shred sensitive documents before disposal',
        'Freeze your credit if not actively using it'
      ],
      ifTargeted: 'Contact your bank and credit card companies immediately. File a report with the FTC at IdentityTheft.gov. Place fraud alerts with credit bureaus. Contact us to review your security posture.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Lock,
      title: 'Ransomware and Malware',
      whatItIs: 'Malicious software that encrypts your files and demands payment for restoration (ransomware) or secretly monitors your activity, steals data, or damages your system (malware).',
      howToRecognize: [
        'Files suddenly become inaccessible or encrypted',
        'Pop-up demanding payment to regain access',
        'Computer running unusually slow',
        'Unexpected programs or browser extensions',
        'Frequent crashes or error messages'
      ],
      prevention: [
        'Keep regular backups of important files (offline and cloud)',
        'Never download attachments from unknown sources',
        'Keep all software and operating systems updated',
        'Use reputable antivirus and anti-malware software',
        'Avoid clicking ads or suspicious links'
      ],
      ifTargeted: 'Do NOT pay the ransom. Disconnect from the internet immediately. Contact us before taking any action. We can help assess the situation and recommend recovery options.',
      gradient: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <PageTransition>
      <Helmet>
        <title>Scam & Fraud Protection Guide - Detailed Threat Information | Rahvion</title>
        <meta name="description" content="Comprehensive guide to recognizing and preventing phishing, tech support scams, social engineering, deepfakes, identity theft, and ransomware." />
      </Helmet>

      <section className="py-16 md:py-24 relative">
        <MathGridBackground />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Scam & Fraud Protection
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Comprehensive guidance to recognize, prevent, and respond to common digital threats
            </p>
          </motion.div>

          {/* Threat Sections */}
          <div className="space-y-12">
            {threats.map((threat, index) => (
              <motion.div
                key={threat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-xl p-8 md:p-12 border border-white/10 shadow-2xl"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${threat.gradient} flex items-center justify-center flex-shrink-0`}>
                    <threat.icon size={32} className="text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white">{threat.title}</h2>
                </div>

                <div className="space-y-6 text-white/70">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">What It Is</h3>
                    <p className="leading-relaxed">{threat.whatItIs}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">How to Recognize It</h3>
                    <ul className="space-y-2">
                      {threat.howToRecognize.map((item, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <AlertCircle size={16} className="mt-1 text-yellow-400 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Prevention Steps</h3>
                    <ul className="space-y-2">
                      {threat.prevention.map((item, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <Lock size={16} className="mt-1 text-green-400 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                    <h3 className="text-xl font-semibold text-red-400 mb-2">What to Do If Targeted</h3>
                    <p className="text-white/80">{threat.ifTargeted}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16 mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Need Help?</h2>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              If you've encountered any of these threats or need verification of suspicious content, Rahvion Core members get unlimited support.
            </p>
            <a href="mailto:helpdesk@rahvion.com?subject=Core%20Plan%20Signup%20-%20%2425%2Fmo">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-6 text-lg">
                Join Rahvion Core
              </Button>
            </a>
          </motion.div>

          {/* Disclaimer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10 text-center"
          >
            <p className="text-white/70">
              <strong className="text-white">Risk Reduction, Not Absolute Prevention:</strong> Following these guidelines significantly reduces your risk, but no security practice can guarantee complete protection. Stay vigilant, trust your instincts, and don't hesitate to ask for help when something seems suspicious.
            </p>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default ScamFraudProtectionPage;