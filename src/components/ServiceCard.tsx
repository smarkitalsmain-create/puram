import React, { useState } from 'react';
import { Service } from '../types';
import * as Icons from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ServiceCardProps {
  key?: string;
  service: Service;
  onInquire: (serviceId: string) => void;
}

export default function ServiceCard({ service, onInquire }: ServiceCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Dynamic Icon mapping
  const IconComponent = (Icons as any)[service.iconName] || Icons.HelpCircle;

  return (
    <>
      {/* Immersive Grid Card */}
      <motion.div
        id={`service-card-${service.id}`}
        layoutId={`service-container-${service.id}`}
        onClick={() => setIsOpen(true)}
        className="group relative h-[360px] rounded-2xl overflow-hidden cursor-pointer bg-brand-charcoal-light border border-brand-white/5 transition-all duration-500 hover:border-brand-orange-light/30"
        whileHover={{ y: -6 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        {/* Cinematic Background Image with dark overlay */}
        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/60 to-transparent" />
        </div>

        {/* Content Container */}
        <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
          {/* Accent Line resembling custom elephant trunk curve */}
          <div className="w-12 h-1 bg-brand-orange mb-4 rounded-full transition-all duration-300 group-hover:w-20" />
          
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-brand-orange/10 border border-brand-orange/30 rounded-lg text-brand-orange-light">
              <IconComponent size={20} />
            </div>
            <h3 className="font-display font-bold text-xl text-brand-white tracking-wide">
              {service.title}
            </h3>
          </div>

          <p className="font-sans text-xs text-brand-white/70 leading-relaxed line-clamp-3">
            {service.shortDescription}
          </p>

          <div className="mt-4 flex items-center gap-1.5 text-brand-orange-light text-[11px] font-semibold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Explore Experience <Icons.ChevronRight size={12} className="mt-[1px]" />
          </div>
        </div>

        {/* Subtle hover background highlight border */}
        <div className="absolute inset-x-0 bottom-0 h-[3px] bg-brand-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </motion.div>

      {/* Deep Immersive Service Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-brand-charcoal/90 backdrop-blur-md">
            {/* Click outside to close */}
            <div className="absolute inset-0" onClick={() => setIsOpen(false)} />

            {/* Modal Body */}
            <motion.div
              id={`service-modal-${service.id}`}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-full max-w-4xl bg-brand-charcoal-light border border-brand-white/10 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col md:flex-row"
            >
              {/* Close Button */}
              <button
                id={`close-modal-${service.id}`}
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-brand-charcoal/80 border border-brand-white/10 text-brand-white/80 hover:text-brand-white hover:bg-brand-charcoal hover:scale-105 transition-all duration-300 cursor-pointer"
                aria-label="Close"
              >
                <Icons.X size={18} />
              </button>

              {/* Side Imagery Panel */}
              <div className="w-full md:w-5/12 relative h-48 md:h-auto min-h-[220px]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-brand-charcoal-light via-brand-charcoal-light/40 to-transparent" />
                <div className="absolute bottom-6 left-6 z-10">
                  <span className="px-3 py-1 bg-brand-orange/20 border border-brand-orange-light/30 text-brand-white text-[10px] font-bold tracking-widest uppercase rounded-full">
                    Puram Signature
                  </span>
                </div>
              </div>

              {/* Detail Content Panel */}
              <div className="w-full md:w-7/12 p-8 md:p-10 flex flex-col justify-between max-h-[85vh] overflow-y-auto">
                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="p-3 bg-brand-orange/15 border border-brand-orange/40 rounded-xl text-brand-orange-light">
                      <IconComponent size={24} />
                    </div>
                    <div>
                      <h2 className="font-display font-extrabold text-2xl md:text-3xl text-brand-white tracking-wide leading-tight">
                        {service.title}
                      </h2>
                      <p className="font-sans text-[10px] tracking-widest text-brand-orange-light uppercase font-semibold mt-0.5">
                        Creative Event Excellence
                      </p>
                    </div>
                  </div>

                  {/* Curving separating divider inspired by elephant curves */}
                  <div className="w-full h-px bg-brand-white/10 my-4 relative">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-0.5 bg-brand-orange trunk-curve-right" />
                  </div>

                  <p className="font-sans text-sm text-brand-white/80 leading-relaxed mb-6">
                    {service.fullDescription}
                  </p>

                  <h4 className="font-display font-bold text-xs uppercase tracking-wider text-brand-white mb-3.5">
                    What We Deliver
                  </h4>
                  
                  <ul className="space-y-3 mb-8">
                    {service.details.map((detail, index) => (
                      <li key={index} className="flex items-start gap-2.5 text-xs text-brand-white/70">
                        <Icons.CheckCircle2 size={14} className="text-brand-orange-light mt-0.5 shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Direct inquiry path */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-brand-white/5">
                  <button
                    id={`inquire-btn-${service.id}`}
                    onClick={() => {
                      setIsOpen(false);
                      onInquire(service.id);
                    }}
                    className="flex-1 flex items-center justify-center gap-2 py-3 bg-brand-orange hover:bg-brand-orange-dark text-brand-white font-sans text-xs font-semibold uppercase tracking-widest rounded-xl transition-all duration-300 shadow-lg shadow-brand-orange/10 cursor-pointer"
                  >
                    Inquire About This
                    <Icons.ArrowRight size={13} />
                  </button>
                  <button
                    id={`back-btn-${service.id}`}
                    onClick={() => setIsOpen(false)}
                    className="px-6 py-3 bg-transparent border border-brand-white/15 hover:border-brand-white text-brand-white/80 hover:text-brand-white font-sans text-xs font-semibold uppercase tracking-widest rounded-xl transition-all duration-300 cursor-pointer"
                  >
                    Back to Services
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
