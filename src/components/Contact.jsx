import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, AtSign, MapPinned, CalendarClock, Send, Facebook, Youtube, User, Smartphone, Mail as MailIcon, MessageSquare, Sparkles } from 'lucide-react';

const contactInfo = [
  { icon: PhoneCall, title: 'Call Us', details: ['+91 98765 43210', '+91 87654 32109'], color: 'from-purple-600 to-purple-500', iconBg: 'bg-purple-500/20', iconColor: 'text-cyan-400' },
  { icon: AtSign, title: 'Email Us', details: ['info@srivedarealestate.com', 'sales@srivedarealestate.com'], color: 'from-cyan-500 to-cyan-400', iconBg: 'bg-cyan-500/20', iconColor: 'text-purple-400' },
  { icon: MapPinned, title: 'Visit Us', details: ['Main Road, Ongole', 'Prakasam District, AP - 523001'], color: 'from-purple-700 to-purple-600', iconBg: 'bg-purple-500/20', iconColor: 'text-cyan-400' },
  { icon: CalendarClock, title: 'Working Hours', details: ['Mon - Sat: 9:00 AM - 7:00 PM', 'Sunday: By Appointment'], color: 'from-cyan-600 to-cyan-400', iconBg: 'bg-cyan-500/20', iconColor: 'text-purple-400' },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', interest: '', message: '' });
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); alert('Thank you for your interest! Our team will contact you shortly.'); setFormData({ name: '', phone: '', email: '', interest: '', message: '' }); };

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl" />

      {/* Floating particles with twinkling effect */}
      {[...Array(8)].map((_, i) => {
        const randomDelay = Math.random() * 3;
        const randomDuration = 5 + Math.random() * 5;
        const randomSize = 1 + Math.random() * 2.5;

        return (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${5 + Math.random() * 90}%`,
              top: `${5 + Math.random() * 90}%`,
              width: `${randomSize}px`,
              height: `${randomSize}px`,
              background: i % 3 === 0
                ? 'rgba(34, 211, 238, 0.6)'
                : i % 3 === 1
                ? 'rgba(139, 92, 246, 0.5)'
                : 'rgba(167, 139, 250, 0.4)',
              boxShadow: i % 3 === 0
                ? '0 0 10px rgba(34, 211, 238, 1), 0 0 20px rgba(34, 211, 238, 0.6)'
                : i % 3 === 1
                ? '0 0 10px rgba(139, 92, 246, 1), 0 0 20px rgba(139, 92, 246, 0.6)'
                : '0 0 10px rgba(167, 139, 250, 1), 0 0 18px rgba(167, 139, 250, 0.6)',
              transformStyle: 'preserve-3d',
            }}
            animate={{
              y: [0, -28, 0],
              x: [0, Math.random() * 20 - 10, 0],
              scale: [1, 1.6, 1],
              opacity: [0.3, 1, 0.3],
              rotate: [0, 180, 360],
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span className="inline-block text-cyan-400 font-semibold text-sm tracking-widest uppercase mb-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }} style={{ textShadow: '0 0 20px rgba(6, 182, 212, 0.5)' }}>Get in Touch</motion.span>
          <motion.h2 className="text-3xl lg:text-4xl xl:text-5xl font-poppins font-bold text-white mb-6" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}>Contact <span className="text-cyan-400">Us Today</span></motion.h2>
          <motion.p className="text-slate-300 text-lg" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}>Ready to invest in your dream property? Reach out and let our experts guide you.</motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-5">
            {contactInfo.map((info, i) => (
              <motion.div key={i} className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-3d-card hover:shadow-3d-elevated transition-all duration-500 border border-purple-500/30 hover:border-cyan-400/50 overflow-hidden transform-3d neon-purple-hover" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: 0.1 * i, duration: 0.6, ease: [0.4, 0, 0.2, 1] }} whileHover={{ x: 8, scale: 1.02 }} style={{ transform: 'translateZ(5px)' }}>
                <div className="relative flex items-start gap-5">
                  <motion.div className={`w-14 h-14 ${info.iconBg} rounded-2xl flex items-center justify-center shrink-0 shadow-3d-button backdrop-blur-sm`} whileHover={{ rotateY: 360 }} transition={{ duration: 0.6 }}>
                    <info.icon className={`w-6 h-6 ${info.iconColor}`} strokeWidth={2} />
                  </motion.div>
                  <div className="flex-1">
                    <h4 className="font-poppins font-bold text-white mb-2 text-lg group-hover:text-cyan-400 transition-colors">{info.title}</h4>
                    {info.details.map((detail, j) => (<p key={j} className="text-slate-300 text-sm leading-relaxed">{detail}</p>))}
                  </div>
                  <div className={`w-1 h-12 bg-gradient-to-b ${info.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-3d-button neon-dual`} />
                </div>
              </motion.div>
            ))}
            <motion.div className="pt-6 mt-6 border-t border-purple-500/30" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: 0.4, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}>
              <p className="text-sm text-cyan-400 mb-3">Follow Us</p>
              <div className="flex gap-3">
                <motion.a href="https://www.facebook.com/srivedaongole" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-purple-500/20 hover:bg-purple-600 hover:text-white rounded-xl flex items-center justify-center text-purple-400 transition-all border border-purple-500/30 shadow-3d-button neon-purple" whileHover={{ scale: 1.1, y: -3, rotateY: 15 }}><Facebook className="w-4 h-4" /></motion.a>
                <motion.a href="https://www.youtube.com/channel/UC79q-p2bDv8B6QI_viNh4dg" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-cyan-500/20 hover:bg-red-600 hover:text-white rounded-xl flex items-center justify-center text-cyan-400 transition-all border border-cyan-400/30 shadow-3d-button neon-cyan" whileHover={{ scale: 1.1, y: -3, rotateY: 15 }}><Youtube className="w-4 h-4" /></motion.a>
              </div>
            </motion.div>
          </div>

          <motion.div className="lg:col-span-3" initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}>
            <div className="relative bg-gradient-to-br from-purple-500/30 via-cyan-500/20 to-purple-500/30 rounded-3xl p-1 shadow-3d-elevated neon-dual">
              <form onSubmit={handleSubmit} className="bg-slate-900/90 backdrop-blur-xl rounded-3xl p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-cyan-500 rounded-2xl flex items-center justify-center shadow-3d-button neon-dual"><Sparkles className="w-6 h-6 text-white" /></div>
                  <div><h3 className="font-poppins font-bold text-xl text-white">Let's Connect</h3><p className="text-sm text-cyan-400">Fill in your details and we'll get back to you</p></div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div><label className="block text-sm font-semibold text-white mb-2">Full Name *</label><div className="relative"><User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-400" /><input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-800/50 border-2 border-purple-500/30 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all shadow-3d-button" /></div></div>
                  <div><label className="block text-sm font-semibold text-white mb-2">Phone Number *</label><div className="relative"><Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-400" /><input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="+91 98765 43210" className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-800/50 border-2 border-purple-500/30 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all shadow-3d-button" /></div></div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div><label className="block text-sm font-semibold text-white mb-2">Email Address</label><div className="relative"><MailIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-400" /><input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-800/50 border-2 border-purple-500/30 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all shadow-3d-button" /></div></div>
                  <div><label className="block text-sm font-semibold text-white mb-2">Interested In</label><select name="interest" value={formData.interest} onChange={handleChange} className="w-full px-4 py-3.5 rounded-xl bg-slate-800/50 border-2 border-purple-500/30 text-white focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all appearance-none cursor-pointer shadow-3d-button" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2306B6D4'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.25rem' }}><option value="">Select property type</option><option value="open-plots">Open Plots</option><option value="investment">Investment Lands</option><option value="residential">Residential</option><option value="commercial">Commercial</option><option value="houses">Ready to Move Houses</option></select></div>
                </div>

                <div className="mb-7"><label className="block text-sm font-semibold text-white mb-2">Message</label><div className="relative"><MessageSquare className="absolute left-4 top-4 w-5 h-5 text-cyan-400" /><textarea name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="Tell us about your requirements..." className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-800/50 border-2 border-purple-500/30 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all resize-none shadow-3d-button" /></div></div>

                <motion.button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-3d-button hover:shadow-3d-elevated transition-all group relative overflow-hidden neon-dual" whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }} style={{ transform: 'translateZ(10px)' }}>
                  <motion.div className="absolute inset-0 bg-white/20" initial={{ x: '-100%', skewX: -15 }} whileHover={{ x: '100%' }} transition={{ duration: 0.6 }} />
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" /><span className="relative">Send Enquiry</span>
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
