import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Building2, Phone, Mail, ChevronDown } from 'lucide-react';

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
          setIsScrolled(window.scrollY > 20);

          // Update active link based on scroll position
          const sections = navLinks.map(link => link.href.substring(1));
          for (const section of sections.reverse()) {
            const el = document.getElementById(section);
            if (el && window.scrollY >= el.offsetTop - 200) {
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
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 bg-primary text-white/80 text-xs py-2 px-4 will-change-transform"
        initial={{ y: -50 }}
        animate={{ y: isScrolled ? -50 : 0 }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+919876543210" className="flex items-center gap-1 hover:text-accent transition-colors">
              <Phone className="w-3 h-3" />
              <span>+91 98765 43210</span>
            </a>
            <a href="mailto:info@srivedarealestate.com" className="flex items-center gap-1 hover:text-accent transition-colors">
              <Mail className="w-3 h-3" />
              <span>info@srivedarealestate.com</span>
            </a>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span>Ongole, Andhra Pradesh</span>
          </div>
        </div>
      </motion.div>

      {/* Main navbar */}
      <motion.nav
        className={`fixed left-0 right-0 z-40 will-change-transform ${
          isScrolled
            ? 'top-0 bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200/50 py-3'
            : 'top-8 bg-white/5 backdrop-blur-sm py-5'
        }`}
        style={{
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#home"
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              onClick={() => handleNavClick('#home')}
            >
              <motion.div
                className="relative"
                whileHover={{ rotate: [0, -8, 8, 0] }}
                transition={{ duration: 0.4 }}
              >
                <Building2 className="w-9 h-9 text-accent transition-all duration-300" strokeWidth={1.5} />
                <div className="absolute -inset-1 bg-accent/20 rounded-full blur-md group-hover:bg-accent/30 transition-all duration-200" />
              </motion.div>
              <div>
                <h1 className={`text-xl font-poppins font-bold leading-none transition-colors duration-300 ${isScrolled ? 'text-primary' : 'text-white'}`}>
                  Sri Veda
                </h1>
                <p className="text-[10px] text-accent tracking-[0.25em] uppercase transition-opacity duration-300">
                  Real Estates
                </p>
              </div>
            </motion.a>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`relative px-5 py-2.5 text-sm font-medium rounded-lg ${
                    activeLink === link.href
                      ? 'text-accent'
                      : isScrolled
                        ? 'text-gray-700 hover:text-accent hover:bg-accent/5'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                  style={{
                    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {link.name}
                  {activeLink === link.href && (
                    <motion.div
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-1 bg-accent rounded-full shadow-lg shadow-accent/50"
                      layoutId="activeNav"
                      transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                    />
                  )}
                </motion.a>
              ))}
            </div>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="hidden lg:flex items-center gap-2 bg-accent text-primary font-semibold px-6 py-3 rounded-full text-sm relative overflow-hidden group"
              style={{
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 4px 14px 0 rgba(9, 237, 140, 0.25)',
              }}
              whileHover={{ scale: 1.05, y: -2, boxShadow: '0 8px 20px 0 rgba(9, 237, 140, 0.35)' }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="relative z-10">Get in Touch</span>
              <ChevronDown className="w-4 h-4 rotate-[-90deg] relative z-10 transition-transform duration-200 group-hover:translate-x-1" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-accent to-emerald-400 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            {/* Mobile toggle */}
            <motion.button
              className={`lg:hidden p-2 rounded-lg ${
                isScrolled
                  ? 'text-primary hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              }`}
              style={{
                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-primary/98 backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`text-2xl font-poppins font-medium ${
                    activeLink === link.href ? 'text-accent' : 'text-white/80'
                  }`}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ delay: 0.1 * i }}
                  whileHover={{ scale: 1.1, color: '#09ed8c' }}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="mt-4 bg-accent text-primary font-semibold px-8 py-3 rounded-full text-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ delay: 0.5 }}
              >
                Get in Touch
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
