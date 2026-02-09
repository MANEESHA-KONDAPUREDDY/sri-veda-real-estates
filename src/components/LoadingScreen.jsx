import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, #0F172A 0%, #1E1B4B 50%, #0F172A 100%)',
          }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Animated background particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full"
                style={{
                  background: i % 2 === 0 ? '#06B6D4' : '#8B5CF6',
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  boxShadow: i % 2 === 0
                    ? '0 0 10px rgba(6, 182, 212, 0.8)'
                    : '0 0 10px rgba(139, 92, 246, 0.8)',
                }}
                animate={{
                  y: [0, -100, 0],
                  opacity: [0.2, 1, 0.2],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 3 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* 3D Cube Container */}
          <div className="relative perspective-2000">
            <motion.div
              className="relative w-32 h-32 transform-3d animate-cube-spin"
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Front Face */}
              <div
                className="absolute w-32 h-32 neon-cyan"
                style={{
                  background: 'linear-gradient(135deg, #8B5CF6, #06B6D4)',
                  transform: 'translateZ(64px)',
                  backfaceVisibility: 'hidden',
                  borderRadius: '8px',
                }}
              />

              {/* Back Face */}
              <div
                className="absolute w-32 h-32 neon-purple"
                style={{
                  background: 'linear-gradient(135deg, #06B6D4, #8B5CF6)',
                  transform: 'translateZ(-64px) rotateY(180deg)',
                  backfaceVisibility: 'hidden',
                  borderRadius: '8px',
                }}
              />

              {/* Right Face */}
              <div
                className="absolute w-32 h-32 neon-cyan"
                style={{
                  background: 'linear-gradient(135deg, #A78BFA, #22D3EE)',
                  transform: 'rotateY(90deg) translateZ(64px)',
                  backfaceVisibility: 'hidden',
                  borderRadius: '8px',
                }}
              />

              {/* Left Face */}
              <div
                className="absolute w-32 h-32 neon-purple"
                style={{
                  background: 'linear-gradient(135deg, #22D3EE, #A78BFA)',
                  transform: 'rotateY(-90deg) translateZ(64px)',
                  backfaceVisibility: 'hidden',
                  borderRadius: '8px',
                }}
              />

              {/* Top Face */}
              <div
                className="absolute w-32 h-32 neon-dual"
                style={{
                  background: 'linear-gradient(135deg, #7C3AED, #0891B2)',
                  transform: 'rotateX(90deg) translateZ(64px)',
                  backfaceVisibility: 'hidden',
                  borderRadius: '8px',
                }}
              />

              {/* Bottom Face */}
              <div
                className="absolute w-32 h-32 neon-dual"
                style={{
                  background: 'linear-gradient(135deg, #0891B2, #7C3AED)',
                  transform: 'rotateX(-90deg) translateZ(64px)',
                  backfaceVisibility: 'hidden',
                  borderRadius: '8px',
                }}
              />
            </motion.div>

            {/* Loading Text */}
            <motion.div
              className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-2xl font-poppins font-bold text-white text-glow-cyan mb-2">
                Sri Veda Real Estates
              </h2>
              <motion.div
                className="flex items-center justify-center gap-1"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <span className="text-cyan-400 text-sm">Loading</span>
                <motion.span
                  className="flex gap-1"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, times: [0, 0.5, 1] }}
                >
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full neon-cyan"></span>
                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full neon-purple"></span>
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full neon-cyan"></span>
                </motion.span>
              </motion.div>
            </motion.div>
          </div>

          {/* Glitch Effect Overlay */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(6, 182, 212, 0.1) 50%, transparent 100%)',
              backgroundSize: '200% 100%',
            }}
            animate={{
              backgroundPosition: ['0% 0%', '200% 0%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
