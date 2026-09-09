import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ServiceCard from './components/ServiceCard';
import PortfolioGrid from './components/PortfolioGrid';
import ConsultationForm from './components/ConsultationForm';
import EventModeler from './components/EventModeler';
import { SERVICES, PROJECTS, CLIENT_STORIES, BLOG_POSTS, TIMELINE_STEPS, LEADERSHIP } from './data';
import { BlogPost, ClientStory, Service } from './types';
import { motion, AnimatePresence } from 'motion/react';
import {
  Building2, Heart, Sparkles, Cpu, Users, ArrowRight, ArrowUpRight,
  Phone, Mail, Instagram, MessageSquare, ShieldAlert, Check,
  ChevronRight, CalendarRange, Info, BookOpen, X
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [preselectedService, setPreselectedService] = useState('');
  const [preselectedDescription, setPreselectedDescription] = useState('');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  
  // Newsletter State
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  // Legal Modal State
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  // Stats Counters State (Simulation for animated load)
  const [stats, setStats] = useState({ events: 100, brands: 30, cities: 5, satisfaction: 90 });

  useEffect(() => {
    if (activeTab === 'home') {
      const timer = setTimeout(() => {
        setStats({ events: 500, brands: 120, cities: 25, satisfaction: 98 });
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [activeTab]);

  // Track cursor position for glow effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleServiceInquiry = (serviceId: string) => {
    const matched = SERVICES.find(s => s.id === serviceId);
    if (matched) {
      setPreselectedService(matched.title);
    }
    setPreselectedDescription('');
    setActiveTab('consultation');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExportBlueprint = (blueprintText: string) => {
    if (blueprintText.includes('Corporate')) {
      setPreselectedService('Corporate Gala / summit');
    } else if (blueprintText.includes('Wedding')) {
      setPreselectedService('Luxury Wedding');
    } else if (blueprintText.includes('Launch')) {
      setPreselectedService('Product Launch');
    } else if (blueprintText.includes('Gala')) {
      setPreselectedService('Private Celebration');
    } else {
      setPreselectedService('Brand Activation');
    }
    setPreselectedDescription(blueprintText);
    setActiveTab('consultation');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryInquiry = (category: string) => {
    if (category === 'Corporate') setPreselectedService('Corporate Gala / summit');
    else if (category === 'Wedding') setPreselectedService('Luxury Wedding');
    else if (category === 'Brand' || category === 'Luxury') setPreselectedService('Product Launch');
    else setPreselectedService('Private Celebration');
    
    setPreselectedDescription('');
    setActiveTab('consultation');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-brand-charcoal text-brand-white relative selection:bg-brand-orange/40 selection:text-white">
      {/* Dynamic Cursor Light Glow */}
      <div 
        className="hidden md:block pointer-events-none fixed inset-0 z-30 opacity-15 transition-opacity duration-500"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(234, 88, 12, 0.45), transparent 80%)`
        }}
      />

      {/* Abstract ambient moving lights */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-brand-orange-light/5 blur-[120px] pointer-events-none animate-pulse duration-[8000ms]" />
      <div className="absolute top-2/3 right-1/10 w-[450px] h-[450px] rounded-full bg-brand-gold/5 blur-[150px] pointer-events-none animate-pulse duration-[12000ms]" />

      {/* Navigation Header */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Master View Router Router */}
      <main className="pt-24">
        <AnimatePresence mode="wait">
          
          {/* 1. HOME VIEW */}
          {activeTab === 'home' && (
            <motion.div
              key="home-tab"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-24 pb-20"
            >
              {/* Dynamic Cinematic Hero */}
              <section className="relative min-h-[90vh] flex items-center justify-center px-6 text-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#FFF4E6_0%,_#FFF4E6_55%,_#F8E5CD_100%)]" />

                {/* Visual texture layer */}
                <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(#24130A_1px,_transparent_1px)] [background-size:16px_16px] pointer-events-none" />

                <div className="max-w-4xl mx-auto space-y-10 relative z-10">
                  {/* Subtle curved line top frame */}
                  <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center gap-1"
                  >
                    <img
                      src="/logo/puram-full-logo.png"
                      alt="Puram Events"
                      className="w-[270px] sm:w-[355px] h-auto object-contain mb-4"
                    />
                    <span className="font-sans text-[10px] tracking-[0.3em] text-brand-orange-dark uppercase font-black bg-brand-orange/10 px-4 py-1.5 rounded-full border border-brand-orange/25 mt-2">
                      Puram Signature Experience
                    </span>
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="font-display font-black text-4xl sm:text-6xl md:text-7xl text-dark-heading leading-[1.05] tracking-tight uppercase"
                  >
                    Every Event Has <br className="hidden sm:inline"/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange-dark via-brand-orange to-brand-orange-light">A Story.</span> <br />
                    We Make It Extraordinary.
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="font-sans text-xs sm:text-sm text-dark-body max-w-2xl mx-auto leading-relaxed"
                  >
                    From intimate milestone celebrations to grand, high-profile corporate productions, Puram Events transforms ideas into unforgettable experiences through thoughtful design, flawless engineering, and complete client peace of mind.
                  </motion.p>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
                  >
                    <button
                      id="hero-primary-cta"
                      onClick={() => {
                        setPreselectedService('');
                        setActiveTab('consultation');
                      }}
                      className="w-full sm:w-auto px-8 py-4 bg-brand-orange hover:bg-brand-orange-dark text-brand-white font-display text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 shadow-xl shadow-brand-orange/20 cursor-pointer"
                    >
                      Start Planning
                    </button>
                    <button
                      id="hero-secondary-cta"
                      onClick={() => setActiveTab('portfolio')}
                      className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-dark-heading/5 border border-dark-heading/20 hover:border-dark-heading text-dark-heading font-display text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 cursor-pointer"
                    >
                      View Our Work
                    </button>
                  </motion.div>
                </div>

                {/* Decorative Bottom subtle curve representation */}
                <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-brand-charcoal to-transparent pointer-events-none" />
              </section>

              {/* Animated Trust Indicators (Counters Section) */}
              <section className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-10 bg-brand-charcoal-light/60 rounded-3xl border border-brand-white/5 text-center relative overflow-hidden backdrop-blur-sm">
                  {/* Background curves subtle lines */}
                  <div className="absolute top-0 left-0 w-full h-full trunk-curve-bottom opacity-5 border-b border-brand-orange pointer-events-none" />
                  
                  <div className="space-y-1 relative z-10">
                    <h3 className="font-display font-black text-3xl sm:text-4xl text-brand-orange-light">
                      {stats.events}+
                    </h3>
                    <p className="font-sans text-[10px] tracking-widest text-brand-white/50 uppercase font-semibold">
                      Events Curated
                    </p>
                  </div>
                  <div className="space-y-1 relative z-10">
                    <h3 className="font-display font-black text-3xl sm:text-4xl text-brand-white">
                      {stats.brands}+
                    </h3>
                    <p className="font-sans text-[10px] tracking-widest text-brand-white/50 uppercase font-semibold">
                      Brands Partnered
                    </p>
                  </div>
                  <div className="space-y-1 relative z-10">
                    <h3 className="font-display font-black text-3xl sm:text-4xl text-brand-orange-light">
                      {stats.cities}+
                    </h3>
                    <p className="font-sans text-[10px] tracking-widest text-brand-white/50 uppercase font-semibold">
                      Cities Conquered
                    </p>
                  </div>
                  <div className="space-y-1 relative z-10">
                    <h3 className="font-display font-black text-3xl sm:text-4xl text-brand-white">
                      {stats.satisfaction}%
                    </h3>
                    <p className="font-sans text-[10px] tracking-widest text-brand-white/50 uppercase font-semibold">
                      Client Satisfaction
                    </p>
                  </div>
                </div>
              </section>

              {/* Philosophy Summary Section */}
              <section className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row gap-10 items-center">
                <div className="w-full md:w-5/12 space-y-4">
                  <span className="font-display font-bold text-xs uppercase tracking-widest text-brand-orange-light">
                    Our Philosophy
                  </span>
                  <h2 className="font-display font-black text-3xl md:text-4xl text-brand-white uppercase leading-tight">
                    Every detail shapes a memory.
                  </h2>
                  {/* Curved border left */}
                  <div className="h-12 w-1 border-l-2 border-brand-orange trunk-curve-left" />
                </div>
                <div className="w-full md:w-7/12 space-y-4">
                  <p className="font-sans text-xs text-brand-white/70 leading-relaxed">
                    Puram Events believes that planning an event should never become a source of stress for our hosts. Every event begins as an emotion—an ambition, a promise, or a milestone—and our role is to turn that emotion into architectural spaces, flawless timelines, and unforgettable moments.
                  </p>
                  <button
                    id="philosophy-explore-btn"
                    onClick={() => setActiveTab('about')}
                    className="flex items-center gap-1.5 text-brand-orange-light text-[11px] font-bold uppercase tracking-widest hover:text-brand-white transition-colors cursor-pointer"
                  >
                    Read Our Core Tenets <ArrowRight size={13} />
                  </button>
                </div>
              </section>

              {/* USP Cards Section */}
              <section className="max-w-7xl mx-auto px-6 py-4 space-y-12">
                <div className="text-center space-y-3">
                  <span className="font-sans text-[10px] tracking-widest text-brand-white/40 uppercase">
                    Our Pillars
                  </span>
                  <h2 className="font-display font-black text-2xl sm:text-3xl text-brand-white uppercase">
                    The Puram Promise
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Card 1: Big Ideas */}
                  <div className="group p-8 rounded-3xl bg-brand-charcoal-light border border-brand-white/5 hover:border-brand-orange-light/20 transition-all duration-300 flex flex-col justify-between h-[340px] relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-brand-orange/5 rounded-full blur-2xl pointer-events-none group-hover:bg-brand-orange/10" />
                    <div className="space-y-4">
                      <div className="p-3 bg-brand-orange/10 text-brand-orange-light rounded-xl w-fit">
                        <Sparkles size={20} />
                      </div>
                      <h3 className="font-display font-black text-xl text-brand-white uppercase">
                        Big Ideas
                      </h3>
                      <p className="font-sans text-xs text-brand-white/60 leading-relaxed">
                        We reject stock layouts and cookie-cutter concepts. We invent bespoke themes, interactive staging blueprints, and unexpected moments that define your brand and match your personality.
                      </p>
                    </div>
                    <span className="font-display font-black text-6xl text-brand-white/5 select-none self-end">
                      01
                    </span>
                  </div>

                  {/* Card 2: Flawless Execution */}
                  <div className="group p-8 rounded-3xl bg-brand-charcoal-light border border-brand-white/5 hover:border-brand-orange-light/20 transition-all duration-300 flex flex-col justify-between h-[340px] relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-brand-orange/5 rounded-full blur-2xl pointer-events-none group-hover:bg-brand-orange/10" />
                    <div className="space-y-4">
                      <div className="p-3 bg-brand-orange/10 text-brand-orange-light rounded-xl w-fit">
                        <Cpu size={20} />
                      </div>
                      <h3 className="font-display font-black text-xl text-brand-white uppercase">
                        Flawless Execution
                      </h3>
                      <p className="font-sans text-xs text-brand-white/60 leading-relaxed">
                        Redundant power, sound checks hours in advance, vetted premium partners, and mil-spec schedule trackers. We manage the technical complexity so the show proceeds with zero latency.
                      </p>
                    </div>
                    <span className="font-display font-black text-6xl text-brand-white/5 select-none self-end">
                      02
                    </span>
                  </div>

                  {/* Card 3: Zero Stress */}
                  <div className="group p-8 rounded-3xl bg-brand-charcoal-light border border-brand-white/5 hover:border-brand-orange-light/20 transition-all duration-300 flex flex-col justify-between h-[340px] relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-brand-orange/5 rounded-full blur-2xl pointer-events-none group-hover:bg-brand-orange/10" />
                    <div className="space-y-4">
                      <div className="p-3 bg-brand-orange/10 text-brand-orange-light rounded-xl w-fit">
                        <Users size={20} />
                      </div>
                      <h3 className="font-display font-black text-xl text-brand-white uppercase">
                        Zero Stress
                      </h3>
                      <p className="font-sans text-xs text-brand-white/60 leading-relaxed">
                        Our clients are attendees at their own events. We handle every vendor check, transport route, menu tweak, and seating issue quietly behind the scenes. You simply celebrate.
                      </p>
                    </div>
                    <span className="font-display font-black text-6xl text-brand-white/5 select-none self-end">
                      03
                    </span>
                  </div>
                </div>
              </section>

              {/* Startup Event Modeler Platform Widget */}
              <section className="max-w-7xl mx-auto px-6 py-4">
                <EventModeler onExportToConsultation={handleExportBlueprint} />
              </section>

              {/* Services teaser */}
              <section className="max-w-7xl mx-auto px-6 py-6 space-y-12">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                  <div className="space-y-3">
                    <span className="font-display font-bold text-xs uppercase tracking-widest text-brand-orange-light">
                      Experience Portfolio
                    </span>
                    <h2 className="font-display font-black text-2xl sm:text-3xl text-brand-white uppercase">
                      Curated Disciplines
                    </h2>
                  </div>
                  <button
                    id="teaser-view-all-services"
                    onClick={() => setActiveTab('services')}
                    className="flex items-center gap-1.5 px-5 py-2.5 bg-brand-white/5 hover:bg-brand-white/10 border border-brand-white/10 text-brand-white font-sans text-xs uppercase tracking-widest rounded-full transition-all cursor-pointer"
                  >
                    View All Services <ChevronRight size={13} />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {SERVICES.slice(0, 3).map((service) => (
                    <ServiceCard
                      key={service.id}
                      service={service}
                      onInquire={handleServiceInquiry}
                    />
                  ))}
                </div>
              </section>

              {/* The Timeline Journey (Why Puram) */}
              <section className="max-w-7xl mx-auto px-6 py-8 space-y-12">
                <div className="text-center space-y-3 max-w-xl mx-auto">
                  <span className="font-sans text-[10px] tracking-widest text-brand-white/40 uppercase">
                    Our Method
                  </span>
                  <h2 className="font-display font-black text-2xl sm:text-3xl text-brand-white uppercase">
                    The Architecture of Planning
                  </h2>
                  <p className="font-sans text-xs text-brand-white/60 leading-relaxed">
                    How we transform an abstract aspiration into a flawless, historic memory. A timeline of complete dedication.
                  </p>
                </div>

                {/* Horizontal / Vertical responsive timeline */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {TIMELINE_STEPS.map((step, index) => (
                    <div
                      key={index}
                      className="p-6 rounded-2xl bg-brand-charcoal-light border border-brand-white/5 relative flex flex-col justify-between min-h-[220px]"
                    >
                      {/* Connection curve lines simulated */}
                      {index < TIMELINE_STEPS.length - 1 && (
                        <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-[1.5px] bg-brand-orange/30 z-10" />
                      )}
                      
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="px-2.5 py-1 bg-brand-orange/10 border border-brand-orange/20 text-brand-orange-light text-[9px] font-bold uppercase rounded-md">
                            Stage 0{index + 1}
                          </span>
                          <span className="font-display font-black text-[10px] text-brand-white/30 uppercase tracking-widest">
                            {step.description}
                          </span>
                        </div>
                        <h3 className="font-display font-black text-base text-brand-white mt-4 uppercase">
                          {step.label}
                        </h3>
                        <p className="font-sans text-[11px] text-brand-white/60 leading-relaxed mt-2 line-clamp-4">
                          {step.detail}
                        </p>
                      </div>

                      {/* Small curved line in corner */}
                      <div className="w-6 h-6 border-b border-r border-brand-orange/10 absolute bottom-3 right-3 trunk-curve-bottom trunk-curve-right" />
                    </div>
                  ))}
                </div>
              </section>

              {/* Client Experience Carousel Section */}
              <section className="max-w-7xl mx-auto px-6 py-6 bg-brand-charcoal-light/30 rounded-3xl border border-brand-white/5 p-8 md:p-12 space-y-10 relative overflow-hidden">
                <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
                  <div className="space-y-3">
                    <span className="font-display font-bold text-xs uppercase tracking-widest text-brand-orange-light">
                      Client Voices
                    </span>
                    <h2 className="font-display font-black text-2xl sm:text-3xl text-brand-white uppercase">
                      Immersive Journeys
                    </h2>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {CLIENT_STORIES.map((story) => (
                    <div
                      key={story.id}
                      className="p-6 sm:p-8 bg-brand-charcoal rounded-2xl border border-brand-white/5 space-y-6 flex flex-col justify-between"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 shrink-0 rounded-full bg-brand-orange/10 border border-brand-orange/30 flex items-center justify-center font-display font-black text-brand-orange-light text-sm">
                            {story.clientName.charAt(0)}
                          </div>
                          <div>
                            <h4 className="font-display font-bold text-xs text-brand-white">
                              {story.clientName}
                            </h4>
                            <p className="font-sans text-[10px] text-brand-white/50">
                              {story.clientRole} • <span className="text-brand-orange-light">{story.company}</span>
                            </p>
                          </div>
                        </div>

                        <p className="font-sans italic text-xs text-brand-white/80 leading-relaxed">
                          "{story.quote}"
                        </p>

                        <div className="w-full h-px bg-brand-white/5" />

                        {/* Interactive Challenge/Solution/Outcome split */}
                        <div className="space-y-3.5 text-[11px] font-sans">
                          <div>
                            <strong className="text-brand-orange-light uppercase tracking-wider text-[10px] block">The Challenge</strong>
                            <p className="text-brand-white/70 mt-0.5">{story.challenge}</p>
                          </div>
                          <div>
                            <strong className="text-brand-white uppercase tracking-wider text-[10px] block">The Solution</strong>
                            <p className="text-brand-white/70 mt-0.5">{story.solution}</p>
                          </div>
                          <div>
                            <strong className="text-brand-white font-semibold uppercase tracking-wider text-[10px] block">The Outcome</strong>
                            <p className="text-brand-white/75 mt-0.5">{story.outcome}</p>
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 flex justify-end">
                        <span className="px-3 py-1 bg-brand-white/5 text-[9px] tracking-widest text-brand-white/40 uppercase rounded-full">
                          {story.eventName}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Master CTA Banner */}
              <section className="max-w-7xl mx-auto px-6">
                <div className="relative p-10 md:p-16 rounded-3xl overflow-hidden bg-brand-charcoal-light border border-brand-white/10 text-center space-y-8">
                  {/* Decorative curved lighting layout */}
                  <div className="absolute inset-0 bg-radial-gradient from-brand-orange/15 via-transparent to-transparent opacity-60 pointer-events-none" />
                  
                  <div className="max-w-xl mx-auto space-y-4 relative z-10">
                    <span className="font-sans text-[10px] tracking-widest text-brand-orange-light uppercase font-black">
                      Commission Your Event
                    </span>
                    <h2 className="font-display font-black text-3xl sm:text-5xl text-brand-white uppercase leading-tight">
                      Let’s Create Something Extraordinary.
                    </h2>
                    <p className="font-sans text-xs text-brand-white/60 leading-relaxed">
                      Secure your place in our creative pipeline. Let us outline a custom mood board and logistical blueprint tailored perfectly to your milestone.
                    </p>
                  </div>

                  <div className="relative z-10">
                    <button
                      id="footer-action-consult"
                      onClick={() => {
                        setPreselectedService('');
                        setActiveTab('consultation');
                      }}
                      className="px-8 py-4 bg-brand-orange hover:bg-brand-orange-dark text-brand-white font-display text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 shadow-xl shadow-brand-orange/20 cursor-pointer"
                    >
                      Book Your Consultation
                    </button>
                  </div>
                </div>
              </section>

            </motion.div>
          )}

          {/* 2. ABOUT (PHILOSOPHY) VIEW */}
          {activeTab === 'about' && (
            <motion.div
              key="about-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="max-w-4xl mx-auto px-6 py-16 space-y-16 pb-24"
            >
              {/* Editorial Header */}
              <div className="space-y-4 text-center">
                <span className="font-display font-bold text-xs uppercase tracking-widest text-brand-orange-light">
                  Our Creed
                </span>
                <h1 className="font-display font-black text-4xl sm:text-5xl text-brand-white uppercase tracking-tight">
                  The Philosophy of Experiences
                </h1>
                <p className="font-sans text-xs text-brand-white/50 max-w-lg mx-auto">
                  Why we design, how we execute, and why we guarantee absolute peace of mind.
                </p>
              </div>

              <div className="w-full h-px bg-brand-white/5" />

              {/* Majestic Curve Frame block */}
              <div className="max-w-2xl mx-auto text-center space-y-6">
                <h2 className="font-display font-black text-2xl text-brand-white uppercase">
                  Every event begins with an emotion.
                </h2>
                <p className="font-sans text-xs text-brand-white/70 leading-relaxed">
                  At Puram Events, we do not view ourselves merely as coordinators. We are designers, architects, and storytellers. We believe that a gathering is a physical manifestation of a brand's pride, a family's love, or an industry's path.
                </p>
                <p className="font-sans text-xs text-brand-white/70 leading-relaxed">
                  By structuring your schedule, selecting the correct acoustic balance, drafting beautiful visual concepts, and removing every operational friction, we ensure that you are fully present to witness your vision come to life.
                </p>
              </div>

              {/* Core Values Section (Elephant Symbolism) */}
              <div className="space-y-8 bg-brand-charcoal-light/50 p-8 rounded-3xl border border-brand-white/5 relative">
                <div className="text-center space-y-2">
                  <h3 className="font-display font-black text-xl text-brand-white uppercase">
                    The Pillars of the Crest
                  </h3>
                  <p className="font-sans text-[11px] text-brand-white/50 max-w-md mx-auto">
                    The elephant represents the foundation of our execution framework.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 text-center pt-4">
                  <div className="p-4 bg-brand-charcoal rounded-xl border border-brand-white/5 space-y-2">
                    <span className="font-display font-black text-brand-orange-light text-sm block uppercase tracking-wider">Strength</span>
                    <p className="font-sans text-[10px] text-brand-white/60">The operational muscle to lift colossal productions.</p>
                  </div>
                  <div className="p-4 bg-brand-charcoal rounded-xl border border-brand-white/5 space-y-2">
                    <span className="font-display font-black text-brand-white text-sm block uppercase tracking-wider">Memory</span>
                    <p className="font-sans text-[10px] text-brand-white/60">Crafting experiences that stay etched in minds forever.</p>
                  </div>
                  <div className="p-4 bg-brand-charcoal rounded-xl border border-brand-white/5 space-y-2">
                    <span className="font-display font-black text-brand-orange-light text-sm block uppercase tracking-wider">Good Fortune</span>
                    <p className="font-sans text-[10px] text-brand-white/60">Ushering in positivity and auspicious celebrations.</p>
                  </div>
                  <div className="p-4 bg-brand-charcoal rounded-xl border border-brand-white/5 space-y-2">
                    <span className="font-display font-black text-brand-white text-sm block uppercase tracking-wider">Reliability</span>
                    <p className="font-sans text-[10px] text-brand-white/60">Unshakable, redundant grids protecting your timeline.</p>
                  </div>
                  <div className="p-4 bg-brand-charcoal rounded-xl border border-brand-white/5 space-y-2">
                    <span className="font-display font-black text-brand-orange-light text-sm block uppercase tracking-wider">Grandeur</span>
                    <p className="font-sans text-[10px] text-brand-white/60">Architectural scales and stunning spatial proportions.</p>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="text-center pt-4">
                <button
                  id="about-cta-btn"
                  onClick={() => setActiveTab('services')}
                  className="px-6 py-3 bg-brand-orange hover:bg-brand-orange-dark text-brand-white font-sans text-xs font-semibold uppercase tracking-widest rounded-xl transition-colors cursor-pointer"
                >
                  Explore Our Services
                </button>
              </div>
            </motion.div>
          )}

          {/* 2b. LEADERSHIP VIEW */}
          {activeTab === 'team' && (
            <motion.div
              key="team-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="max-w-5xl mx-auto px-6 py-16 space-y-20 pb-24"
            >
              {/* Editorial Header */}
              <div className="space-y-4 text-center">
                <span className="font-display font-bold text-xs uppercase tracking-widest text-brand-orange-light">
                  Who We Are
                </span>
                <h1 className="font-display font-black text-4xl sm:text-5xl text-brand-white uppercase tracking-tight">
                  Leadership
                </h1>
                <p className="font-sans text-xs text-brand-white/50 max-w-lg mx-auto">
                  The two founders behind every Puram experience — one shaping how it feels, the other how it looks and moves.
                </p>
              </div>

              <div className="w-full h-px bg-brand-white/5" />

              {/* Founder Profiles */}
              <div className="space-y-16">
                {LEADERSHIP.map((member, index) => (
                  <div
                    key={member.id}
                    id={`team-member-${member.id}`}
                    className={`grid grid-cols-1 md:grid-cols-5 gap-10 items-start ${
                      index % 2 === 1 ? 'md:[direction:rtl]' : ''
                    }`}
                  >
                    <div className="md:col-span-2 [direction:ltr]">
                      <div className="relative rounded-2xl overflow-hidden aspect-[3/4] border border-brand-white/10">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/70 via-transparent to-transparent" />
                      </div>
                    </div>
                    <div className="md:col-span-3 [direction:ltr] space-y-4 pt-2">
                      <div>
                        <h2 className="font-display font-black text-2xl text-brand-white uppercase tracking-tight">
                          {member.name}
                        </h2>
                        <span className="font-sans text-[11px] tracking-widest text-brand-orange-light uppercase font-bold">
                          {member.role}
                        </span>
                      </div>
                      {member.bio.map((paragraph, i) => (
                        <p key={i} className="font-sans text-xs text-brand-white/70 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action */}
              <div className="text-center pt-4">
                <button
                  id="team-cta-btn"
                  onClick={() => setActiveTab('consultation')}
                  className="px-6 py-3 bg-brand-orange hover:bg-brand-orange-dark text-brand-white font-sans text-xs font-semibold uppercase tracking-widest rounded-xl transition-colors cursor-pointer"
                >
                  Start Planning With Us
                </button>
              </div>
            </motion.div>
          )}

          {/* 3. SERVICES VIEW */}
          {activeTab === 'services' && (
            <motion.div
              key="services-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="max-w-7xl mx-auto px-6 py-16 space-y-16 pb-24"
            >
              <div className="space-y-4 text-center max-w-xl mx-auto">
                <span className="font-display font-bold text-xs uppercase tracking-widest text-brand-orange-light">
                  Our Specializations
                </span>
                <h1 className="font-display font-black text-4xl text-brand-white uppercase tracking-tight">
                  Crafting Masterpiece Gatherings
                </h1>
                <p className="font-sans text-xs text-brand-white/50">
                  Click on any experience card below to expand our comprehensive deliverables, technical specifications, and process designs.
                </p>
              </div>

              {/* Grid showing all services */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {SERVICES.map((service) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    onInquire={handleServiceInquiry}
                  />
                ))}
              </div>

              {/* Customized event design mention */}
              <div className="p-8 rounded-3xl bg-brand-charcoal-light border border-brand-white/5 text-center max-w-2xl mx-auto space-y-4">
                <h3 className="font-display font-bold text-base text-brand-white uppercase">
                  Need a Bespoke Combination?
                </h3>
                <p className="font-sans text-xs text-brand-white/65 leading-relaxed">
                  Most of our landmark projects involve integrated strategies: coordinating product reveals with live artist concerts, or combining destination weddings with guest hospitality packages. Contact our planners to map a customized operational blueprint.
                </p>
                <button
                  id="custom-services-btn"
                  onClick={() => {
                    setPreselectedService('Bespoke Integrated Production');
                    setActiveTab('consultation');
                  }}
                  className="px-5 py-2.5 bg-transparent border border-brand-orange-light/40 hover:border-brand-orange text-brand-orange-light hover:text-brand-white text-[10px] font-bold uppercase tracking-widest rounded-full transition-all cursor-pointer"
                >
                  Commission Custom Brief
                </button>
              </div>
            </motion.div>
          )}

          {/* 4. PORTFOLIO & GALLERY VIEW */}
          {activeTab === 'portfolio' && (
            <motion.div
              key="portfolio-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="max-w-7xl mx-auto px-6 py-16 space-y-16 pb-24"
            >
              <div className="space-y-4 text-center max-w-xl mx-auto">
                <span className="font-display font-bold text-xs uppercase tracking-widest text-brand-orange-light">
                  Our Work
                </span>
                <h1 className="font-display font-black text-4xl text-brand-white uppercase tracking-tight">
                  Events We've Delivered
                </h1>
                <p className="font-sans text-xs text-brand-white/50">
                  A look at real events we've styled and produced — from theatre festivals to intimate family celebrations.
                </p>
              </div>

              {/* Render Portfolio Masonry Grid */}
              <PortfolioGrid onInquire={handleCategoryInquiry} />
            </motion.div>
          )}

          {/* 5. JOURNAL (BLOG) VIEW */}
          {activeTab === 'blog' && (
            <motion.div
              key="blog-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="max-w-5xl mx-auto px-6 py-16 space-y-16 pb-24"
            >
              <div className="space-y-4 text-center">
                <span className="font-display font-bold text-xs uppercase tracking-widest text-brand-orange-light">
                  The Editorial Journal
                </span>
                <h1 className="font-display font-black text-4xl text-brand-white uppercase tracking-tight">
                  Design & Logistics Journals
                </h1>
                <p className="font-sans text-xs text-brand-white/50 max-w-md mx-auto">
                  A professional look behind the scenes: sharing our event layout formulas, destination wedding coordinates, and technical guidelines.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {BLOG_POSTS.map((post) => (
                  <article
                    key={post.id}
                    id={`blog-post-card-${post.id}`}
                    onClick={() => setSelectedPost(post)}
                    className="p-6 rounded-2xl bg-brand-charcoal-light border border-brand-white/5 hover:border-brand-orange-light/20 transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-6"
                  >
                    <div className="space-y-4">
                      {/* Image Frame */}
                      <div className="h-48 rounded-xl overflow-hidden relative border border-brand-white/5">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover opacity-60"
                        />
                        <span className="absolute top-3 left-3 px-2.5 py-1 bg-brand-charcoal/90 text-brand-white text-[9px] uppercase tracking-widest rounded">
                          {post.category}
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-[10px] text-brand-white/40">
                        <span>{post.date}</span>
                        <span>{post.readTime}</span>
                      </div>

                      <h3 className="font-display font-extrabold text-lg text-brand-white leading-snug hover:text-brand-orange-light transition-colors">
                        {post.title}
                      </h3>

                      <p className="font-sans text-xs text-brand-white/70 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-brand-white/5">
                      <span className="font-sans text-[10px] text-brand-white/40 font-medium">
                        By {post.author}
                      </span>
                      <span className="flex items-center gap-1 text-[10px] tracking-widest uppercase font-bold text-brand-orange-light">
                        Read Entry <ChevronRight size={12} />
                      </span>
                    </div>
                  </article>
                ))}
              </div>

              {/* Full Blog Article Overlay Reader */}
              <AnimatePresence>
                {selectedPost && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-brand-charcoal/95 backdrop-blur-md">
                    <div className="absolute inset-0" onClick={() => setSelectedPost(null)} />
                    
                    <motion.div
                      id="blog-reader-modal"
                      initial={{ opacity: 0, scale: 0.98, y: 15 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.98, y: 15 }}
                      className="relative w-full max-w-3xl bg-brand-charcoal-light border border-brand-white/10 rounded-3xl overflow-hidden shadow-2xl z-10"
                    >
                      {/* Close Header */}
                      <div className="p-6 border-b border-brand-white/5 flex justify-between items-center bg-brand-charcoal">
                        <span className="px-3 py-1 bg-brand-orange/10 border border-brand-orange/20 text-brand-orange-light text-[9px] font-bold uppercase rounded">
                          {selectedPost.category} Journal
                        </span>
                        <button
                          id="close-blog-reader"
                          onClick={() => setSelectedPost(null)}
                          className="p-1.5 rounded-full bg-brand-white/5 hover:bg-brand-white/10 text-brand-white cursor-pointer"
                        >
                          <X size={16} />
                        </button>
                      </div>

                      {/* Content Panel */}
                      <div className="p-8 space-y-6 max-h-[70vh] overflow-y-auto">
                        <div className="space-y-2">
                          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-brand-white tracking-wide">
                            {selectedPost.title}
                          </h2>
                          <div className="flex gap-4 text-[10px] text-brand-white/40">
                            <span>{selectedPost.date}</span>
                            <span>•</span>
                            <span>{selectedPost.readTime}</span>
                            <span>•</span>
                            <span>By {selectedPost.author}</span>
                          </div>
                        </div>

                        <img
                          src={selectedPost.image}
                          alt={selectedPost.title}
                          className="w-full h-56 object-cover rounded-xl border border-brand-white/5"
                        />

                        <p className="font-sans text-xs text-brand-white/85 leading-relaxed whitespace-pre-line">
                          {selectedPost.content}
                        </p>
                      </div>

                      {/* Footer Actions */}
                      <div className="p-5 border-t border-brand-white/5 bg-brand-charcoal flex justify-between items-center">
                        <p className="font-sans text-[10px] text-brand-white/40">
                          Puram Events Journal Division • All rights reserved.
                        </p>
                        <button
                          id="blog-reader-close-btn"
                          onClick={() => setSelectedPost(null)}
                          className="px-4 py-2 bg-brand-orange text-brand-white font-sans text-xs font-semibold uppercase tracking-widest rounded-lg cursor-pointer"
                        >
                          Done Reading
                        </button>
                      </div>
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {/* 6. CONTACT VIEW */}
          {activeTab === 'contact' && (
            <motion.div
              key="contact-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="max-w-7xl mx-auto px-6 py-16 space-y-16 pb-24"
            >
              <div className="space-y-4 text-center max-w-xl mx-auto">
                <span className="font-display font-bold text-xs uppercase tracking-widest text-brand-orange-light">
                  Connect With Us
                </span>
                <h1 className="font-display font-black text-4xl text-brand-white uppercase tracking-tight">
                  Host Your Event
                </h1>
                <p className="font-sans text-xs text-brand-white/50">
                  Whether you prefer a digital chat, direct email, or visiting our creative studio—our committee is here to assist.
                </p>
              </div>

              <div className="max-w-xl mx-auto space-y-8">
                {/* Office Info & Social Connections */}
                <div className="p-6 bg-brand-charcoal-light border border-brand-white/5 rounded-2xl space-y-5">
                  <h3 className="font-display font-black text-base text-brand-white uppercase">
                    Get In Touch
                  </h3>

                  <div className="space-y-4 text-xs font-sans">
                    <div className="flex items-start gap-3 text-brand-white/70">
                      <Mail size={16} className="text-brand-orange-light shrink-0 mt-0.5" />
                      <div>
                        <strong>Email</strong>
                        <p className="mt-1">
                          <a href="mailto:hello@puramevents.com" className="hover:text-brand-orange-light transition-colors">hello@puramevents.com</a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 text-brand-white/70">
                      <Phone size={16} className="text-brand-orange-light shrink-0 mt-0.5" />
                      <div>
                        <strong>Call Us</strong>
                        <p className="mt-1">
                          <a href="tel:+919810288146" className="hover:text-brand-orange-light transition-colors">+91 98102 88146</a>
                          {' · '}
                          <a href="tel:+919910516083" className="hover:text-brand-orange-light transition-colors">+91 99105 16083</a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 text-brand-white/70">
                      <Instagram size={16} className="text-brand-orange-light shrink-0 mt-0.5" />
                      <div>
                        <strong>Instagram</strong>
                        <p className="mt-1">
                          <a href="https://instagram.com/puram_events" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange-light transition-colors">@puram_events</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* WhatsApp, Email, Instagram Rails */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <a
                    href="https://wa.me/919810288146"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl bg-green-500/10 hover:bg-green-500/20 border border-green-500/20 hover:border-green-500/40 text-center space-y-1 block transition-all"
                  >
                    <strong className="text-xs text-green-400 block font-bold uppercase tracking-wider">WhatsApp</strong>
                    <span className="text-[10px] text-brand-white/60">+91 98102 88146</span>
                  </a>

                  <a
                    href="mailto:hello@puramevents.com"
                    className="p-4 rounded-xl bg-brand-orange/10 hover:bg-brand-orange/20 border border-brand-orange/20 hover:border-brand-orange/40 text-center space-y-1 block transition-all"
                  >
                    <strong className="text-xs text-brand-orange-light block font-bold uppercase tracking-wider">Direct Email</strong>
                    <span className="text-[10px] text-brand-white/60">hello@puramevents.com</span>
                  </a>

                  <a
                    href="https://instagram.com/puram_events"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl bg-pink-500/10 hover:bg-pink-500/20 border border-pink-500/20 hover:border-pink-500/40 text-center space-y-1 block transition-all"
                  >
                    <strong className="text-xs text-pink-400 block font-bold uppercase tracking-wider">Instagram</strong>
                    <span className="text-[10px] text-brand-white/60">@puram_events</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}

          {/* 7. BOOK CONSULTATION (SCHEDULER) VIEW */}
          {activeTab === 'consultation' && (
            <motion.div
              key="consultation-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="max-w-7xl mx-auto px-6 py-16 space-y-12 pb-24"
            >
              <div className="space-y-4 text-center max-w-xl mx-auto">
                <span className="font-display font-bold text-xs uppercase tracking-widest text-brand-orange-light">
                  The Blueprint Pipeline
                </span>
                <h1 className="font-display font-black text-4xl text-brand-white uppercase tracking-tight">
                  Book Your Consultation
                </h1>
                <p className="font-sans text-xs text-brand-white/50">
                  Complete our comprehensive digital brief below to commission a customized operational planning proposal.
                </p>
              </div>

              {/* Render Booking Consultation Wizard Form */}
              <ConsultationForm initialEventType={preselectedService} initialDescription={preselectedDescription} />
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* Footer Section */}
      <footer className="bg-brand-charcoal-light border-t border-brand-white/5 pt-16 pb-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-brand-white/5">
          {/* Col 1: Brand details */}
          <div className="space-y-5">
            <div className="flex items-center">
              <img
                src="/logo/puram-full-logo.png"
                alt="Puram Events"
                className="w-[195px] sm:w-[230px] h-auto object-contain"
              />
            </div>
            <div className="font-sans text-[10px] text-brand-white/40 flex items-center gap-1">
              <ShieldAlert size={12} className="text-brand-orange-light" />
              <span>hello@puramevents.com</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="font-display font-extrabold text-xs uppercase tracking-widest text-brand-white">
              Sitemap
            </h4>
            <div className="flex flex-col gap-2 text-xs font-sans text-brand-white/60">
              <button onClick={() => { setActiveTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-brand-orange-light text-left cursor-pointer">Home Canvas</button>
              <button onClick={() => { setActiveTab('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-brand-orange-light text-left cursor-pointer">Our Philosophy</button>
              <button onClick={() => { setActiveTab('team'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-brand-orange-light text-left cursor-pointer">Leadership</button>
              <button onClick={() => { setActiveTab('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-brand-orange-light text-left cursor-pointer">Event Disciplines</button>
              <button onClick={() => { setActiveTab('portfolio'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-brand-orange-light text-left cursor-pointer">Events We've Delivered</button>
              <button onClick={() => { setActiveTab('blog'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-brand-orange-light text-left cursor-pointer">Editorial Journal</button>
              <button onClick={() => { setActiveTab('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-brand-orange-light text-left cursor-pointer">Contact Studio</button>
            </div>
          </div>

          {/* Col 3: Event Genres */}
          <div className="space-y-4">
            <h4 className="font-display font-extrabold text-xs uppercase tracking-widest text-brand-orange-light">
              Disciplines
            </h4>
            <div className="flex flex-col gap-2 text-xs font-sans text-brand-white/60">
              <button onClick={() => { handleServiceInquiry('corporate-events'); }} className="hover:text-brand-white text-left cursor-pointer">Corporate Summits & Galas</button>
              <button onClick={() => { handleServiceInquiry('luxury-weddings'); }} className="hover:text-brand-white text-left cursor-pointer">Luxury & Destination Weddings</button>
              <button onClick={() => { handleServiceInquiry('product-launches'); }} className="hover:text-brand-white text-left cursor-pointer">Product Launch Campaigns</button>
              <button onClick={() => { handleServiceInquiry('technical-production'); }} className="hover:text-brand-white text-left cursor-pointer">Audiovisual Production</button>
              <button onClick={() => { handleServiceInquiry('guest-management'); }} className="hover:text-brand-white text-left cursor-pointer">White-Glove Guest Hospitality</button>
            </div>
          </div>

          {/* Col 4: Newsletter */}
          <div className="space-y-4">
            <h4 className="font-display font-extrabold text-xs uppercase tracking-widest text-brand-white">
              The Journal Newsletter
            </h4>
            <p className="font-sans text-[11px] text-brand-white/50 leading-relaxed">
              Subscribe to receive our seasonal case study reports, spatial design trends, and event planning checklists.
            </p>

            {/* Newsletter input */}
            {!newsletterSubscribed ? (
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="bg-brand-charcoal px-4 py-2 rounded-lg text-xs text-brand-white outline-none border border-brand-white/10 focus:border-brand-orange-light w-full placeholder:text-brand-white/20"
                />
                <button
                  type="submit"
                  id="newsletter-submit-btn"
                  className="px-3 py-2 bg-brand-orange hover:bg-brand-orange-dark text-brand-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                >
                  <ArrowRight size={14} />
                </button>
              </form>
            ) : (
              <div className="p-3 bg-brand-orange/10 border border-brand-orange/20 rounded-lg text-xs text-brand-orange-light text-center flex items-center justify-center gap-1.5 animate-pulse">
                <Check size={14} />
                <span>Added to Registry</span>
              </div>
            )}
          </div>
        </div>

        {/* Legal bar and copyright */}
        <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-sans text-brand-white/40">
          <p>© 2026 Puram Events. Crafting Unforgettable Experiences.</p>
          <div className="flex gap-4">
            <button
              id="privacy-policy-link"
              onClick={() => setLegalModal('privacy')}
              className="hover:text-brand-orange-light cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              id="terms-of-use-link"
              onClick={() => setLegalModal('terms')}
              className="hover:text-brand-orange-light cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </footer>

      {/* Legal terms policy modals */}
      <AnimatePresence>
        {legalModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-brand-charcoal/95 backdrop-blur-md">
            <div className="absolute inset-0" onClick={() => setLegalModal(null)} />
            <motion.div
              id="legal-modal"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="relative w-full max-w-xl bg-brand-charcoal-light border border-brand-white/10 rounded-2xl p-6 sm:p-8 z-10"
            >
              <div className="flex justify-between items-center pb-4 border-b border-brand-white/5">
                <h3 className="font-display font-black text-lg text-brand-white uppercase">
                  {legalModal === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
                </h3>
                <button
                  id="close-legal-modal"
                  onClick={() => setLegalModal(null)}
                  className="p-1 rounded-full bg-brand-white/5 hover:bg-brand-white/10 text-brand-white cursor-pointer"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="py-6 space-y-4 max-h-[50vh] overflow-y-auto font-sans text-xs text-brand-white/70 leading-relaxed">
                {legalModal === 'privacy' ? (
                  <>
                    <p><strong>1. Information Collection:</strong> We collect details specified during consultation planning (such as Client name, business association, dates, budgets, and specific event blueprints) solely to review, verify, and formulate visual proposals.</p>
                    <p><strong>2. Client Confidentiality:</strong> Puram Events maintains absolute, non-disclosure compliance regarding proprietary corporate launch specifications, security grids, guest protocols, and high-profile private celebrations.</p>
                    <p><strong>3. Data Protection:</strong> Saved blueprint history entries logged inside this container use standard HTML5 local storage keys. No public database broadcast occurs without direct corporate consent.</p>
                  </>
                ) : (
                  <>
                    <p><strong>1. Proposal Formulation:</strong> Direct cost outlines, artist arrays, floral mockups, and venue sourcing bookings require formal retainer checkouts after physical consultation reviews.</p>
                    <p><strong>2. Safety Regulations:</strong> Audiovisual production structures, outdoor staging mechanisms, projection mapping installations, and live rigging coordinates undergo rigorous civil audit checks prior to assembly.</p>
                    <p><strong>3. Media Broadcast:</strong> Professional cinematic captures, photography reels, and client testimonial logs require formal visual release sign-offs prior to public catalog publication.</p>
                  </>
                )}
              </div>

              <div className="pt-4 border-t border-brand-white/5 flex justify-end">
                <button
                  id="legal-modal-agree-btn"
                  onClick={() => setLegalModal(null)}
                  className="px-5 py-2.5 bg-brand-orange text-brand-white text-xs font-semibold uppercase tracking-widest rounded-xl cursor-pointer"
                >
                  I Understand
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
