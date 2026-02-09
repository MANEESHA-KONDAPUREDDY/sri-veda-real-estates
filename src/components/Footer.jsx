import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Facebook, Youtube, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative bg-gradient-to-br from-blue-50 via-amber-50/30 to-blue-50 text-blue-900 overflow-hidden">
      <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <motion.div className="lg:col-span-1" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}>
            <div className="flex items-center gap-3 mb-6">
              <motion.div whileHover={{ rotateY: 360 }} transition={{ duration: 0.6 }}>
                <Building2 className="w-8 h-8 text-amber-500" strokeWidth={1.5} />
              </motion.div>
              <div>
                <h3 className="text-lg font-poppins font-bold text-blue-900">Sri Veda</h3>
                <p className="text-[10px] text-amber-500 tracking-[0.25em] uppercase">Real Estates</p>
              </div>
            </div>
            <p className="text-blue-700 text-sm leading-relaxed mb-6">Your trusted partner for premium real estate investments in Ongole. We deliver excellence in every property.</p>
            <div className="flex gap-3">
              <motion.a href="https://www.facebook.com/srivedaongole" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white hover:bg-blue-800 hover:text-white rounded-lg flex items-center justify-center text-blue-800 transition-all border border-blue-200 shadow-3d-button" whileHover={{ scale: 1.1, y: -2, rotateY: 15 }}><Facebook className="w-4 h-4" /></motion.a>
              <motion.a href="https://www.youtube.com/channel/UC79q-p2bDv8B6QI_viNh4dg" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white hover:bg-red-600 hover:text-white rounded-lg flex items-center justify-center text-amber-600 transition-all border border-amber-200 shadow-3d-button" whileHover={{ scale: 1.1, y: -2, rotateY: 15 }}><Youtube className="w-4 h-4" /></motion.a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}>
            <h4 className="text-sm font-poppins font-semibold text-blue-900 mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Projects', 'Testimonials', 'Contact'].map((link, i) => (
                <motion.li key={link} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: 0.1 + i * 0.05, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} className="text-blue-700 hover:text-amber-600 text-sm transition-colors hover:pl-2 inline-block duration-300">{link}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}>
            <h4 className="text-sm font-poppins font-semibold text-blue-900 mb-6 uppercase tracking-wider">Our Services</h4>
            <ul className="space-y-3">
              {['Open Plots', 'Investment Lands', 'Ready to Move Houses', 'DTCP Approved Plots', 'Property Consultation', 'Venture Development'].map((service, i) => (
                <motion.li key={service} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: 0.2 + i * 0.05, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}>
                  <span className="text-blue-700 hover:text-amber-600 text-sm transition-colors cursor-pointer hover:pl-2 inline-block duration-300">{service}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}>
            <h4 className="text-sm font-poppins font-semibold text-blue-900 mb-6 uppercase tracking-wider">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3"><MapPin className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" /><span className="text-blue-700 text-sm">Main Road, Ongole,<br />Prakasam District, AP - 523001</span></li>
              <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-amber-500 shrink-0" /><a href="tel:+919876543210" className="text-blue-700 hover:text-amber-600 text-sm transition-colors">+91 98765 43210</a></li>
              <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-amber-500 shrink-0" /><a href="mailto:info@srivedarealestate.com" className="text-blue-700 hover:text-amber-600 text-sm transition-colors">info@srivedarealestate.com</a></li>
            </ul>
          </motion.div>
        </div>
      </div>

      <div className="border-t border-blue-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-blue-400 text-sm">© {new Date().getFullYear()} Sri Veda Real Estates Ongole. All rights reserved.</p>
          <p className="text-blue-300 text-xs">Approved Plots in Ongole | Real Estate Ongole | Property in Ongole</p>
        </div>
      </div>

      <motion.button onClick={scrollToTop} className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-400 hover:from-amber-600 hover:to-amber-500 text-blue-900 rounded-full flex items-center justify-center shadow-3d-button hover:shadow-3d-elevated transition-all" whileHover={{ scale: 1.1, y: -3, rotateY: 15 }} whileTap={{ scale: 0.9 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, ease: [0.4, 0, 0.2, 1] }}>
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
};

export default React.memo(Footer);
