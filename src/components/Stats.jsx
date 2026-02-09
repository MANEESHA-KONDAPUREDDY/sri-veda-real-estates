import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { Home, Users, Award, MapPin } from 'lucide-react';

const stats = [
  { icon: Home, number: 500, suffix: '+', label: 'Properties Sold', color: 'text-cyan-400' },
  { icon: Users, number: 1000, suffix: '+', label: 'Happy Families', color: 'text-purple-400' },
  { icon: Award, number: 10, suffix: '+', label: 'Years Experience', color: 'text-cyan-400' },
  { icon: MapPin, number: 50, suffix: '+', label: 'Prime Locations', color: 'text-purple-400' },
];

const Stats = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 overflow-hidden" ref={ref}>
      {/* Background accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-cyan-400 to-purple-600" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="text-center group"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <motion.div
                className="w-16 h-16 mx-auto mb-4 bg-slate-800/50 rounded-2xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-purple-600 group-hover:to-cyan-500 transition-all duration-500 group-hover:shadow-xl border border-purple-500/30 neon-dual-hover"
                whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
              >
                <stat.icon className={`w-7 h-7 ${stat.color} group-hover:text-white transition-colors`} />
              </motion.div>

              <div className="text-4xl lg:text-5xl font-poppins font-bold text-white mb-2">
                {inView ? (
                  <CountUp end={stat.number} duration={2.5} separator="," />
                ) : (
                  0
                )}
                <span className="text-cyan-400">{stat.suffix}</span>
              </div>

              <div className="text-slate-400 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
