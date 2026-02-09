import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Building2, Phone, Mail, ChevronRight, Sparkles } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 15);
          const sections = navLinks.map(link => link.href.substring(1));
          for (const section of sections.reverse()) {
            const el = document.getElementById(section);
            if (el && window.scrollY >= el.offsetTop - 150) {
              setActiveLink(`#${section}`);
              break;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setActiveLink(href);
    setIsMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Main navbar - Always fixed at top */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 will-change-transform ${
          isScrolled
            ? 'bg-slate-900/95 backdrop-blur-xl shadow-3d-elevated shadow-purple-500/20 border-b border-purple-500/30 py-3'
            : 'bg-slate-900/80 backdrop-blur-md border-b border-purple-500/30 py-4'
        }`}
        style={{ transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <motion.a href="#home" className="flex items-center gap-3 group cursor-pointer transform-3d" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }} onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}>
              <motion.div className="relative animate-rotate3D-Y" whileHover={{ rotate: [0, -5, 5, -5, 0] }} transition={{ duration: 0.5 }}>
                <Building2 className="w-10 h-10 text-cyan-400 drop-shadow-sm neon-cyan" strokeWidth={2} style={{ filter: 'drop-shadow(0 2px 4px rgba(6, 182, 212, 0.5))' }} />
              </motion.div>
              <div>
                <h1 className="text-xl font-poppins font-bold leading-none text-white">Sri Veda</h1>
                <p className="text-[10px] text-cyan-400 font-semibold tracking-[0.25em] uppercase">Real Estates</p>
              </div>
            </motion.a>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className={`relative px-5 py-2.5 text-sm font-semibold rounded-xl cursor-pointer group ${
                    activeLink === link.href
                      ? 'text-cyan-400'
                      : 'text-white hover:text-cyan-400 hover:bg-purple-600/20'
                  }`}
                  style={{ transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}
                  initial={{ opacity: 0, y: -15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{
                    y: -3,
                    textShadow: '0 0 15px rgba(6, 182, 212, 0.6)',
                  }}
                  whileTap={{ scale: 0.97 }}
                >
                  {link.name}
                  {activeLink === link.href && (
                    <motion.div
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full shadow-3d-button neon-cyan"
                      layoutId="activeNav"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/20 to-cyan-400/0 rounded-xl opacity-0 group-hover:opacity-100 blur-sm"
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>

            <motion.a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }} className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-bold px-6 py-3 rounded-full text-sm relative overflow-hidden group cursor-pointer shadow-3d-button neon-dual" whileHover={{ scale: 1.06, y: -2 }} whileTap={{ scale: 0.98 }} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.5, ease: [0.22, 1, 0.36, 1] }} style={{ transform: 'translateZ(10px)' }}>
              <span className="relative z-10">Get in Touch</span>
              <ChevronRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
              <motion.div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-cyan-600 opacity-0 group-hover:opacity-100" transition={{ duration: 0.3 }} />
            </motion.a>

            <motion.button className="lg:hidden p-2.5 rounded-xl text-white hover:bg-purple-600/20" onClick={() => setIsMobileOpen(!isMobileOpen)} whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
              <AnimatePresence mode="wait">
                {isMobileOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}><X className="w-6 h-6" /></motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}><Menu className="w-6 h-6" /></motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900 backdrop-blur-xl lg:hidden overflow-hidden"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Floating particles in mobile menu */}
            {[...Array(12)].map((_, i) => {
              const randomDelay = Math.random() * 2;
              const randomDuration = 4 + Math.random() * 4;
              const randomSize = 2 + Math.random() * 4;

              return (
                <motion.div
                  key={i}
                  className="absolute rounded-full pointer-events-none z-0"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    width: `${randomSize}px`,
                    height: `${randomSize}px`,
                    background: i % 2 === 0
                      ? 'rgba(6, 182, 212, 0.4)'
                      : 'rgba(139, 92, 246, 0.5)',
                    boxShadow: i % 2 === 0
                      ? '0 0 15px rgba(6, 182, 212, 0.8)'
                      : '0 0 15px rgba(139, 92, 246, 0.8)',
                  }}
                  animate={{
                    y: [0, -40, 0],
                    x: [0, Math.random() * 30 - 15, 0],
                    scale: [1, 1.5, 1],
                    opacity: [0.2, 0.8, 0.2],
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

            {/* Gradient orbs */}
            <motion.div
              className="absolute top-20 right-10 w-64 h-64 rounded-full blur-3xl z-0"
              style={{ background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3), transparent 70%)' }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-20 left-10 w-56 h-56 rounded-full blur-3xl z-0"
              style={{ background: 'radial-gradient(circle, rgba(6, 182, 212, 0.3), transparent 70%)' }}
              animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 6, repeat: Infinity }}
            />

            {/* Close Button */}
            <motion.button
              onClick={() => setIsMobileOpen(false)}
              className="fixed top-6 right-6 z-20 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 flex items-center justify-center shadow-3d-button neon-dual"
              initial={{ opacity: 0, rotate: -90, scale: 0 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-6 h-6 text-white" strokeWidth={3} />
            </motion.button>

            <div className="relative z-10 flex flex-col items-center justify-center h-full gap-5 px-6 py-8 overflow-y-auto max-h-screen">
              {/* Contact Info at Top */}
              <motion.div
                className="flex flex-col gap-3 mb-4 pb-4 border-b border-cyan-400/30"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05, duration: 0.5 }}
              >
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>+91 98765 43210</span>
                </a>
                <a
                  href="mailto:info@srivedarealestate.com"
                  className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  <span>info@srivedarealestate.com</span>
                </a>
              </motion.div>

              {/* Navigation Links */}
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className={`relative text-3xl font-poppins font-bold ${activeLink === link.href ? 'text-cyan-400' : 'text-white'} transition-all duration-300 group`}
                  initial={{ opacity: 0, x: -50, rotateY: -90 }}
                  animate={{ opacity: 1, x: 0, rotateY: 0 }}
                  exit={{ opacity: 0, x: 50, rotateY: 90 }}
                  transition={{
                    delay: 0.15 + 0.1 * i,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    scale: 1.15,
                    x: 15,
                    textShadow: '0 0 20px rgba(6, 182, 212, 0.8)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {link.name}
                  {activeLink === link.href && (
                    <motion.div
                      className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
                      layoutId="activeMobileNav"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      style={{ boxShadow: '0 0 15px rgba(6, 182, 212, 0.8)' }}
                    />
                  )}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 -z-10 blur-xl"
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}

              {/* Get in Touch Button */}
              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
                className="relative mt-6 bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-bold px-12 py-5 rounded-full text-xl shadow-3d-button neon-dual overflow-hidden group"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 50, scale: 0.8 }}
                transition={{ delay: 0.75, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.08, boxShadow: '0 0 40px rgba(6, 182, 212, 0.6)' }}
                whileTap={{ scale: 0.95 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600"
                  initial={{ x: '-100%', skewX: -20 }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10">Get in Touch</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
