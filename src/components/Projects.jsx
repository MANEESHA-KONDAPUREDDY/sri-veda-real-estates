import React, { useState } from 'react';
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

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filteredProjects = activeFilter === 'All' ? projects : projects.filter((p) => p.type === activeFilter);

  return (
    <section id="projects" className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <motion.div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-20" style={{ background: 'radial-gradient(circle, rgba(236, 72, 153, 0.15), transparent 70%)' }} animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 10, repeat: Infinity, ease: [0.4, 0, 0.2, 1] }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.span className="inline-block text-pink-500 font-semibold text-sm tracking-widest uppercase mb-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}>Our Projects</motion.span>
          <motion.h2 className="text-3xl lg:text-4xl xl:text-5xl font-poppins font-bold text-gray-900 mb-6" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}>Featured <span className="text-pink-500">Properties</span></motion.h2>
          <motion.p className="text-gray-500 text-lg" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}>Explore our carefully selected properties offering the best value and appreciation potential in Ongole.</motion.p>
        </div>

        <motion.div className="flex flex-wrap justify-center gap-3 mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: 0.3, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}>
          {categories.map((cat) => (
            <motion.button key={cat} onClick={() => setActiveFilter(cat)} className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${activeFilter === cat ? 'bg-pink-500 text-white shadow-lg shadow-pink-500/25' : 'bg-pink-50 text-gray-600 hover:bg-pink-100 hover:text-pink-600 border border-pink-200'}`} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>{cat}</motion.button>
          ))}
        </motion.div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div key={project.title} layout initial={{ opacity: 0, scale: 0.85, y: 30 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} exit={{ opacity: 0, scale: 0.8 }} transition={{ duration: 0.6, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] }} className="group relative bg-white border border-pink-100 rounded-2xl overflow-hidden hover:border-pink-300 transition-all duration-500 hover:shadow-2xl hover:shadow-pink-200/40" whileHover={{ y: -12, scale: 1.02 }}>
                <div className="relative h-48 overflow-hidden">
                  <img src={getImagePath(project.image)} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" decoding="async" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/20 to-transparent" />
                  <motion.div className="absolute top-4 left-4" whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}>
                    <span className="inline-flex items-center gap-1 bg-pink-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg"><BadgeCheck className="w-3 h-3" />{project.status}</span>
                  </motion.div>
                  {project.featured && (
                    <motion.div className="absolute top-4 right-4" animate={{ rotate: [0, 5, -5, 0] }} transition={{ duration: 3, repeat: Infinity }}>
                      <span className="bg-white text-pink-600 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">⭐ Featured</span>
                    </motion.div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <motion.div className="w-14 h-14 bg-pink-500 rounded-full flex items-center justify-center cursor-pointer shadow-xl" whileHover={{ scale: 1.3, rotate: 90 }} transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}>
                      <ArrowUpRight className="w-6 h-6 text-white font-bold" strokeWidth={3} />
                    </motion.div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-poppins font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">{project.title}</h3>
                  <div className="flex items-center gap-1.5 text-gray-500 text-sm mb-4"><MapPin className="w-4 h-4 text-pink-500" />{project.location}</div>
                  <div className="flex items-center justify-between pt-4 border-t border-pink-100 group-hover:border-pink-200 transition-colors">
                    <div className="flex items-center gap-1.5 text-gray-400 text-xs"><Maximize className="w-4 h-4" />{project.size}</div>
                    <motion.div className="text-pink-600 font-poppins font-bold text-base" whileHover={{ scale: 1.1 }}>{project.price}</motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(Projects);
