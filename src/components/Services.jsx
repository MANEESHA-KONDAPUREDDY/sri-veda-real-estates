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

const getImagePath = (imagePath) => `${import.meta.env.BASE_URL}${imagePath.replace(/^\//, '')}`;

const services = [
  {
    icon: MapPin,
    title: 'Open Plots',
    description:
      'Premium open plots in prime locations of Ongole with clear titles and all necessary approvals for immediate construction.',
    color: 'from-amber-500 to-orange-600',
    shadowColor: 'shadow-amber-500/20',
    image: 'images/service-open-plots.jpg',
  },
  {
    icon: Home,
    title: 'Ready to Move Houses',
    description:
      'Beautifully designed houses ready for immediate possession with modern amenities and world-class construction quality.',
    color: 'from-blue-500 to-indigo-600',
    shadowColor: 'shadow-blue-500/20',
    image: 'images/service-ready-house.jpg',
  },
  {
    icon: TrendingUp,
    title: 'Investment Lands',
    description:
      'Strategic investment lands with high appreciation potential. Our properties have consistently delivered excellent returns.',
    color: 'from-gold to-amber-600',
    shadowColor: 'shadow-amber-500/20',
    image: 'images/service-investment.jpg',
  },
  {
    icon: FileCheck,
    title: 'DTCP Approved Plots',
    description:
      'Government-approved layouts with DTCP clearance, ensuring complete legal safety and peace of mind for your investment.',
    color: 'from-amber-400 to-orange-500',
    shadowColor: 'shadow-amber-400/20',
    image: 'images/service-dtcp-plots.jpg',
  },
  {
    icon: Handshake,
    title: 'Property Consultation',
    description:
      'Expert guidance and consultation for all your real estate needs. We help you make informed decisions for maximum value.',
    color: 'from-blue-400 to-indigo-500',
    shadowColor: 'shadow-blue-400/20',
    image: 'images/service-consultation.jpg',
  },
  {
    icon: Building,
    title: 'Venture Development',
    description:
      'End-to-end venture development with modern infrastructure, landscaping, and all essential amenities for comfortable living.',
    color: 'from-orange-500 to-amber-600',
    shadowColor: 'shadow-orange-500/20',
    image: 'images/service-development.jpg',
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="group relative bg-white rounded-3xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-transparent"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              whileHover={{ y: -12, scale: 1.02 }}
            >
              {/* Gradient overlay that appears on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />

              {/* Image at the top */}
              <div className="relative h-64 w-full overflow-hidden rounded-t-3xl">
                <img
                  src={getImagePath(service.image)}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Gradient overlay on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Premium badge */}
                <motion.div
                  className="absolute top-4 right-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <span className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-xl">
                    ⭐ Premium
                  </span>
                </motion.div>

                {/* Decorative corner gradient */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color}`} />
              </div>

              {/* Content */}
              <div className="relative p-7">
                <h3 className="text-2xl font-poppins font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  {service.description}
                </p>

                <motion.button
                  className={`inline-flex items-center gap-2 text-accent font-bold text-base px-6 py-3 rounded-xl bg-gradient-to-r ${service.color} bg-clip-text hover:bg-accent/10 transition-all duration-300`}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                >
                  <span>Learn More</span>
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </motion.button>

                {/* Decorative dot pattern */}
                <div className="absolute bottom-4 right-6 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(3)].map((_, j) => (
                    <div
                      key={j}
                      className={`w-2 h-2 rounded-full bg-gradient-to-br ${service.color}`}
                      style={{ animationDelay: `${j * 0.1}s` }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
