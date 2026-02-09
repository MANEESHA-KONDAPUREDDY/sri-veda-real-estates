import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Star, Quote } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  { name: 'Rajesh Kumar', role: 'Business Owner', text: 'Sri Veda Real Estates helped me find the perfect investment plot in Ongole. The appreciation has been phenomenal, and their team was incredibly professional throughout the process.', rating: 5, initials: 'RK', color: 'from-blue-900 to-blue-700' },
  { name: 'Lakshmi Devi', role: 'Homemaker', text: "We purchased our dream home through Sri Veda. The quality of construction and the location exceeded our expectations. Truly a trustworthy company in Ongole's real estate market.", rating: 5, initials: 'LD', color: 'from-amber-500 to-amber-400' },
  { name: 'Venkat Rao', role: 'Software Engineer', text: 'I invested in their Green Valley venture and the returns have been amazing. Their DTCP approved plots give complete peace of mind. Highly recommended for safe investments.', rating: 5, initials: 'VR', color: 'from-blue-800 to-blue-600' },
  { name: 'Suresh Babu', role: 'Government Employee', text: 'The team at Sri Veda was transparent and helpful from start to finish. They guided me through every step and ensured all documentation was perfect. Great service!', rating: 5, initials: 'SB', color: 'from-amber-600 to-amber-400' },
  { name: 'Priya Sharma', role: 'Doctor', text: 'Being an NRI, it was crucial for me to work with a reliable company. Sri Veda managed everything seamlessly and I now own a beautiful plot in a prime Ongole location.', rating: 5, initials: 'PS', color: 'from-blue-700 to-amber-500' },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-24 lg:py-32 bg-gradient-to-br from-blue-50 via-amber-50/30 to-blue-50 overflow-hidden">
      <div className="absolute top-10 right-10 w-64 h-64 bg-amber-200/40 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-blue-100/40 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span className="inline-block text-amber-600 font-semibold text-sm tracking-widest uppercase mb-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}>Testimonials</motion.span>
          <motion.h2 className="text-3xl lg:text-4xl xl:text-5xl font-poppins font-bold text-blue-900 mb-6" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}>What Our <span className="text-amber-500">Clients Say</span></motion.h2>
          <motion.p className="text-blue-700 text-lg" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}>Hear from our satisfied customers who found their perfect properties with us.</motion.p>
        </div>

        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: 0.3, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}>
          <Swiper modules={[Autoplay, Pagination]} spaceBetween={24} slidesPerView={1} breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }} autoplay={{ delay: 4000, disableOnInteraction: false }} pagination={{ clickable: true }} className="pb-14">
            {testimonials.map((testimonial, i) => (
              <SwiperSlide key={i}>
                <motion.div className="bg-white rounded-2xl p-8 shadow-3d-card border border-blue-100 hover:shadow-3d-elevated hover:border-amber-300 transition-all duration-500 h-full transform-3d preserve-3d" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: i * 0.1, duration: 0.6, ease: [0.4, 0, 0.2, 1] }} whileHover={{ y: -5 }} style={{ transform: 'translateZ(10px)' }}>
                  <motion.div whileHover={{ rotateY: 15 }} transition={{ duration: 0.3 }}>
                    <Quote className="w-8 h-8 text-amber-200 mb-4" />
                  </motion.div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                  <p className="text-blue-800 text-sm leading-relaxed mb-6">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-blue-100">
                    <motion.div className={`w-10 h-10 bg-gradient-to-br ${testimonial.color} rounded-full flex items-center justify-center text-white text-sm font-bold shadow-3d-button`} whileHover={{ rotateY: 180 }} transition={{ duration: 0.6 }}>{testimonial.initials}</motion.div>
                    <div>
                      <div className="font-poppins font-semibold text-blue-900 text-sm">{testimonial.name}</div>
                      <div className="text-blue-400 text-xs">{testimonial.role}</div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(Testimonials);
