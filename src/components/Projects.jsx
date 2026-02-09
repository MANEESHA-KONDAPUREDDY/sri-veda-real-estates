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
        className="group relative bg-white border border-navy-200 rounded-3xl overflow-hidden transition-all duration-500 shadow-3d-card transform-3d"
        animate={{
          rotateX: mousePosition.rotateX,
          rotateY: mousePosition.rotateY,
        }}
        style={{
          transformStyle: 'preserve-3d',
          boxShadow: `${mousePosition.rotateY * 1.5}px ${-mousePosition.rotateX * 1.5}px 40px rgba(30, 58, 138, 0.2), ${-mousePosition.rotateY}px ${mousePosition.rotateX}px 30px rgba(245, 158, 11, 0.1)`,
        }}
        whileHover={{
          scale: 1.03,
          borderColor: '#F59E0B',
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
            className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-navy-900/30 to-transparent"
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
            <span className="inline-flex items-center gap-1 bg-gold-500 text-navy-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-3d-button">
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
              <span className="bg-white text-gold-600 text-xs font-bold px-3 py-1.5 rounded-full shadow-3d-button">
                ⭐ Featured
              </span>
            </motion.div>
          )}

          {/* Hover overlay with 3D icon */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-gold-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center"
            style={{ transform: 'translateZ(35px)' }}
          >
            <motion.div
              className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center cursor-pointer shadow-3d-elevated"
              whileHover={{ scale: 1.4, rotateZ: 90 }}
              transition={{ duration: 0.3 }}
              style={{ transform: 'translateZ(10px)' }}
            >
              <ArrowUpRight className="w-7 h-7 text-navy-900 font-bold" strokeWidth={3} />
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
          <h3 className="text-xl font-poppins font-bold text-navy-900 mb-2 group-hover:text-gold-600 transition-colors">
            {project.title}
          </h3>
          <div className="flex items-center gap-1.5 text-gray-600 text-sm mb-4">
            <MapPin className="w-4 h-4 text-gold-500" />
            {project.location}
          </div>
          <div className="flex items-center justify-between pt-4 border-t border-navy-100 group-hover:border-gold-200 transition-colors">
            <div className="flex items-center gap-1.5 text-gray-500 text-xs">
              <Maximize className="w-4 h-4" />
              {project.size}
            </div>
            <motion.div
              className="text-gold-600 font-poppins font-bold text-lg"
              whileHover={{ scale: 1.15, rotateY: 10 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {project.price}
            </motion.div>
          </div>
        </div>

        {/* 3D Glow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-gold-400/10 via-transparent to-navy-600/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-3xl"
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
        background: 'linear-gradient(180deg, #ffffff 0%, #f0f4ff 50%, #ffffff 100%)',
      }}
    >
      {/* 3D Background decorations */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(30, 58, 138, 0.1), transparent 70%)',
        }}
        animate={{
          scale: [1, 1.3, 1],
          rotateZ: [0, 180, 360],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />

      <motion.div
        className="absolute bottom-20 right-10 w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.15), transparent 70%)',
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.span
            className="inline-block text-gold-600 font-semibold text-sm tracking-widest uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            style={{ textShadow: '0 0 20px rgba(245, 158, 11, 0.3)' }}
          >
            Our Projects
          </motion.span>
          <motion.h2
            className="text-3xl lg:text-4xl xl:text-5xl font-poppins font-bold text-navy-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          >
            Featured <span className="text-gold-600">Properties</span>
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg"
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
                  ? 'bg-navy-900 text-white border-2 border-gold-500 shadow-3d-button'
                  : 'bg-white text-gray-700 hover:bg-navy-50 hover:text-navy-900 border-2 border-navy-200'
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
