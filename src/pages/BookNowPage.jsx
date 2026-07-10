import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ShieldCheck, Phone } from 'lucide-react';
import MathGridBackground from '@/components/MathGridBackground';
import PageTransition from '@/components/PageTransition';
import BookNowForm from '@/components/BookNowForm';

const BookNowPage = () => (
  <PageTransition>
    <Helmet>
      <title>Book Now | Rahvion Residential IT Support</title>
      <meta
        name="description"
        content="Book a home technology consultation with Rahvion. Serving Bel Air, Harford County, and the Mid-Atlantic region."
      />
    </Helmet>

    <section className="py-24 relative min-h-screen bg-[#0B0B0D]">
      <MathGridBackground />
      <div className="container mx-auto px-4 relative z-10 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-[#F5F5F5]">
            Book Your <span className="text-[#D4AF37]">Consultation</span>
          </h1>
          <p className="text-[#A0A0A0] font-light">
            Tell us a bit about your home tech needs and we'll confirm a time within 24 hours.
          </p>
          <div className="mt-6 flex items-center justify-center gap-2 text-[#A0A0A0] text-sm font-medium tracking-wide">
            <ShieldCheck size={16} className="text-[#D4AF37]" />
            <span>America's Personal IT Department</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="bg-[#0B0B0D] backdrop-blur-lg rounded-xl p-8 border border-[#3A3F47] shadow-xl"
        >
          <BookNowForm />
        </motion.div>

        <p className="text-center text-[#A0A0A0] text-sm mt-8 font-light">
          Prefer to talk now?{' '}
          <a href="tel:+14104298159" className="inline-flex items-center gap-1 text-[#D4AF37] hover:underline">
            <Phone size={14} /> Call 410-429-8159
          </a>
        </p>
      </div>
    </section>
  </PageTransition>
);

export default BookNowPage;
