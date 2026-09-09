import React, { useState } from 'react';
import { Project } from '../types';
import { PROJECTS } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Calendar, Building, ChevronLeft, ChevronRight, X, ArrowUpRight } from 'lucide-react';

interface PortfolioGridProps {
  onInquire: (category: string) => void;
}

export default function PortfolioGrid({ onInquire }: PortfolioGridProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const categories = ['All', 'Corporate', 'Cultural & Theatre', 'Celebrations', 'Bespoke Keepsakes'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  const handleProjectClick = (project: Project) => {
    setActiveProject(project);
    setActiveImageIndex(0);
  };

  const handleNextImage = (e: React.MouseEvent, max: number) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev + 1) % max);
  };

  const handlePrevImage = (e: React.MouseEvent, max: number) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev - 1 + max) % max);
  };

  return (
    <div className="relative">
      {/* Category Filter Controls */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              id={`portfolio-filter-${cat.toLowerCase()}`}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full font-sans text-[10px] uppercase tracking-widest transition-all duration-300 border cursor-pointer ${
                isActive
                  ? 'bg-brand-orange text-brand-white border-brand-orange shadow-lg shadow-brand-orange/15'
                  : 'bg-brand-charcoal-light text-brand-white/70 border-brand-white/5 hover:border-brand-white/15 hover:text-brand-white'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Visual Projects Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
              key={project.id}
              id={`portfolio-item-${project.id}`}
              onClick={() => handleProjectClick(project)}
              className="group relative h-[440px] rounded-3xl overflow-hidden cursor-pointer bg-brand-charcoal-light border border-brand-white/5"
            >
              {/* Cover Art */}
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-60 transition-opacity duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/40 to-transparent" />
              </div>

              {/* Badges / Header overlay */}
              <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
                <span className="px-4 py-1.5 bg-brand-charcoal/80 backdrop-blur-md border border-brand-white/10 text-brand-white text-[10px] tracking-widest uppercase font-semibold rounded-full">
                  {project.category}
                </span>
                <span className="px-3.5 py-1.5 bg-brand-orange/15 border border-brand-orange/30 text-brand-orange-light text-[10px] font-bold uppercase tracking-wider rounded-full">
                  {project.year}
                </span>
              </div>

              {/* Bottom Details card */}
              <div className="absolute inset-x-6 bottom-6 p-6 rounded-2xl bg-brand-charcoal/90 backdrop-blur-md border border-brand-white/5 z-10 transition-colors group-hover:border-brand-orange/20">
                <p className="font-sans text-[10px] tracking-widest text-brand-orange-light uppercase font-bold mb-1">
                  {project.location}
                </p>
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-extrabold text-lg text-brand-white tracking-wide">
                    {project.title}
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-brand-orange/10 border border-brand-orange/30 flex items-center justify-center text-brand-orange-light group-hover:bg-brand-orange group-hover:text-brand-white transition-all duration-300">
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Deep Case Study Modal overlay */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-brand-charcoal/95 backdrop-blur-lg overflow-y-auto">
            {/* Click outside to close */}
            <div className="absolute inset-0" onClick={() => setActiveProject(null)} />

            {/* Case Study Card */}
            <motion.div
              id={`case-study-modal-${activeProject.id}`}
              initial={{ opacity: 0, scale: 0.98, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 30 }}
              transition={{ type: 'spring', damping: 28, stiffness: 180 }}
              className="relative w-full max-w-5xl bg-brand-charcoal-light border border-brand-white/10 rounded-3xl overflow-hidden shadow-2xl z-10 my-8"
            >
              {/* Floating Close Button */}
              <button
                id="close-case-study"
                onClick={() => setActiveProject(null)}
                className="absolute top-6 right-6 z-30 p-2.5 rounded-full bg-brand-charcoal/80 border border-brand-white/10 text-brand-white/80 hover:text-brand-white hover:bg-brand-charcoal hover:scale-105 transition-all duration-300 cursor-pointer"
                aria-label="Close"
              >
                <X size={18} />
              </button>

              {/* Editorial Header Section */}
              <div className="relative h-[340px] sm:h-[400px]">
                {/* Master Image Carousel */}
                <div className="absolute inset-0">
                  <img
                    src={activeProject.galleryImages[activeImageIndex]}
                    alt={`${activeProject.title} ${activeImageIndex + 1}`}
                    className="w-full h-full object-cover transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal-light via-brand-charcoal-light/50 to-transparent" />
                </div>

                {/* Carousel Controls */}
                <div className="absolute inset-x-6 top-1/2 -translate-y-1/2 flex items-center justify-between z-20">
                  <button
                    id="carousel-prev"
                    onClick={(e) => handlePrevImage(e, activeProject.galleryImages.length)}
                    className="p-2.5 rounded-full bg-brand-charcoal/70 hover:bg-brand-charcoal border border-brand-white/10 text-brand-white/80 hover:text-brand-white transition-all cursor-pointer"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    id="carousel-next"
                    onClick={(e) => handleNextImage(e, activeProject.galleryImages.length)}
                    className="p-2.5 rounded-full bg-brand-charcoal/70 hover:bg-brand-charcoal border border-brand-white/10 text-brand-white/80 hover:text-brand-white transition-all cursor-pointer"
                    aria-label="Next image"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>

                {/* Carousel indicators */}
                <div className="absolute top-6 left-6 z-20 flex items-center gap-1.5">
                  {activeProject.galleryImages.map((_, i) => (
                    <span
                      key={i}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        activeImageIndex === i ? 'w-6 bg-brand-orange' : 'w-1.5 bg-brand-white/40'
                      }`}
                    />
                  ))}
                </div>

                {/* Inner Title overlay */}
                <div className="absolute bottom-8 left-8 right-8 z-20">
                  <span className="px-3.5 py-1 bg-brand-orange border border-brand-orange-light/20 text-brand-white text-[9px] tracking-widest uppercase font-bold rounded-full">
                    {activeProject.category} Case Study
                  </span>
                  <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-white tracking-wide mt-3 mb-2 leading-tight">
                    {activeProject.title}
                  </h2>
                  <p className="font-sans text-xs text-brand-white/80 tracking-wide flex items-center gap-2">
                    <MapPin size={12} className="text-brand-orange-light" /> {activeProject.location}
                  </p>
                </div>
              </div>

              {/* Event Metadata Shelf */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-brand-charcoal border-b border-brand-white/5 text-center">
                <div className="flex flex-col items-center border-r border-brand-white/5 last:border-0 py-1">
                  <span className="font-sans text-[10px] tracking-widest text-brand-white/40 uppercase">Client</span>
                  <span className="font-display font-bold text-xs text-brand-white mt-1">{activeProject.client}</span>
                </div>
                <div className="flex flex-col items-center border-r border-brand-white/5 last:border-0 py-1">
                  <span className="font-sans text-[10px] tracking-widest text-brand-white/40 uppercase">Date</span>
                  <span className="font-display font-bold text-xs text-brand-white mt-1 flex items-center gap-1">
                    <Calendar size={12} className="text-brand-orange-light" /> {activeProject.year}
                  </span>
                </div>
                <div className="flex flex-col items-center border-r border-brand-white/5 last:border-0 py-1">
                  <span className="font-sans text-[10px] tracking-widest text-brand-white/40 uppercase">Location</span>
                  <span className="font-display font-bold text-xs text-brand-white mt-1">{activeProject.location.split(',')[0]}</span>
                </div>
                <div className="flex flex-col items-center last:border-0 py-1">
                  <span className="font-sans text-[10px] tracking-widest text-brand-white/40 uppercase">Category</span>
                  <span className="font-display font-bold text-xs text-brand-white mt-1">{activeProject.category} Management</span>
                </div>
              </div>

              {/* Detailed Four-Stage Case Study Content */}
              <div className="p-8 sm:p-10 space-y-8 max-h-[50vh] overflow-y-auto">
                {/* 1. The Challenge */}
                <div className="flex flex-col md:flex-row gap-4 md:gap-8 border-b border-brand-white/5 pb-6">
                  <div className="md:w-3/12 shrink-0">
                    <h3 className="font-display font-extrabold text-xs uppercase tracking-widest text-brand-orange-light flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-orange trunk-curve-left" />
                      01 / The Challenge
                    </h3>
                  </div>
                  <div className="md:w-9/12">
                    <p className="font-sans text-xs text-brand-white/85 leading-relaxed">
                      {activeProject.challenge}
                    </p>
                  </div>
                </div>

                {/* 2. Our Approach */}
                <div className="flex flex-col md:flex-row gap-4 md:gap-8 border-b border-brand-white/5 pb-6">
                  <div className="md:w-3/12 shrink-0">
                    <h3 className="font-display font-extrabold text-xs uppercase tracking-widest text-brand-orange-light flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-orange trunk-curve-left" />
                      02 / Our Approach
                    </h3>
                  </div>
                  <div className="md:w-9/12">
                    <p className="font-sans text-xs text-brand-white/85 leading-relaxed">
                      {activeProject.approach}
                    </p>
                  </div>
                </div>

                {/* 3. The Execution */}
                <div className="flex flex-col md:flex-row gap-4 md:gap-8 border-b border-brand-white/5 pb-6">
                  <div className="md:w-3/12 shrink-0">
                    <h3 className="font-display font-extrabold text-xs uppercase tracking-widest text-brand-orange-light flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-orange trunk-curve-left" />
                      03 / The Execution
                    </h3>
                  </div>
                  <div className="md:w-9/12">
                    <p className="font-sans text-xs text-brand-white/85 leading-relaxed">
                      {activeProject.execution}
                    </p>
                  </div>
                </div>

                {/* 4. The Result */}
                <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                  <div className="md:w-3/12 shrink-0">
                    <h3 className="font-display font-extrabold text-xs uppercase tracking-widest text-brand-orange-light flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-orange trunk-curve-left" />
                      04 / The Result
                    </h3>
                  </div>
                  <div className="md:w-9/12">
                    <p className="font-sans text-xs text-brand-white/85 leading-relaxed font-medium text-brand-white">
                      {activeProject.result}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action bar */}
              <div className="p-6 bg-brand-charcoal border-t border-brand-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="font-sans text-xs text-brand-white/50 text-center sm:text-left">
                  Inspired by this case study? Let’s curate your custom experience.
                </p>
                <div className="flex gap-3">
                  <button
                    id="case-study-close-btn"
                    onClick={() => setActiveProject(null)}
                    className="px-5 py-2.5 bg-transparent border border-brand-white/15 hover:border-brand-white text-brand-white font-sans text-xs font-semibold uppercase tracking-widest rounded-xl transition-all cursor-pointer"
                  >
                    Close
                  </button>
                  <button
                    id="case-study-planning-btn"
                    onClick={() => {
                      const cat = activeProject.category;
                      setActiveProject(null);
                      onInquire(cat);
                    }}
                    className="px-5 py-2.5 bg-brand-orange hover:bg-brand-orange-dark text-brand-white font-sans text-xs font-semibold uppercase tracking-widest rounded-xl transition-all cursor-pointer"
                  >
                    Start Planning
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
