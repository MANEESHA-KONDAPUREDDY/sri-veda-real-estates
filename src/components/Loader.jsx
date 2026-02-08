import { motion, AnimatePresence } from 'framer-motion';
import { Building2 } from 'lucide-react';

const Loader = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-primary"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {/* Animated background particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-accent/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -100, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>

          {/* Animated rings */}
          <div className="relative flex items-center justify-center">
            <motion.div
              className="absolute w-32 h-32 border-2 border-accent/20 rounded-full"
              animate={{ rotate: 360, scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute w-44 h-44 border border-accent/10 rounded-full"
              animate={{ rotate: -360, scale: [1.2, 1, 1.2] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute w-56 h-56 border border-accent/5 rounded-full"
              animate={{ rotate: 180, scale: [1, 1.1, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
            />

            {/* Center logo */}
            <motion.div
              className="relative z-10 flex flex-col items-center"
              animate={{ scale: [0.95, 1.05, 0.95] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, ease: 'backOut' }}
              >
                <Building2 className="w-16 h-16 text-accent" strokeWidth={1.5} />
              </motion.div>

              <motion.h1
                className="mt-4 text-2xl font-poppins font-bold text-white tracking-wider"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                SRI VEDA
              </motion.h1>

              <motion.p
                className="text-accent text-sm tracking-[0.3em] uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                Real Estates
              </motion.p>
            </motion.div>
          </div>

          {/* Loading bar */}
          <motion.div
            className="absolute bottom-20 left-1/2 -translate-x-1/2 w-48 h-0.5 bg-white/10 rounded-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-accent to-emerald-400 rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 2.5, ease: 'easeInOut' }}
            />
          </motion.div>

          <motion.p
            className="absolute bottom-12 text-white/40 text-xs tracking-widest uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Loading Experience
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
