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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active link based on scroll position
      const sections = navLinks.map(link => link.href.substring(1));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveLink(`#${section}`);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
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
        className="fixed top-0 left-0 right-0 z-50 bg-primary text-white/80 text-xs py-2 px-4"
        initial={{ y: -50 }}
        animate={{ y: isScrolled ? -50 : 0 }}
        transition={{ duration: 0.3 }}
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
        className={`fixed left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'top-0 bg-primary/95 backdrop-blur-xl shadow-2xl shadow-black/20 py-3'
            : 'top-8 bg-transparent py-5'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#home"
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.02 }}
              onClick={() => handleNavClick('#home')}
            >
              <motion.div
                className="relative"
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <Building2 className="w-9 h-9 text-accent" strokeWidth={1.5} />
                <div className="absolute -inset-1 bg-accent/20 rounded-full blur-md group-hover:bg-accent/30 transition-all" />
              </motion.div>
              <div>
                <h1 className="text-xl font-poppins font-bold text-white leading-none">
                  Sri Veda
                </h1>
                <p className="text-[10px] text-accent tracking-[0.25em] uppercase">
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
                  className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                    activeLink === link.href
                      ? 'text-accent'
                      : 'text-white/70 hover:text-white'
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                  whileHover={{ y: -2 }}
                >
                  {link.name}
                  {activeLink === link.href && (
                    <motion.div
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-accent rounded-full"
                      layoutId="activeNav"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
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
              className="hidden lg:flex items-center gap-2 bg-accent hover:bg-accent-dark text-primary font-semibold px-6 py-2.5 rounded-full text-sm transition-all hover:shadow-lg hover:shadow-accent/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Get in Touch
              <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
            </motion.a>

            {/* Mobile toggle */}
            <motion.button
              className="lg:hidden text-white p-2"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              whileTap={{ scale: 0.9 }}
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
