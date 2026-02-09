import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Light pink/white gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-pink-100" />

        {/* Animated mesh gradient */}
        <motion.div
          className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.15), transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: [0.4, 0, 0.2, 1] }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(244, 114, 182, 0.2), transparent 70%)',
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: [0.4, 0, 0.2, 1] }}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(236,72,153,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(236,72,153,0.2) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-pink-400/30 rounded-full"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <motion.div
              className="inline-flex items-center gap-2 bg-pink-100 border border-pink-200 rounded-full px-4 py-2 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            >
              <MapPin className="w-4 h-4 text-pink-500" />
              <span className="text-pink-600 text-sm font-medium">Ongole, Andhra Pradesh</span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-poppins font-bold text-gray-900 leading-[1.1] mb-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            >
              Find Your
              <br />
              <span className="relative inline-block">
                <span className="gradient-text relative z-10">Dream Property</span>
                <motion.span
                  className="absolute -inset-1 bg-gradient-to-r from-pink-300/30 to-pink-100/30 blur-xl -z-10"
                  animate={{ opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: [0.4, 0, 0.2, 1] }}
                />
              </span>
              <br />
              in Ongole
            </motion.h1>

            <motion.p
              className="text-gray-500 text-lg max-w-lg mb-10 leading-relaxed"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            >
              We offer a wide range of properties for sale — from premium investment
              lands to ready-to-move houses that exceed your expectations.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              <motion.a
                href="#projects"
                className="group relative flex items-center gap-2 bg-gradient-to-r from-pink-500 via-pink-400 to-pink-500 hover:from-pink-600 hover:to-pink-500 text-white font-bold px-8 py-4 rounded-full text-sm transition-all overflow-hidden"
                style={{ boxShadow: '0 10px 40px rgba(236, 72, 153, 0.3)' }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
                whileHover={{ scale: 1.08, y: -2, boxShadow: '0 15px 50px rgba(236, 72, 153, 0.4)' }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: '-100%', skewX: -20 }}
                  whileHover={{ x: '200%' }}
                  transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                />
                <span className="relative">Explore Properties</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform relative" />
              </motion.a>
              <motion.a
                href="#contact"
                className="group relative flex items-center gap-2 border-2 border-pink-300 hover:border-pink-500 bg-white/60 backdrop-blur-sm text-pink-600 font-semibold px-8 py-4 rounded-full text-sm transition-all overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-pink-50"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                />
                <span className="relative">Contact Us</span>
              </motion.a>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              className="flex gap-8 mt-14 pt-8 border-t border-pink-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.6, duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            >
              {[
                { number: '500+', label: 'Properties Sold' },
                { number: '10+', label: 'Years Experience' },
                { number: '1000+', label: 'Happy Families' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: 0.7 + i * 0.1, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                >
                  <div className="text-2xl font-poppins font-bold text-pink-600">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right side - Property Images */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Main property showcase */}
              <motion.div
                className="relative z-10 rounded-3xl overflow-hidden shadow-2xl bg-white p-6 border border-pink-100"
                initial={{ opacity: 0, x: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
              >
                {/* Promotional Image */}
                <motion.img
                  src={`${import.meta.env.BASE_URL}images/plots-for-sale-promo.jpg`}
                  alt="Plots for Sale - Sri Veda Real Estates"
                  className="w-full h-auto object-contain rounded-2xl"
                  loading="lazy"
                  decoding="async"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-pink-200/20 via-pink-100/20 to-white/10 blur-2xl opacity-0 group-hover:opacity-100 -z-10"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity, ease: [0.4, 0, 0.2, 1] }}
                />

                {/* Decorative badge */}
                <motion.div
                  className="absolute -top-3 -right-3 bg-gradient-to-r from-pink-500 to-pink-400 text-white font-bold text-xs px-5 py-2.5 rounded-full shadow-xl"
                  animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: [0.4, 0, 0.2, 1] }}
                >
                  ⭐ Featured Property
                </motion.div>
              </motion.div>

              {/* Background decorative elements */}
              <motion.div
                className="absolute -top-8 -left-8 w-32 h-32 border border-pink-200 rounded-3xl"
                animate={{ rotate: [0, 90, 0] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute -bottom-6 -right-6 w-24 h-24 bg-pink-100 rounded-2xl"
                animate={{ rotate: [0, -90, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-pink-300 rounded-full flex justify-center">
          <motion.div
            className="w-1.5 h-3 bg-pink-400 rounded-full mt-1.5"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default React.memo(Hero);
