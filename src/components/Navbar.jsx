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
      {/* Top bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-900 via-amber-500 to-amber-400 text-white text-xs py-2.5 px-4 will-change-transform shadow-3d-elevated"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: isScrolled ? -50 : 0, opacity: isScrolled ? 0 : 1 }}
        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+919876543210" className="flex items-center gap-1.5 hover:text-amber-100 transition-all duration-300 group">
              <Phone className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" style={{ transform: 'translateZ(5px)' }} />
              <span className="font-medium">+91 98765 43210</span>
            </a>
            <a href="mailto:info@srivedarealestate.com" className="flex items-center gap-1.5 hover:text-amber-100 transition-all duration-300 group hidden sm:flex">
              <Mail className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" style={{ transform: 'translateZ(5px)' }} />
              <span className="font-medium">info@srivedarealestate.com</span>
            </a>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-200" />
            <span className="font-medium">Ongole, Andhra Pradesh</span>
          </div>
        </div>
      </motion.div>

      {/* Main navbar */}
      <motion.nav
        className={`fixed left-0 right-0 z-40 will-change-transform ${
          isScrolled
            ? 'top-0 bg-white/95 backdrop-blur-xl shadow-3d-elevated shadow-blue-100/30 border-b border-blue-100 py-3'
            : 'top-8 bg-white/70 backdrop-blur-md border-b border-blue-100/50 py-4'
        }`}
        style={{ transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)' }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <motion.a href="#home" className="flex items-center gap-3 group cursor-pointer transform-3d" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }} onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}>
              <motion.div className="relative animate-rotate3D-Y" whileHover={{ rotate: [0, -5, 5, -5, 0] }} transition={{ duration: 0.5 }}>
                <Building2 className="w-10 h-10 text-amber-500 drop-shadow-sm" strokeWidth={2} style={{ filter: 'drop-shadow(0 2px 4px rgba(245, 158, 11, 0.3))' }} />
              </motion.div>
              <div>
                <h1 className="text-xl font-poppins font-bold leading-none text-blue-900">Sri Veda</h1>
                <p className="text-[10px] text-amber-500 font-semibold tracking-[0.25em] uppercase">Real Estates</p>
              </div>
            </motion.a>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className={`relative px-5 py-2.5 text-sm font-semibold rounded-xl cursor-pointer ${
                    activeLink === link.href
                      ? 'text-amber-600'
                      : 'text-blue-900 hover:text-amber-600 hover:bg-amber-50'
                  }`}
                  style={{ transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}
                  initial={{ opacity: 0, y: -15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {link.name}
                  {activeLink === link.href && (
                    <motion.div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-amber-500 to-amber-400 rounded-full shadow-3d-button" layoutId="activeNav" transition={{ type: 'spring', stiffness: 380, damping: 30 }} />
                  )}
                </motion.a>
              ))}
            </div>

            <motion.a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }} className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-400 text-blue-900 font-bold px-6 py-3 rounded-full text-sm relative overflow-hidden group cursor-pointer shadow-3d-button" whileHover={{ scale: 1.06, y: -2 }} whileTap={{ scale: 0.98 }} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.5, ease: [0.22, 1, 0.36, 1] }} style={{ transform: 'translateZ(10px)' }}>
              <span className="relative z-10">Get in Touch</span>
              <ChevronRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
              <motion.div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-500 opacity-0 group-hover:opacity-100" transition={{ duration: 0.3 }} />
            </motion.a>

            <motion.button className="lg:hidden p-2.5 rounded-xl text-blue-900 hover:bg-amber-50" onClick={() => setIsMobileOpen(!isMobileOpen)} whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
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
          <motion.div className="fixed inset-0 z-30 bg-gradient-to-br from-blue-50 via-white to-amber-50 backdrop-blur-xl lg:hidden" initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.1 }} transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}>
            <div className="flex flex-col items-center justify-center h-full gap-6 px-6">
              {navLinks.map((link, i) => (
                <motion.a key={link.name} href={link.href} onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }} className={`text-2xl font-poppins font-bold ${activeLink === link.href ? 'text-amber-600' : 'text-blue-900'} hover:text-amber-600 transition-all duration-300`} initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 30 }} transition={{ delay: 0.08 * i, duration: 0.3 }} whileHover={{ scale: 1.1, x: 10 }} whileTap={{ scale: 0.95 }}>{link.name}</motion.a>
              ))}
              <motion.a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }} className="mt-6 bg-gradient-to-r from-amber-500 to-amber-400 text-blue-900 font-bold px-10 py-4 rounded-full text-lg shadow-3d-button" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 30 }} transition={{ delay: 0.4, duration: 0.4 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Get in Touch</motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
