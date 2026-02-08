import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Facebook,
  Youtube,
  ArrowUpRight,
} from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    title: 'Call Us',
    details: ['+91 98765 43210', '+91 87654 32109'],
    color: 'from-emerald-500 to-teal-600',
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: ['info@srivedarealestate.com', 'sales@srivedarealestate.com'],
    color: 'from-blue-500 to-indigo-600',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    details: ['Main Road, Ongole', 'Prakasam District, AP - 523001'],
    color: 'from-purple-500 to-violet-600',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    details: ['Mon - Sat: 9:00 AM - 7:00 PM', 'Sunday: By Appointment'],
    color: 'from-amber-500 to-orange-600',
  },
];

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
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
    <section id="contact" className="relative py-24 lg:py-32 bg-white overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Get in Touch
          </motion.span>
          <motion.h2
            className="text-3xl lg:text-4xl xl:text-5xl font-poppins font-bold text-primary mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Contact <span className="text-accent">Us Today</span>
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ready to invest in your dream property? Reach out and let our experts guide you.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info cards */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((info, i) => (
              <motion.div
                key={i}
                className="group flex items-start gap-4 p-5 rounded-xl hover:bg-gray-50 transition-all border border-transparent hover:border-gray-100"
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                whileHover={{ x: 5 }}
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform`}
                >
                  <info.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-primary mb-1">
                    {info.title}
                  </h4>
                  {info.details.map((detail, j) => (
                    <p key={j} className="text-gray-500 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Social links */}
            <motion.div
              className="pt-6 mt-6 border-t border-gray-100"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
            >
              <p className="text-sm text-gray-500 mb-3">Follow Us</p>
              <div className="flex gap-3">
                <motion.a
                  href="https://www.facebook.com/srivedaongole"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/5 hover:bg-accent hover:text-white rounded-xl flex items-center justify-center text-primary transition-all"
                  whileHover={{ scale: 1.1, y: -3 }}
                >
                  <Facebook className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href="https://www.youtube.com/channel/UC79q-p2bDv8B6QI_viNh4dg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/5 hover:bg-red rounded:xl flex items-center justify-center text-primary hover:text-white rounded-xl transition-all"
                  whileHover={{ scale: 1.1, y: -3 }}
                >
                  <Youtube className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Contact form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-gray-50 rounded-3xl p-8 lg:p-10 border border-gray-100"
            >
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-primary placeholder:text-gray-400 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-primary placeholder:text-gray-400 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all text-sm"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-primary placeholder:text-gray-400 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Interested In
                  </label>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-primary focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all text-sm"
                  >
                    <option value="">Select property type</option>
                    <option value="open-plots">Open Plots</option>
                    <option value="investment">Investment Lands</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="houses">Ready to Move Houses</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Tell us about your requirements..."
                  className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-primary placeholder:text-gray-400 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all text-sm resize-none"
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-accent hover:bg-accent-dark text-primary font-semibold py-4 rounded-xl flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:shadow-accent/25"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-4 h-4" />
                Send Enquiry
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
