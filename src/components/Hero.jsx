import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ rotateX: 0, rotateY: 0 });
  const cardRef = useRef(null);

  // Scroll parallax effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mouse tracking for 3D tilt effect
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 15;
    const rotateX = ((centerY - y) / centerY) * 15;

    setMousePosition({ rotateX, rotateY });
  };

  const resetTilt = () => {
    setMousePosition({ rotateX: 0, rotateY: 0 });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden preserve-3d perspective-1500"
    >
      {/* Multi-layer parallax background */}
      <div className="absolute inset-0">
        {/* Base gradient - Navy theme */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-blue-900"
          style={{
            background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #1e293b 100%)',
          }}
        />

        {/* Parallax Layer 1 - Far back */}
        <motion.div
          className="absolute top-0 right-0 w-[900px] h-[900px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(245, 158, 11, 0.25), transparent 70%)',
            transform: `translateZ(-300px) translateY(${scrollY * -0.5}px)`,
          }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 60, 0],
            y: [0, -40, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: [0.4, 0, 0.2, 1] }}
        />

        {/* Parallax Layer 2 - Mid back */}
        <motion.div
          className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(30, 58, 138, 0.4), transparent 70%)',
            transform: `translateZ(-150px) translateY(${scrollY * -0.3}px)`,
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -40, 0],
            y: [0, 60, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: [0.4, 0, 0.2, 1] }}
        />

        {/* Parallax Layer 3 - Center */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(252, 211, 77, 0.3), transparent 70%)',
            transform: `translate(-50%, -50%) translateZ(0px) translateY(${scrollY * -0.1}px)`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />

        {/* Parallax Layer 4 - Front */}
        <motion.div
          className="absolute top-20 left-20 w-[400px] h-[400px] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(245, 158, 11, 0.2), transparent 70%)',
            transform: `translateZ(100px) translateY(${scrollY * 0.1}px)`,
          }}
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: [0.4, 0, 0.2, 1] }}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(245,158,11,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        {/* 3D Floating particles with depth */}
        {[...Array(20)].map((_, i) => {
          const randomZ = (Math.random() - 0.5) * 200; // -100px to 100px
          const randomDelay = Math.random() * 4;
          const randomDuration = 4 + Math.random() * 4;

          return (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
                background: randomZ > 0 ? 'rgba(245, 158, 11, 0.4)' : 'rgba(37, 99, 235, 0.3)',
                transformStyle: 'preserve-3d',
              }}
              animate={{
                y: [0, -40, 0],
                rotateX: [0, 360, 0],
                rotateY: [0, 180, 0],
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: randomDuration,
                repeat: Infinity,
                delay: randomDelay,
                ease: [0.4, 0, 0.2, 1],
              }}
            />
          );
        })}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <motion.div
              className="inline-flex items-center gap-2 bg-navy-900/50 border border-gold-400/30 rounded-full px-4 py-2 mb-8 backdrop-blur-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <MapPin className="w-4 h-4 text-gold-400" style={{ filter: 'drop-shadow(0 0 8px rgba(245, 158, 11, 0.5))' }} />
              <span className="text-gold-400 text-sm font-medium">Ongole, Andhra Pradesh</span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-poppins font-bold text-white leading-[1.1] mb-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
              style={{ textShadow: '2px 2px 20px rgba(30, 58, 138, 0.8)' }}
            >
              Find Your
              <br />
              <span className="relative inline-block">
                <span className="gradient-text relative z-10 text-3d-navy-gold">Dream Property</span>
                <motion.span
                  className="absolute -inset-1 bg-gradient-to-r from-gold-400/30 to-gold-500/20 blur-2xl -z-10"
                  animate={{ opacity: [0.5, 0.9, 0.5], scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: [0.4, 0, 0.2, 1] }}
                />
              </span>
              <br />
              <span className="text-gold-400">in Ongole</span>
            </motion.h1>

            <motion.p
              className="text-blue-200 text-lg max-w-lg mb-10 leading-relaxed"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              style={{ textShadow: '1px 1px 10px rgba(0, 0, 0, 0.5)' }}
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
                className="group relative flex items-center gap-2 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 hover:from-gold-600 hover:to-gold-500 text-navy-900 font-bold px-8 py-4 rounded-full text-sm transition-all overflow-hidden shadow-3d-button"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
                whileHover={{
                  scale: 1.08,
                  y: -4,
                  boxShadow: '0 20px 60px rgba(245, 158, 11, 0.5)',
                }}
                whileTap={{ scale: 0.95 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.div
                  className="absolute inset-0 bg-white/30"
                  initial={{ x: '-100%', skewX: -20 }}
                  whileHover={{ x: '200%' }}
                  transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                />
                <span className="relative">Explore Properties</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform relative" />
              </motion.a>

              <motion.a
                href="#contact"
                className="group relative flex items-center gap-2 border-2 border-gold-400/50 hover:border-gold-400 bg-navy-800/40 backdrop-blur-sm text-gold-400 font-semibold px-8 py-4 rounded-full text-sm transition-all overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.div
                  className="absolute inset-0 bg-gold-500/20"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                />
                <span className="relative">Contact Us</span>
              </motion.a>
            </motion.div>

            {/* Quick stats with 3D effect */}
            <motion.div
              className="flex gap-8 mt-14 pt-8 border-t border-gold-400/20"
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
                  whileHover={{
                    scale: 1.1,
                    rotateX: 10,
                    transition: { duration: 0.3 },
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="text-2xl font-poppins font-bold text-gold-400 text-3d-gold">
                    {stat.number}
                  </div>
                  <div className="text-blue-300 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right side - 3D Property Showcase with Mouse Tracking */}
          <div className="hidden lg:block">
            <div className="relative perspective-1500">
              {/* Main property showcase with 3D tilt */}
              <motion.div
                ref={cardRef}
                className="relative z-10 rounded-3xl overflow-hidden bg-white/5 backdrop-blur-sm p-6 border border-gold-400/30 shadow-3d-card transform-3d"
                initial={{ opacity: 0, x: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
                onMouseMove={handleMouseMove}
                onMouseLeave={resetTilt}
                animate={{
                  rotateX: mousePosition.rotateX,
                  rotateY: mousePosition.rotateY,
                }}
                style={{
                  transformStyle: 'preserve-3d',
                  boxShadow: `${mousePosition.rotateY * 2}px ${-mousePosition.rotateX * 2}px 60px rgba(245, 158, 11, 0.4)`,
                }}
              >
                {/* Promotional Image */}
                <motion.img
                  src={`${import.meta.env.BASE_URL}images/plots-for-sale-promo.jpg`}
                  alt="Plots for Sale - Sri Veda Real Estates"
                  className="w-full h-auto object-contain rounded-2xl"
                  loading="lazy"
                  decoding="async"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: 'translateZ(30px)',
                  }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Animated 3D glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-gold-500/20 via-navy-600/20 to-gold-400/10 blur-2xl -z-10"
                  animate={{
                    opacity: [0.3, 0.7, 0.3],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: [0.4, 0, 0.2, 1] }}
                />

                {/* 3D Rotating Featured badge */}
                <motion.div
                  className="absolute -top-3 -right-3 bg-gradient-to-r from-gold-500 to-gold-400 text-navy-900 font-bold text-xs px-5 py-2.5 rounded-full shadow-3d-button"
                  animate={{
                    rotateY: [0, 360],
                    scale: [1, 1.08, 1],
                  }}
                  transition={{
                    rotateY: { duration: 10, repeat: Infinity, ease: 'linear' },
                    scale: { duration: 3, repeat: Infinity, ease: [0.4, 0, 0.2, 1] },
                  }}
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: 'translateZ(50px)',
                  }}
                >
                  ⭐ Featured Property
                </motion.div>
              </motion.div>

              {/* 3D Background decorative elements */}
              <motion.div
                className="absolute -top-8 -left-8 w-32 h-32 border-2 border-gold-400/30 rounded-3xl"
                animate={{
                  rotateX: [0, 360],
                  rotateY: [0, 180],
                  rotateZ: [0, 90],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                style={{
                  transformStyle: 'preserve-3d',
                  background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.2), rgba(245, 158, 11, 0.1))',
                }}
              />
              <motion.div
                className="absolute -bottom-6 -right-6 w-24 h-24 rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.3), rgba(30, 64, 175, 0.2))',
                  transformStyle: 'preserve-3d',
                }}
                animate={{
                  rotateX: [0, 180, 360],
                  rotateZ: [0, -180, -360],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 3D Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{
          y: [0, 12, 0],
          rotateX: [0, 10, 0],
        }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="w-6 h-10 border-2 border-gold-400/50 rounded-full flex justify-center backdrop-blur-sm bg-navy-800/20">
          <motion.div
            className="w-1.5 h-3 bg-gold-400 rounded-full mt-1.5"
            animate={{ y: [0, 14, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ boxShadow: '0 0 10px rgba(245, 158, 11, 0.8)' }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default React.memo(Hero);
