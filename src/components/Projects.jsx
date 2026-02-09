import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Maximize, ArrowUpRight, BadgeCheck } from 'lucide-react';

const categories = ['All', 'Open Plots', 'Investment', 'Residential', 'Commercial'];
const getImagePath = (imagePath) => `${import.meta.env.BASE_URL}${imagePath.replace(/^\//, '')}`;

const projects = [
  { title: 'Sri Veda Nagar Phase 1', location: 'Chimakurthy Road, Ongole', type: 'Open Plots', size: '150 - 300 Sq. Yards', status: 'Ready for Registration', price: 'Starting ₹15L', featured: true, image: 'images/open-plots.png' },
  { title: 'Green Valley Venture', location: 'Bypass Road, Ongole', type: 'Investment', size: '200 - 500 Sq. Yards', status: 'DTCP Approved', price: 'Starting ₹18L', featured: false, image: 'images/property1.jpg' },
  { title: 'Royal Gardens', location: 'NH-16, Ongole', type: 'Residential', size: '120 - 250 Sq. Yards', status: 'Under Development', price: 'Starting ₹22L', featured: true, image: 'images/property3.jpg' },
  { title: 'Veda Heights', location: 'Kurnool Road, Ongole', type: 'Residential', size: '1200 - 2400 Sq. Ft.', status: 'Ready to Move', price: 'Starting ₹45L', featured: false, image: 'images/house1.webp' },
  { title: 'Business Park', location: 'Auto Nagar, Ongole', type: 'Commercial', size: '500 - 2000 Sq. Ft.', status: 'Approved Layout', price: 'Starting ₹35L', featured: false, image: 'images/property4.jpg' },
  { title: 'Sri Veda Nagar Phase 2', location: 'Addanki Road, Ongole', type: 'Open Plots', size: '167 - 333 Sq. Yards', status: 'New Launch', price: 'Starting ₹12L', featured: true, image: 'images/open-plots.png' },
];

