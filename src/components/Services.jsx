import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  MapPin,
  Home,
  TrendingUp,
  FileCheck,
  Handshake,
  Building,
  ArrowUpRight,
} from 'lucide-react';

const services = [
  {
    icon: MapPin,
    title: 'Open Plots',
    description:
      'Premium open plots in prime locations of Ongole with clear titles and all necessary approvals for immediate construction.',
    color: 'from-emerald-500 to-teal-600',
    shadowColor: 'shadow-emerald-500/20',
    image: '/images/open-plots.png',
  },
  {
    icon: Home,
    title: 'Ready to Move Houses',
    description:
      'Beautifully designed houses ready for immediate possession with modern amenities and world-class construction quality.',
    color: 'from-blue-500 to-indigo-600',
    shadowColor: 'shadow-blue-500/20',
    image: '/images/house1.webp',
  },
  {
    icon: TrendingUp,
    title: 'Investment Lands',
    description:
      'Strategic investment lands with high appreciation potential. Our properties have consistently delivered excellent returns.',
    color: 'from-amber-500 to-orange-600',
    shadowColor: 'shadow-amber-500/20',
    image: '/images/property1.jpg',
  },
  {
    icon: FileCheck,
    title: 'DTCP Approved Plots',
    description:
      'Government-approved layouts with DTCP clearance, ensuring complete legal safety and peace of mind for your investment.',
    color: 'from-purple-500 to-violet-600',
    shadowColor: 'shadow-purple-500/20',
    image: '/images/layout1.webp',
  },
  {
    icon: Handshake,
    title: 'Property Consultation',
    description:
      'Expert guidance and consultation for all your real estate needs. We help you make informed decisions for maximum value.',
    color: 'from-rose-500 to-pink-600',
    shadowColor: 'shadow-rose-500/20',
    image: '/images/property3.jpg',
  },
  {
    icon: Building,
    title: 'Venture Development',
    description:
      'End-to-end venture development with modern infrastructure, landscaping, and all essential amenities for comfortable living.',
    color: 'from-cyan-500 to-blue-600',
    shadowColor: 'shadow-cyan-500/20',
    image: '/images/property2.jpeg',
  },
];

const Services = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="services" className="relative py-24 lg:py-32 bg-gray-light overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Our Services
          </motion.span>
          <motion.h2
            className="text-3xl lg:text-4xl xl:text-5xl font-poppins font-bold text-primary mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            What We <span className="text-accent">Offer</span>
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive real estate solutions tailored to your needs,
            from open plots to ready-to-move homes.
          </motion.p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className={`group relative bg-white rounded-2xl p-8 hover:shadow-xl ${service.shadowColor} transition-all duration-500 border border-gray-100 hover:border-transparent overflow-hidden`}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.6 }}
              whileHover={{ y: -8 }}
            >
              {/* Hover image background */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-90`} />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-all duration-500 shadow-lg ${service.shadowColor}`}
                >
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-poppins font-bold text-primary group-hover:text-white transition-colors duration-500 mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 group-hover:text-white/80 transition-colors duration-500 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="flex items-center gap-2 text-accent group-hover:text-white font-medium text-sm transition-colors duration-500">
                  <span>Learn More</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>

              {/* Decorative circle */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gray-50 group-hover:bg-white/10 rounded-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
