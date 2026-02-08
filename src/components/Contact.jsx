import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  PhoneCall,
  AtSign,
  MapPinned,
  CalendarClock,
  Send,
  Facebook,
  Youtube,
  User,
  Smartphone,
  Mail as MailIcon,
  MessageSquare,
  Sparkles,
} from 'lucide-react';

const contactInfo = [
  {
    icon: PhoneCall,
    title: 'Call Us',
    details: ['+91 98765 43210', '+91 87654 32109'],
    color: 'from-emerald-500 via-emerald-400 to-teal-500',
    iconBg: 'bg-gradient-to-br from-emerald-500/10 to-teal-500/10',
    iconColor: 'text-emerald-500',
  },
  {
    icon: AtSign,
    title: 'Email Us',
    details: ['info@srivedarealestate.com', 'sales@srivedarealestate.com'],
    color: 'from-teal-500 via-cyan-500 to-cyan-600',
    iconBg: 'bg-gradient-to-br from-teal-500/10 to-cyan-500/10',
    iconColor: 'text-teal-500',
  },
  {
    icon: MapPinned,
    title: 'Visit Us',
    details: ['Main Road, Ongole', 'Prakasam District, AP - 523001'],
    color: 'from-green-500 via-emerald-500 to-lime-500',
    iconBg: 'bg-gradient-to-br from-green-500/10 to-lime-500/10',
    iconColor: 'text-green-500',
  },
  {
    icon: CalendarClock,
    title: 'Working Hours',
    details: ['Mon - Sat: 9:00 AM - 7:00 PM', 'Sunday: By Appointment'],
    color: 'from-emerald-500 via-emerald-400 to-green-500',
    iconBg: 'bg-gradient-to-br from-emerald-500/10 to-green-500/10',
    iconColor: 'text-emerald-500',
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interest: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your interest! Our team will contact you shortly.');
    setFormData({ name: '', phone: '', email: '', interest: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-gray-900 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            Get in Touch
          </motion.span>
          <motion.h2
            className="text-3xl lg:text-4xl xl:text-5xl font-poppins font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          >
            Contact <span className="text-emerald-400">Us Today</span>
          </motion.h2>
          <motion.p
            className="text-gray-400 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          >
            Ready to invest in your dream property? Reach out and let our experts guide you.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info cards */}
          <div className="lg:col-span-2 space-y-5">
            {contactInfo.map((info, i) => (
              <motion.div
                key={i}
                className="group relative bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-500 border border-gray-700 hover:border-emerald-500/50 overflow-hidden"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.1 * i, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                whileHover={{ x: 8, scale: 1.02 }}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                <div className="relative flex items-start gap-5">
                  <motion.div
                    className={`w-14 h-14 ${info.iconBg} rounded-2xl flex items-center justify-center shrink-0 shadow-sm group-hover:shadow-lg transition-all duration-300`}
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <info.icon className={`w-6 h-6 ${info.iconColor}`} strokeWidth={2} />
                  </motion.div>
                  <div className="flex-1">
                    <h4 className="font-poppins font-bold text-white mb-2 text-lg group-hover:text-emerald-400 transition-colors">
                      {info.title}
                    </h4>
                    {info.details.map((detail, j) => (
                      <p key={j} className="text-gray-400 text-sm leading-relaxed">
                        {detail}
                      </p>
                    ))}
                  </div>
                  <div className={`w-1 h-12 bg-gradient-to-b ${info.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                </div>
              </motion.div>
            ))}

            {/* Social links */}
            <motion.div
              className="pt-6 mt-6 border-t border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.4, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            >
              <p className="text-sm text-gray-500 mb-3">Follow Us</p>
              <div className="flex gap-3">
                <motion.a
                  href="https://www.facebook.com/srivedaongole"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 hover:bg-emerald-500 hover:text-gray-900 rounded-xl flex items-center justify-center text-white transition-all"
                  whileHover={{ scale: 1.1, y: -3 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                >
                  <Facebook className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href="https://www.youtube.com/channel/UC79q-p2bDv8B6QI_viNh4dg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 hover:bg-red-600 rounded-xl flex items-center justify-center text-white hover:text-white transition-all"
                  whileHover={{ scale: 1.1, y: -3 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                >
                  <Youtube className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Contact form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="relative bg-gradient-to-br from-emerald-500/20 via-teal-500/10 to-cyan-500/20 rounded-3xl p-1 shadow-xl">
              <form
                onSubmit={handleSubmit}
                className="bg-gray-800 rounded-3xl p-8 lg:p-10"
              >
                {/* Form header */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-bold text-xl text-white">Let's Connect</h3>
                    <p className="text-sm text-gray-400">Fill in your details and we'll get back to you</p>
                  </div>
                </div>

                <motion.div
                  className="grid sm:grid-cols-2 gap-6 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: 0.2, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                >
                  <div className="relative">
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-gray-900 border-2 border-gray-700 text-white placeholder:text-gray-500 focus:outline-none focus:border-emerald-500 focus:bg-gray-900 transition-all"
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 98765 43210"
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-gray-900 border-2 border-gray-700 text-white placeholder:text-gray-500 focus:outline-none focus:border-emerald-500 focus:bg-gray-900 transition-all"
                      />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="grid sm:grid-cols-2 gap-6 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: 0.3, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                >
                  <div className="relative">
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <MailIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-gray-900 border-2 border-gray-700 text-white placeholder:text-gray-500 focus:outline-none focus:border-emerald-500 focus:bg-gray-900 transition-all"
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Interested In
                    </label>
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl bg-gray-900 border-2 border-gray-700 text-white focus:outline-none focus:border-emerald-500 focus:bg-gray-900 transition-all appearance-none cursor-pointer"
                      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239ca3af'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.25rem' }}
                    >
                      <option value="">Select property type</option>
                      <option value="open-plots">Open Plots</option>
                      <option value="investment">Investment Lands</option>
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="houses">Ready to Move Houses</option>
                    </select>
                  </div>
                </motion.div>

                <motion.div
                  className="mb-7"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: 0.4, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                >
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Message
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-500" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      placeholder="Tell us about your requirements..."
                      className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-gray-900 border-2 border-gray-700 text-white placeholder:text-gray-500 focus:outline-none focus:border-emerald-500 focus:bg-gray-900 transition-all resize-none"
                    />
                  </div>
                </motion.div>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-teal-500 hover:to-emerald-500 text-gray-900 font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 transition-all group relative overflow-hidden"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: '-100%', skewX: -15 }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <span className="relative">Send Enquiry</span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Contact);
