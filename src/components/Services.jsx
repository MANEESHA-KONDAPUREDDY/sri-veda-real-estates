import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Home,
  TrendingUp,
  FileCheck,
  Handshake,
  Building,
  ArrowUpRight,
  Check,
} from 'lucide-react';

const getImagePath = (imagePath) => `${import.meta.env.BASE_URL}${imagePath.replace(/^\//, '')}`;

const services = [
  {
    icon: MapPin,
    title: 'Open Plots',
    shortDesc: 'Premium plots in prime locations',
    description: 'Premium open plots in prime locations of Ongole with clear titles and all necessary approvals for immediate construction.',
    features: ['Clear Titles', 'Prime Locations', 'Immediate Construction', 'Legal Safety'],
    color: 'from-purple-600 to-cyan-500',
    image: 'images/service-open-plots.jpg',
  },
  {
    icon: Home,
    title: 'Ready to Move Houses',
    shortDesc: 'Modern homes ready for possession',
    description: 'Beautifully designed houses ready for immediate possession with modern amenities and world-class construction quality.',
    features: ['Modern Design', 'Premium Quality', 'Immediate Possession', 'World-Class Amenities'],
    color: 'from-cyan-500 to-purple-600',
    image: 'images/service-ready-house.jpg',
  },
  {
    icon: TrendingUp,
    title: 'Investment Lands',
    shortDesc: 'High appreciation potential',
    description: 'Strategic investment lands with high appreciation potential. Our properties have consistently delivered excellent returns.',
    features: ['Strategic Location', 'High Returns', 'Future Growth', 'Expert Guidance'],
    color: 'from-purple-700 to-cyan-400',
    image: 'images/service-investment.jpg',
  },
  {
    icon: FileCheck,
    title: 'DTCP Approved Plots',
    shortDesc: 'Government approved layouts',
    description: 'Government-approved layouts with DTCP clearance, ensuring complete legal safety and peace of mind for your investment.',
    features: ['DTCP Clearance', 'Legal Safety', 'Government Approved', 'Peace of Mind'],
    color: 'from-cyan-400 to-purple-700',
    image: 'images/service-dtcp-plots.jpg',
  },
  {
    icon: Handshake,
    title: 'Property Consultation',
    shortDesc: 'Expert real estate guidance',
    description: 'Expert guidance and consultation for all your real estate needs. We help you make informed decisions for maximum value.',
    features: ['Expert Guidance', 'Market Analysis', 'Investment Planning', 'Personalized Service'],
    color: 'from-purple-600 to-cyan-500',
    image: 'images/service-consultation.jpg',
  },
  {
    icon: Building,
    title: 'Venture Development',
    shortDesc: 'End-to-end project development',
    description: 'End-to-end venture development with modern infrastructure, landscaping, and all essential amenities for comfortable living.',
    features: ['Modern Infrastructure', 'Premium Landscaping', 'Essential Amenities', 'Quality Construction'],
    color: 'from-cyan-500 to-purple-600',
    image: 'images/service-development.jpg',
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0F172A 0%, #1E1B4B 50%, #0F172A 100%)',
      }}
    >
      {/* 3D Background decorations */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.2), transparent 70%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.25), transparent 70%)',
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            className="inline-block text-cyan-400 font-semibold text-sm tracking-widest uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            style={{ textShadow: '0 0 20px rgba(6, 182, 212, 0.5)' }}
          >
            Our Services
          </motion.span>
          <motion.h2
            className="text-3xl lg:text-4xl xl:text-5xl font-poppins font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          >
            What We <span className="text-cyan-400">Offer</span>
          </motion.h2>
          <motion.p
            className="text-slate-300 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          >
            Comprehensive real estate solutions tailored to your needs, from open plots to ready-to-move homes.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="perspective-1200 h-[480px]"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: 0.1 * i, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            >
              {/* 3D Flip Card Container */}
              <motion.div
                className="relative w-full h-full preserve-3d"
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* FRONT FACE */}
                <div
                  className="absolute inset-0 backface-hidden bg-slate-800/50 rounded-3xl overflow-hidden border border-purple-500/30 shadow-3d-card backdrop-blur-sm neon-purple-hover"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className="relative h-56 w-full overflow-hidden">
                    <img
                      src={getImagePath(service.image)}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

                    {/* Premium Badge with 3D animation */}
                    <motion.div
                      className="absolute top-4 right-4"
                      animate={{
                        rotateZ: [0, 5, -5, 0],
                        scale: [1, 1.05, 1],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <span className="inline-block bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-3d-button neon-dual">
                        ⭐ Premium
                      </span>
                    </motion.div>

                    {/* Icon */}
                    <div className="absolute bottom-4 left-4">
                      <div className="w-14 h-14 bg-cyan-500 rounded-2xl flex items-center justify-center shadow-3d-button neon-cyan">
                        <service.icon className="w-7 h-7 text-slate-900" />
                      </div>
                    </div>

                    <div className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${service.color}`} />
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-poppins font-bold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 text-sm mb-4">{service.shortDesc}</p>

                    <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm">
                      <span>Hover to learn more</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* BACK FACE */}
                <div
                  className="absolute inset-0 backface-hidden rounded-3xl overflow-hidden border border-cyan-400/50 shadow-3d-elevated neon-cyan"
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                    background: 'linear-gradient(135deg, #0F172A 0%, #1E1B4B 50%, #06B6D4 100%)',
                  }}
                >
                  <div className="h-full flex flex-col p-6 text-white">
                    {/* Icon */}
                    <div className="mb-4">
                      <div className="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center neon-cyan">
                        <service.icon className="w-6 h-6 text-slate-900" />
                      </div>
                    </div>

                    <h3 className="text-2xl font-poppins font-bold mb-3">{service.title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-5">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2 mb-auto">
                      {service.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-center gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <div className="w-5 h-5 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <Check className="w-3 h-3 text-slate-900" />
                          </div>
                          <span className="text-sm text-slate-300">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <motion.a
                      href="#contact"
                      className="mt-4 w-full bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white font-bold py-3 rounded-xl text-center transition-all shadow-3d-button neon-dual"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Get Started
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Services);
