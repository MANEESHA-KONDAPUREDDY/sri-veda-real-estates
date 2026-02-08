import { motion } from 'framer-motion';
import { Building2, Facebook, Youtube, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-dark text-white overflow-hidden">
      {/* Top gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="w-8 h-8 text-accent" strokeWidth={1.5} />
              <div>
                <h3 className="text-lg font-poppins font-bold text-white">Sri Veda</h3>
                <p className="text-[10px] text-accent tracking-[0.25em] uppercase">
                  Real Estates
                </p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Your trusted partner for premium real estate investments in Ongole.
              We deliver excellence in every property.
            </p>
            <div className="flex gap-3">
              <motion.a
                href="https://www.facebook.com/srivedaongole"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/5 hover:bg-accent rounded-lg flex items-center justify-center transition-all"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <Facebook className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="https://www.youtube.com/channel/UC79q-p2bDv8B6QI_viNh4dg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/5 hover:bg-red rounded-lg flex items-center justify-center transition-all"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <Youtube className="w-4 h-4" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-poppins font-semibold text-white mb-6 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Projects', 'Testimonials', 'Contact'].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(' ', '')}`}
                      className="text-white/50 hover:text-accent text-sm transition-colors hover:pl-2 inline-block duration-300"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-poppins font-semibold text-white mb-6 uppercase tracking-wider">
              Our Services
            </h4>
            <ul className="space-y-3">
              {[
                'Open Plots',
                'Investment Lands',
                'Ready to Move Houses',
                'DTCP Approved Plots',
                'Property Consultation',
                'Venture Development',
              ].map((service) => (
                <li key={service}>
                  <span className="text-white/50 hover:text-accent text-sm transition-colors cursor-pointer hover:pl-2 inline-block duration-300">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-sm font-poppins font-semibold text-white mb-6 uppercase tracking-wider">
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <span className="text-white/50 text-sm">
                  Main Road, Ongole,<br />
                  Prakasam District, AP - 523001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <a href="tel:+919876543210" className="text-white/50 hover:text-accent text-sm transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <a href="mailto:info@srivedarealestate.com" className="text-white/50 hover:text-accent text-sm transition-colors">
                  info@srivedarealestate.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} Sri Veda Real Estates Ongole. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Approved Plots in Ongole | Real Estate Ongole | Property in Ongole
          </p>
        </div>
      </div>

      {/* Scroll to top */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-accent hover:bg-accent-dark text-primary rounded-full flex items-center justify-center shadow-lg shadow-accent/25 transition-all"
        whileHover={{ scale: 1.1, y: -3 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
};

export default Footer;
