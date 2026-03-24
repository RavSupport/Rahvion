import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Shield, Globe, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MathGridBackground from '@/components/MathGridBackground';
import PageTransition from '@/components/PageTransition';

const MarylandPage = () => {
  const services = [
    {
      icon: Shield,
      title: 'Personal IT Governance',
      description: 'Enterprise-grade IT discipline for Maryland households. Proactive monitoring and digital safety for Harford County families.',
      link: '/services',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Globe,
      title: 'Website Design',
      description: 'Professional digital presences for Bel Air businesses and local brands. Built for speed, security, and Maryland customers.',
      link: '/services', // Fixed link to main services page since specific web design page might not exist or be nested differently
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Sparkles,
      title: 'AI Automation',
      description: 'Custom AI agents and intelligent workflows tailored for Maryland households and professionals.',
      link: '/services',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <PageTransition>
      <Helmet>
        <title>Personal IT Support & Web Design in Maryland | Rahvion Bel Air</title>
        <meta name="description" content="Enterprise-grade IT support and professional web design serving Bel Air, Harford County, and across Maryland. Local expertise, personalized service." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Rahvion",
            "description": "Personal IT Support & Web Design in Maryland",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Bel Air",
              "addressRegion": "MD",
              "postalCode": "21014",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 39.5362,
              "longitude": -76.3488
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Bel Air"
              },
              {
                "@type": "AdministrativeArea",
                "name": "Harford County"
              },
              {
                "@type": "State",
                "name": "Maryland"
              }
            ],
            "email": "helpdesk@rahvion.com",
            "priceRange": "$$"
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1541188400998-b945be6f2190)',
            filter: 'brightness(0.3)'
          }}
        />
        <MathGridBackground />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 border border-white/20">
              <MapPin size={20} className="text-blue-400" />
              <span className="text-white font-semibold">Proudly Serving Maryland</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Personal IT Support & Web Design in Maryland
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl text-white/90 mb-4"
          >
            Serving Bel Air, Harford County, and across Maryland
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg text-white/70 mb-12 max-w-3xl mx-auto"
          >
            Local expertise meets enterprise-grade IT discipline. We understand Maryland households and businesses because we're part of the community.
          </motion.p>
        </div>
      </section>

      {/* Service Area Content */}
      <section className="py-16 md:py-24 relative">
        <MathGridBackground />
        <div className="container mx-auto px-4 relative z-10">
          
          {/* Why Local Matters */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-xl p-8 md:p-12 border border-white/10 shadow-2xl mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Why Choose Local IT Support?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white/70">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Community Understanding</h3>
                <p className="leading-relaxed">
                  We understand the unique needs of Maryland households and local businesses. From Baltimore suburbs to rural Harford County, we know the local landscape.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Responsive Service</h3>
                <p className="leading-relaxed">
                  Operating in your time zone with local office hours means faster response times and communication that fits your schedule.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Maryland Expertise</h3>
                <p className="leading-relaxed">
                  We're familiar with local internet providers, common technical challenges in the region, and Maryland-specific business requirements.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Personal Relationships</h3>
                <p className="leading-relaxed">
                  You're not just a ticket number. We build lasting relationships with our clients and take pride in serving our community.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Services for Maryland */}
          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
            >
              Services for Maryland Residents & Businesses
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/10 shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
                >
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6`}>
                    <service.icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                  <p className="text-white/70 mb-6 leading-relaxed">{service.description}</p>
                  <Link to={service.link}>
                    <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                      Learn More
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Service Area Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-xl p-8 md:p-12 border border-white/10 shadow-2xl mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Our Service Area</h2>
            <div className="text-white/70 text-center max-w-2xl mx-auto mb-8">
              <p className="text-lg leading-relaxed mb-4">
                <strong className="text-white">Based in Bel Air, Maryland</strong>, we proudly serve households and businesses throughout Harford County and across the state.
              </p>
              <p className="mb-4">Primary service areas include:</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                <div className="bg-white/5 rounded-lg p-3">Bel Air</div>
                <div className="bg-white/5 rounded-lg p-3">Harford County</div>
                <div className="bg-white/5 rounded-lg p-3">Aberdeen</div>
                <div className="bg-white/5 rounded-lg p-3">Edgewood</div>
                <div className="bg-white/5 rounded-lg p-3">Havre de Grace</div>
                <div className="bg-white/5 rounded-lg p-3">Joppa</div>
              </div>
              <p className="mt-6 text-sm">
                Remote support available statewide. Contact us to discuss service availability in your area.
              </p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:helpdesk@rahvion.com?subject=Core%20Plan%20Signup%20-%20%2425%2Fmo">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-6 text-lg">
                  Join Rahvion Core
                </Button>
              </a>
              <Link to="/services">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg">
                  Explore All Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default MarylandPage;