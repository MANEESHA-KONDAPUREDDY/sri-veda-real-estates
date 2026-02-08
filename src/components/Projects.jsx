import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Maximize, ArrowUpRight, BadgeCheck } from 'lucide-react';

const categories = ['All', 'Open Plots', 'Investment', 'Residential', 'Commercial'];

const getImagePath = (imagePath) => `${import.meta.env.BASE_URL}${imagePath.replace(/^\//, '')}`;

const projects = [
  {
    title: 'Sri Veda Nagar Phase 1',
    location: 'Chimakurthy Road, Ongole',
    type: 'Open Plots',
    size: '150 - 300 Sq. Yards',
    status: 'Ready for Registration',
    price: 'Starting ₹15L',
    featured: true,
    image: 'images/open-plots.png',
    gradient: 'from-emerald-400/20 to-teal-500/20',
  },
  {
    title: 'Green Valley Venture',
    location: 'Bypass Road, Ongole',
    type: 'Investment',
    size: '200 - 500 Sq. Yards',
    status: 'DTCP Approved',
    price: 'Starting ₹18L',
    featured: false,
    image: 'images/property1.jpg',
    gradient: 'from-blue-400/20 to-indigo-500/20',
  },
  {
    title: 'Royal Gardens',
    location: 'NH-16, Ongole',
    type: 'Residential',
    size: '120 - 250 Sq. Yards',
    status: 'Under Development',
    price: 'Starting ₹22L',
    featured: true,
    image: 'images/property3.jpg',
    gradient: 'from-purple-400/20 to-pink-500/20',
  },
  {
    title: 'Veda Heights',
    location: 'Kurnool Road, Ongole',
    type: 'Residential',
    size: '1200 - 2400 Sq. Ft.',
    status: 'Ready to Move',
    price: 'Starting ₹45L',
    featured: false,
    image: 'images/house1.webp',
    gradient: 'from-amber-400/20 to-orange-500/20',
  },
  {
    title: 'Business Park',
    location: 'Auto Nagar, Ongole',
    type: 'Commercial',
    size: '500 - 2000 Sq. Ft.',
    status: 'Approved Layout',
    price: 'Starting ₹35L',
    featured: false,
    image: 'images/property4.jpg',
    gradient: 'from-rose-400/20 to-red-500/20',
  },
  {
    title: 'Sri Veda Nagar Phase 2',
    location: 'Addanki Road, Ongole',
    type: 'Open Plots',
    size: '167 - 333 Sq. Yards',
    status: 'New Launch',
    price: 'Starting ₹12L',
    featured: true,
    image: 'images/open-plots.png',
    gradient: 'from-cyan-400/20 to-blue-500/20',
  },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.type === activeFilter);

  return (
    <section id="projects" className="relative py-24 lg:py-32 bg-primary overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, rgba(9, 237, 140, 0.3), transparent 70%)' }}
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.span
            className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Our Projects
          </motion.span>
          <motion.h2
            className="text-3xl lg:text-4xl xl:text-5xl font-poppins font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Featured <span className="text-accent">Properties</span>
          </motion.h2>
          <motion.p
            className="text-white/60 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore our carefully selected properties offering the best value
            and appreciation potential in Ongole.
          </motion.p>
        </div>

        {/* Filter tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeFilter === cat
                  ? 'bg-accent text-primary shadow-lg shadow-accent/25'
                  : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/20"
                whileHover={{ y: -12, scale: 1.02 }}
              >
                {/* Image area */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={getImagePath(project.image)}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent" />

                  {/* Animated gradient overlay */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  {/* Status badge */}
                  <motion.div
                    className="absolute top-4 left-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <span className="inline-flex items-center gap-1 bg-gradient-to-r from-accent to-emerald-400 text-primary text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                      <BadgeCheck className="w-3 h-3" />
                      {project.status}
                    </span>
                  </motion.div>

                  {project.featured && (
                    <motion.div
                      className="absolute top-4 right-4"
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <span className="bg-gradient-to-r from-gold to-amber-500 text-primary text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                        ⭐ Featured
                      </span>
                    </motion.div>
                  )}

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <motion.div
                      className="w-14 h-14 bg-gradient-to-br from-accent to-emerald-400 rounded-full flex items-center justify-center cursor-pointer shadow-xl"
                      whileHover={{ scale: 1.3, rotate: 90 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowUpRight className="w-6 h-6 text-primary font-bold" strokeWidth={3} />
                    </motion.div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 relative">
                  {/* Decorative gradient line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient.replace('/20', '')} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <h3 className="text-lg font-poppins font-bold text-white mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-white/50 text-sm mb-4 group-hover:text-white/70 transition-colors">
                    <MapPin className="w-4 h-4 text-accent" />
                    {project.location}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10 group-hover:border-accent/30 transition-colors">
                    <div className="flex items-center gap-1.5 text-white/40 text-xs group-hover:text-white/60 transition-colors">
                      <Maximize className="w-4 h-4" />
                      {project.size}
                    </div>
                    <motion.div
                      className="text-accent font-poppins font-bold text-base"
                      whileHover={{ scale: 1.1 }}
                    >
                      {project.price}
                    </motion.div>
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

export default Projects;
