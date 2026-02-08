import { useState } from 'react';
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
    color: 'from-emerald-400 via-teal-500 to-cyan-600',
    iconBg: 'bg-gradient-to-br from-emerald-50 to-teal-50',
    iconColor: 'text-emerald-600',
  },
  {
    icon: AtSign,
    title: 'Email Us',
    details: ['info@srivedarealestate.com', 'sales@srivedarealestate.com'],
    color: 'from-blue-400 via-indigo-500 to-purple-600',
    iconBg: 'bg-gradient-to-br from-blue-50 to-indigo-50',
    iconColor: 'text-blue-600',
  },
  {
    icon: MapPinned,
    title: 'Visit Us',
    details: ['Main Road, Ongole', 'Prakasam District, AP - 523001'],
    color: 'from-purple-400 via-violet-500 to-fuchsia-600',
    iconBg: 'bg-gradient-to-br from-purple-50 to-violet-50',
    iconColor: 'text-purple-600',
  },
  {
    icon: CalendarClock,
    title: 'Working Hours',
    details: ['Mon - Sat: 9:00 AM - 7:00 PM', 'Sunday: By Appointment'],
    color: 'from-amber-400 via-orange-500 to-red-600',
    iconBg: 'bg-gradient-to-br from-amber-50 to-orange-50',
    iconColor: 'text-amber-600',
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
    <section id="contact" className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

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
            className="text-3xl lg:text-4xl xl:text-5xl font-poppins font-bold text-primary mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          >
            Contact <span className="text-accent">Us Today</span>
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg"
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
                className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-transparent overflow-hidden"
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
                    <h4 className="font-poppins font-bold text-primary mb-2 text-lg group-hover:text-accent transition-colors">
                      {info.title}
                    </h4>
                    {info.details.map((detail, j) => (
                      <p key={j} className="text-gray-600 text-sm leading-relaxed">
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
              className="pt-6 mt-6 border-t border-gray-100"
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
                  className="w-10 h-10 bg-primary/5 hover:bg-accent hover:text-white rounded-xl flex items-center justify-center text-primary transition-all"
                  whileHover={{ scale: 1.1, y: -3 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                >
                  <Facebook className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href="https://www.youtube.com/channel/UC79q-p2bDv8B6QI_viNh4dg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/5 hover:bg-red rounded-xl flex items-center justify-center text-primary hover:text-white transition-all"
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
            <div className="relative bg-gradient-to-br from-accent/5 via-primary/5 to-purple-500/5 rounded-3xl p-1 shadow-xl">
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl p-8 lg:p-10"
              >
                {/* Form header */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-emerald-400 rounded-2xl flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-bold text-xl text-primary">Let's Connect</h3>
                    <p className="text-sm text-gray-500">Fill in your details and we'll get back to you</p>
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
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-gray-50 border-2 border-transparent text-primary placeholder:text-gray-400 focus:outline-none focus:border-accent focus:bg-white transition-all"
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 98765 43210"
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-gray-50 border-2 border-transparent text-primary placeholder:text-gray-400 focus:outline-none focus:border-accent focus:bg-white transition-all"
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
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <MailIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-gray-50 border-2 border-transparent text-primary placeholder:text-gray-400 focus:outline-none focus:border-accent focus:bg-white transition-all"
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Interested In
                    </label>
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border-2 border-transparent text-primary focus:outline-none focus:border-accent focus:bg-white transition-all appearance-none cursor-pointer"
                      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.25rem' }}
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
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      placeholder="Tell us about your requirements..."
                      className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-gray-50 border-2 border-transparent text-primary placeholder:text-gray-400 focus:outline-none focus:border-accent focus:bg-white transition-all resize-none"
                    />
                  </div>
                </motion.div>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-accent to-emerald-400 hover:from-emerald-400 hover:to-accent text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 transition-all group relative overflow-hidden"
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

export default Contact;
