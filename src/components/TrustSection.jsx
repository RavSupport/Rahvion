import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const DEFAULT_TESTIMONIALS = [
  {
    quote: "Rahvion flagged a scam email that looked 100% real. They saved me from a major headache!",
    name: 'Bel Air Local',
    location: 'Bel Air, MD',
    photo: null
  },
  {
    quote: 'Add your next client testimonial here.',
    name: 'Client Name',
    location: 'Neighborhood, MD',
    photo: null
  },
  {
    quote: 'Add your next client testimonial here.',
    name: 'Client Name',
    location: 'Neighborhood, MD',
    photo: null
  }
];

const Avatar = ({ name, photo }) => {
  if (photo) {
    return (
      <img
        src={photo}
        alt={`Photo of ${name}`}
        className="w-14 h-14 rounded-full object-cover border border-[#D4AF37]/40"
      />
    );
  }

  const initials = name
    .split(' ')
    .map((word) => word[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  return (
    <div
      className="w-14 h-14 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] font-bold"
      aria-hidden="true"
    >
      {initials}
    </div>
  );
};

const TrustSection = ({ testimonials = DEFAULT_TESTIMONIALS }) => (
  <section className="py-24 bg-[#0B0B0D] border-y border-[#3A3F47]" aria-labelledby="trust-heading">
    <div className="container mx-auto px-4">
      <h2 id="trust-heading" className="font-serif text-3xl md:text-4xl font-bold text-[#F5F5F5] text-center mb-4">
        Trusted by Local Homeowners
      </h2>
      <p className="text-center text-[#A0A0A0] font-light max-w-2xl mx-auto mb-16">
        Real feedback from the families and homeowners we support across the Mid-Atlantic.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.figure
            key={`${testimonial.name}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-[#0B0B0D] border border-[#3A3F47] rounded-xl p-8 flex flex-col h-full"
          >
            <div className="flex gap-1 mb-4" aria-hidden="true">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={16} className="text-[#D4AF37] fill-[#D4AF37]" />
              ))}
            </div>
            <blockquote className="text-[#F5F5F5] font-light leading-relaxed flex-grow mb-6">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <figcaption className="flex items-center gap-3">
              <Avatar name={testimonial.name} photo={testimonial.photo} />
              <div>
                <p className="text-[#F5F5F5] font-semibold text-sm">{testimonial.name}</p>
                <p className="text-[#A0A0A0] text-xs">{testimonial.location}</p>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </div>
  </section>
);

export default TrustSection;
