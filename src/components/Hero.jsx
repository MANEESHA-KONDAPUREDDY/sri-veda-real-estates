import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, MapPin, Home, TrendingUp, Shield } from 'lucide-react';

const Hero = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-primary"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-primary" />

        {/* Animated mesh gradient */}
        <motion.div
          className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(9, 237, 140, 0.3), transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(212, 168, 83, 0.4), transparent 70%)',
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent/40 rounded-full"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <motion.div
              className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <MapPin className="w-4 h-4 text-accent" />
              <span className="text-accent text-sm font-medium">Ongole, Andhra Pradesh</span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-poppins font-bold text-white leading-[1.1] mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Find Your
              <br />
              <span className="relative inline-block">
                <span className="gradient-text relative z-10">Dream Property</span>
                <motion.span
                  className="absolute -inset-1 bg-gradient-to-r from-accent/30 to-emerald-400/30 blur-xl -z-10"
                  animate={{ opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </span>
              <br />
              in Ongole
            </motion.h1>

            <motion.p
              className="text-white/60 text-lg max-w-lg mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We offer a wide range of properties for sale — from premium investment
              lands to ready-to-move houses that exceed your expectations.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.a
                href="#projects"
                className="group relative flex items-center gap-2 bg-gradient-to-r from-accent via-emerald-400 to-teal-400 hover:from-emerald-400 hover:to-accent text-primary font-bold px-8 py-4 rounded-full text-sm transition-all overflow-hidden"
                style={{ boxShadow: '0 10px 40px rgba(9, 237, 140, 0.4)' }}
                whileHover={{ scale: 1.08, y: -2, boxShadow: '0 15px 50px rgba(9, 237, 140, 0.5)' }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-white/30"
                  initial={{ x: '-100%', skewX: -20 }}
                  whileHover={{ x: '200%' }}
                  transition={{ duration: 0.7 }}
                />
                <span className="relative">Explore Properties</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform relative" />
              </motion.a>
              <motion.a
                href="#contact"
                className="group relative flex items-center gap-2 border-2 border-white/30 hover:border-accent backdrop-blur-sm bg-white/10 text-white font-semibold px-8 py-4 rounded-full text-sm transition-all overflow-hidden"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-accent/20 to-emerald-400/20"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative">Contact Us</span>
              </motion.a>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              className="flex gap-8 mt-14 pt-8 border-t border-white/10"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1, duration: 0.8 }}
            >
              {[
                { number: '500+', label: 'Properties Sold' },
                { number: '10+', label: 'Years Experience' },
                { number: '1000+', label: 'Happy Families' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.2 + i * 0.2 }}
                >
                  <div className="text-2xl font-poppins font-bold text-accent">{stat.number}</div>
                  <div className="text-white/40 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right side - Property Images */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Main property showcase */}
              <motion.div
                className="relative z-10 rounded-3xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                animate={inView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <img
                  src={`${import.meta.env.BASE_URL}images/property1.jpg`}
                  alt="Premium Real Estate Property"
                  className="w-full h-[500px] object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />

                {/* Property info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {[
                      {
                        icon: Home,
                        title: 'Open Plots',
                        desc: 'DTCP Approved',
                      },
                      {
                        icon: TrendingUp,
                        title: 'Investment',
                        desc: 'High Returns',
                      },
                      {
                        icon: Shield,
                        title: 'Approved',
                        desc: 'RERA Certified',
                      },
                      {
                        icon: MapPin,
                        title: 'Prime Location',
                        desc: 'Ongole',
                      },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 hover:bg-white/15 transition-all cursor-pointer group"
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.8 + i * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <item.icon className="w-5 h-5 text-accent mb-1 group-hover:scale-110 transition-transform" />
                        <h4 className="font-poppins font-semibold text-xs mb-0.5">
                          {item.title}
                        </h4>
                        <p className="text-white/60 text-[10px]">{item.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Decorative badge */}
                <motion.div
                  className="absolute top-4 right-4 bg-accent text-primary font-bold text-xs px-4 py-2 rounded-full shadow-lg"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Best Deals
                </motion.div>
              </motion.div>

              {/* Background decorative elements */}
              <motion.div
                className="absolute -top-8 -left-8 w-32 h-32 border border-accent/20 rounded-3xl"
                animate={{ rotate: [0, 90, 0] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent/5 rounded-2xl"
                animate={{ rotate: [0, -90, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
          <motion.div
            className="w-1.5 h-3 bg-accent rounded-full mt-1.5"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
