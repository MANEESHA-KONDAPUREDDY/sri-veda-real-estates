import React from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Home,
  TrendingUp,
  FileCheck,
  Handshake,
  Building,
  ArrowUpRight,
} from 'lucide-react';

const getImagePath = (imagePath) => `${import.meta.env.BASE_URL}${imagePath.replace(/^\//, '')}`;

const services = [
  { icon: MapPin, title: 'Open Plots', description: 'Premium open plots in prime locations of Ongole with clear titles and all necessary approvals for immediate construction.', color: 'from-pink-500 to-pink-300', image: 'images/service-open-plots.jpg' },
  { icon: Home, title: 'Ready to Move Houses', description: 'Beautifully designed houses ready for immediate possession with modern amenities and world-class construction quality.', color: 'from-pink-400 to-pink-200', image: 'images/service-ready-house.jpg' },
  { icon: TrendingUp, title: 'Investment Lands', description: 'Strategic investment lands with high appreciation potential. Our properties have consistently delivered excellent returns.', color: 'from-pink-500 to-rose-400', image: 'images/service-investment.jpg' },
  { icon: FileCheck, title: 'DTCP Approved Plots', description: 'Government-approved layouts with DTCP clearance, ensuring complete legal safety and peace of mind for your investment.', color: 'from-rose-400 to-pink-300', image: 'images/service-dtcp-plots.jpg' },
  { icon: Handshake, title: 'Property Consultation', description: 'Expert guidance and consultation for all your real estate needs. We help you make informed decisions for maximum value.', color: 'from-pink-300 to-pink-500', image: 'images/service-consultation.jpg' },
  { icon: Building, title: 'Venture Development', description: 'End-to-end venture development with modern infrastructure, landscaping, and all essential amenities for comfortable living.', color: 'from-pink-500 to-pink-400', image: 'images/service-development.jpg' },
];

const Services = () => {
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-pink-50 overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-200/40 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-100/40 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span className="inline-block text-pink-500 font-semibold text-sm tracking-widest uppercase mb-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}>Our Services</motion.span>
          <motion.h2 className="text-3xl lg:text-4xl xl:text-5xl font-poppins font-bold text-gray-900 mb-6" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}>What We <span className="text-pink-500">Offer</span></motion.h2>
          <motion.p className="text-gray-500 text-lg" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}>Comprehensive real estate solutions tailored to your needs, from open plots to ready-to-move homes.</motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="group relative bg-white rounded-3xl hover:shadow-2xl hover:shadow-pink-200/50 transition-all duration-500 overflow-hidden border border-pink-100 hover:border-pink-300"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.1 * i, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              whileHover={{ y: -12, scale: 1.02 }}
            >
              <div className="relative h-64 w-full overflow-hidden rounded-t-3xl">
                <img src={getImagePath(service.image)} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <motion.div className="absolute top-4 right-4" whileHover={{ scale: 1.1, rotate: 5 }}>
                  <span className="inline-block bg-gradient-to-r from-pink-500 to-pink-400 text-white px-4 py-2 rounded-full text-sm font-bold shadow-xl">⭐ Premium</span>
                </motion.div>
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color}`} />
              </div>

              <div className="relative p-7">
                <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-500 text-base leading-relaxed mb-6">{service.description}</p>
                <motion.button className="inline-flex items-center gap-2 text-pink-500 font-bold text-base hover:text-pink-600 transition-all duration-300" whileHover={{ x: 5 }} transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}>
                  <span>Learn More</span>
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Services);
