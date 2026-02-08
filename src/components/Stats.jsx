import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { Home, Users, Award, MapPin } from 'lucide-react';

const stats = [
  { icon: Home, number: 500, suffix: '+', label: 'Properties Sold', color: 'text-emerald-400' },
  { icon: Users, number: 1000, suffix: '+', label: 'Happy Families', color: 'text-blue-400' },
  { icon: Award, number: 10, suffix: '+', label: 'Years Experience', color: 'text-amber-400' },
  { icon: MapPin, number: 50, suffix: '+', label: 'Prime Locations', color: 'text-purple-400' },
];

const Stats = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="relative py-20 bg-white overflow-hidden" ref={ref}>
      {/* Background accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-emerald-400 to-accent" />

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
                className="w-16 h-16 mx-auto mb-4 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-all duration-500 group-hover:shadow-xl"
                whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
              >
                <stat.icon className={`w-7 h-7 ${stat.color} group-hover:text-accent transition-colors`} />
              </motion.div>

              <div className="text-4xl lg:text-5xl font-poppins font-bold text-primary mb-2">
                {inView ? (
                  <CountUp end={stat.number} duration={2.5} separator="," />
                ) : (
                  0
                )}
                <span className="text-accent">{stat.suffix}</span>
              </div>

              <div className="text-gray-500 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
