import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Target, Sparkles } from 'lucide-react';

const About = () => {

  const features = [
    {
      icon: Award,
      title: 'Trusted Brand',
      desc: 'Over a decade of trust and excellence in real estate.',
    },
    {
      icon: Users,
      title: 'Customer First',
      desc: 'Dedicated to fulfilling your real estate dreams.',
    },
    {
      icon: Target,
      title: 'Best Returns',
      desc: 'Properties with excellent appreciation value.',
    },
    {
      icon: Sparkles,
      title: 'Premium Quality',
      desc: 'Handpicked plots in prime locations.',
    },
  ];

  return (
    <section id="about" className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-100/60 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-50/60 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="relative">
              <motion.div
                className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              >
                <img
                  src={`${import.meta.env.BASE_URL}images/property2.jpeg`}
                  alt="Sri Veda Real Estates - Premium Properties"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent flex items-end p-8">
                  <div className="text-center w-full">
                    <motion.div
                      className="text-7xl font-poppins font-bold text-white"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      10+
                    </motion.div>
                    <div className="text-pink-300 text-sm tracking-widest uppercase mt-2 font-semibold">
                      Years of Excellence
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border border-pink-100"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.4, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-pink-50 rounded-xl flex items-center justify-center">
                    <Award className="w-7 h-7 text-pink-500" />
                  </div>
                  <div>
                    <div className="text-2xl font-poppins font-bold text-gray-900">500+</div>
                    <div className="text-gray-500 text-sm">Projects Delivered</div>
                  </div>
                </div>
              </motion.div>

              <div className="absolute -top-4 -left-4 w-20 h-20 border-t-4 border-l-4 border-pink-400 rounded-tl-3xl" />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            >
              <span className="inline-block text-pink-500 font-semibold text-sm tracking-widest uppercase mb-4">
                About Us
              </span>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-poppins font-bold text-gray-900 leading-tight mb-6">
                Your Trusted Partner in{' '}
                <span className="text-pink-500">Real Estate</span>
              </h2>
            </motion.div>

            <motion.p
              className="text-gray-600 text-lg leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.2, duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            >
              Sri Veda Real Estates Ongole has been a beacon of trust and reliability
              in the real estate market. We offer a wide range of properties for sale
              that are sure to meet your needs and exceed your expectations — from
              investment lands to ready-to-move houses.
            </motion.p>

            <motion.p
              className="text-gray-500 leading-relaxed mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.3, duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            >
              Our previous properties and ventures have achieved great appreciation for
              customers. We provide perfect investment solutions tailored to your needs,
              ensuring every investment grows with time.
            </motion.p>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  className="group relative flex items-start gap-3 p-5 rounded-2xl border border-pink-100 hover:border-pink-300 bg-pink-50/50 hover:bg-pink-50 hover:shadow-xl hover:shadow-pink-100/50 transition-all duration-500 cursor-default overflow-hidden"
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                  whileHover={{ x: 5, y: -5 }}
                >
                  <motion.div
                    className="relative w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-pink-200 transition-all duration-300"
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <feature.icon className="w-6 h-6 text-pink-500" strokeWidth={2.5} />
                  </motion.div>
                  <div className="relative">
                    <h4 className="font-poppins font-bold text-gray-900 text-base group-hover:text-pink-600 transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-gray-500 text-sm mt-1 leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(About);