// Card component with mouse tracking
const ProjectCard = ({ project, index }) => {
  const [mousePosition, setMousePosition] = useState({ rotateX: 0, rotateY: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 12;
    const rotateX = ((centerY - y) / centerY) * 12;

    setMousePosition({ rotateX, rotateY });
  };

  const resetTilt = () => {
    setMousePosition({ rotateX: 0, rotateY: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      layout
      initial={{ opacity: 0, scale: 0.85, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: [0.4, 0, 0.2, 1] }}
      className="perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
    >
      <motion.div
        className="group relative bg-slate-800/50 backdrop-blur-sm border border-purple-500/30 rounded-3xl overflow-hidden transition-all duration-500 shadow-3d-card transform-3d neon-cyan-hover"
        animate={{
          rotateX: mousePosition.rotateX,
          rotateY: mousePosition.rotateY,
        }}
        style={{
          transformStyle: 'preserve-3d',
          boxShadow: `${mousePosition.rotateY * 1.5}px ${-mousePosition.rotateX * 1.5}px 40px rgba(139, 92, 246, 0.3), ${-mousePosition.rotateY}px ${mousePosition.rotateX}px 30px rgba(6, 182, 212, 0.2)`,
        }}
        whileHover={{
          scale: 1.03,
          borderColor: '#06B6D4',
          transition: { duration: 0.3 },
        }}
      >
        {/* Image Container with 3D depth */}
        <div className="relative h-56 overflow-hidden" style={{ transformStyle: 'preserve-3d' }}>
          <motion.img
            src={getImagePath(project.image)}
            alt={project.title}
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
            style={{
              transformStyle: 'preserve-3d',
              transform: 'translateZ(30px)',
            }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.7 }}
          />

          {/* Gradient Overlays */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/30 to-transparent"
            style={{ transform: 'translateZ(20px)' }}
          />

          {/* Status Badge */}
          <motion.div
            className="absolute top-4 left-4"
            whileHover={{ scale: 1.15, rotate: 5 }}
            transition={{ duration: 0.3 }}
            style={{
              transformStyle: 'preserve-3d',
              transform: 'translateZ(40px)',
            }}
          >
            <span className="inline-flex items-center gap-1 bg-cyan-500 text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-3d-button neon-cyan">
              <BadgeCheck className="w-3 h-3" />
              {project.status}
            </span>
          </motion.div>

          {/* Featured Badge with 3D orbit */}
          {project.featured && (
            <motion.div
              className="absolute top-4 right-4"
              animate={{
                rotateZ: [0, 5, -5, 0],
                scale: [1, 1.08, 1],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{
                transformStyle: 'preserve-3d',
                transform: 'translateZ(40px)',
              }}
            >
              <span className="bg-white text-purple-600 text-xs font-bold px-3 py-1.5 rounded-full shadow-3d-button">
                ⭐ Featured
              </span>
            </motion.div>
          )}

          {/* Hover overlay with 3D icon */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-cyan-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center"
            style={{ transform: 'translateZ(35px)' }}
          >
            <motion.div
              className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center cursor-pointer shadow-3d-elevated neon-cyan"
              whileHover={{ scale: 1.4, rotateZ: 90 }}
              transition={{ duration: 0.3 }}
              style={{ transform: 'translateZ(10px)' }}
            >
              <ArrowUpRight className="w-7 h-7 text-slate-900 font-bold" strokeWidth={3} />
            </motion.div>
          </div>
        </div>

        {/* Content with depth */}
        <div
          className="p-6"
          style={{
            transformStyle: 'preserve-3d',
            transform: 'translateZ(15px)',
          }}
        >
          <h3 className="text-xl font-poppins font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>
          <div className="flex items-center gap-1.5 text-slate-400 text-sm mb-4">
            <MapPin className="w-4 h-4 text-cyan-500" />
            {project.location}
          </div>
          <div className="flex items-center justify-between pt-4 border-t border-purple-500/20 group-hover:border-cyan-400/30 transition-colors">
            <div className="flex items-center gap-1.5 text-slate-500 text-xs">
              <Maximize className="w-4 h-4" />
              {project.size}
            </div>
            <motion.div
              className="text-cyan-400 font-poppins font-bold text-lg"
              whileHover={{ scale: 1.15, rotateY: 10 }}
              style={{ transformStyle: 'preserve-3d', textShadow: '0 0 20px rgba(6, 182, 212, 0.6)' }}
            >
              {project.price}
            </motion.div>
          </div>
        </div>

        {/* 3D Glow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-3xl"
          animate={{
            opacity: [0, 0.3, 0],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filteredProjects = activeFilter === 'All' ? projects : projects.filter((p) => p.type === activeFilter);

  return (
    <section
      id="projects"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0F172A 0%, #020617 50%, #0F172A 100%)',
      }}
    >
      {/* 3D Background decorations */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15), transparent 70%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      />

      <motion.div
        className="absolute bottom-20 right-10 w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.2), transparent 70%)',
        }}
        animate={{
          scale: [1.15, 1, 1.15],
        }}
        transition={{ duration: 14, repeat: Infinity }}
      />

      {/* Floating particles with sparkle effect */}
      {[...Array(10)].map((_, i) => {
        const randomDelay = Math.random() * 4;
        const randomDuration = 4 + Math.random() * 5;
        const randomSize = 1 + Math.random() * 3;

        return (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              width: `${randomSize}px`,
              height: `${randomSize}px`,
              background: i % 3 === 0
                ? 'rgba(34, 211, 238, 0.7)'
                : i % 3 === 1
                ? 'rgba(139, 92, 246, 0.6)'
                : 'rgba(167, 139, 250, 0.5)',
              boxShadow: i % 3 === 0
                ? '0 0 15px rgba(34, 211, 238, 1)'
                : i % 3 === 1
                ? '0 0 15px rgba(139, 92, 246, 1)'
                : '0 0 12px rgba(167, 139, 250, 1)',
              transformStyle: 'preserve-3d',
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 30 - 15, 0],
              scale: [1, 2, 1],
              opacity: [0.2, 1, 0.2],
              rotate: [0, 360],
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.span
            className="inline-block text-cyan-400 font-semibold text-sm tracking-widest uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            style={{ textShadow: '0 0 20px rgba(6, 182, 212, 0.5)' }}
          >
            Our Projects
          </motion.span>
          <motion.h2
            className="text-3xl lg:text-4xl xl:text-5xl font-poppins font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          >
            Featured <span className="text-cyan-400">Properties</span>
          </motion.h2>
          <motion.p
            className="text-slate-300 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          >
            Explore our carefully selected properties offering the best value and appreciation potential in Ongole.
          </motion.p>
        </div>

        {/* 3D Filter buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.3, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all transform-3d ${
                activeFilter === cat
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white border-2 border-cyan-400 shadow-3d-button neon-dual'
                  : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:text-cyan-400 border-2 border-purple-500/30'
              }`}
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                translateZ: activeFilter === cat ? 20 : 0,
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(Projects);
