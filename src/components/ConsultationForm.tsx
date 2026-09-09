import React, { useState, useEffect } from 'react';
import { ConsultationInput } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Calendar, ArrowRight, ArrowLeft, Loader2, Award, MessageCircle, Mail } from 'lucide-react';

const LEAD_WHATSAPP_NUMBER = '919810288146';
const LEAD_EMAIL = 'smarkitals@gmail.com';

function buildLeadMessage(formData: ConsultationInput): string {
  return [
    `New event consultation request`,
    `Name: ${formData.name}`,
    `Phone: ${formData.phone}`,
    `Email: ${formData.email}`,
    formData.company ? `Company: ${formData.company}` : null,
    `Event Type: ${formData.eventType}`,
    `Tentative Date: ${formData.date}`,
    `Guest Count: ${formData.guestCount}`,
    `Budget Range: ${formData.budgetRange}`,
    formData.description ? `Details: ${formData.description}` : null
  ].filter(Boolean).join('\n');
}

interface ConsultationFormProps {
  initialEventType?: string;
  initialDescription?: string;
}

export default function ConsultationForm({ initialEventType = '', initialDescription = '' }: ConsultationFormProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<ConsultationInput>({
    name: '',
    email: '',
    phone: '',
    company: '',
    eventType: initialEventType || 'Corporate Gala',
    date: '',
    guestCount: '100-250',
    budgetRange: 'Exquisite $30k-$75k',
    description: initialDescription || ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [sentVia, setSentVia] = useState<'whatsapp' | 'email' | null>(null);
  const [pastSubmissions, setPastSubmissions] = useState<ConsultationInput[]>([]);

  // Keep eventType and description synced if props change
  useEffect(() => {
    if (initialEventType) {
      setFormData(prev => ({ ...prev, eventType: initialEventType }));
    }
    if (initialDescription) {
      setFormData(prev => ({ ...prev, description: initialDescription }));
    }
  }, [initialEventType, initialDescription]);

  // Load past submissions from local storage
  useEffect(() => {
    const saved = localStorage.getItem('puram_consultations');
    if (saved) {
      try {
        setPastSubmissions(JSON.parse(saved));
      } catch (err) {
        console.error('Error loading history', err);
      }
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (step === 1 && (!formData.name || !formData.email || !formData.phone)) {
      alert('Please enter your name, email and mobile number to proceed.');
      return;
    }
    if (step === 2 && !formData.date) {
      alert('Please select a tentative date.');
      return;
    }
    setStep(prev => Math.min(prev + 1, 4));
  };

  const handleBack = () => {
    setStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (channel: 'whatsapp' | 'email') => {
    if (!formData.name || !formData.email || !formData.phone || !formData.date) {
      alert('Please complete your name, email, mobile number and tentative date first.');
      return;
    }

    setIsSubmitting(true);

    // Brief pause so the review state feels deliberate before handing off to WhatsApp/email
    await new Promise(resolve => setTimeout(resolve, 600));

    const updatedHistory = [...pastSubmissions, formData];
    setPastSubmissions(updatedHistory);
    localStorage.setItem('puram_consultations', JSON.stringify(updatedHistory));

    const message = buildLeadMessage(formData);
    if (channel === 'whatsapp') {
      window.open(`https://wa.me/${LEAD_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    } else {
      window.location.href = `mailto:${LEAD_EMAIL}?subject=${encodeURIComponent(`New Event Consultation - ${formData.name}`)}&body=${encodeURIComponent(message)}`;
    }

    setIsSubmitting(false);
    setSentVia(channel);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      eventType: 'Corporate Gala',
      date: '',
      guestCount: '100-250',
      budgetRange: 'Exquisite $30k-$75k',
      description: ''
    });
    setIsSubmitted(false);
    setSentVia(null);
    setStep(1);
  };

  const stepsInfo = [
    { num: 1, title: 'Your Identity', subtitle: 'Who are we creating for?' },
    { num: 2, title: 'The Vision', subtitle: 'What is the scale & date?' },
    { num: 3, title: 'The Parameters', subtitle: 'What are the dimensions?' },
    { num: 4, title: 'The Blueprint', subtitle: 'Review your masterpiece' }
  ];

  return (
    <div className="w-full max-w-3xl mx-auto bg-brand-charcoal-light border border-brand-white/10 rounded-3xl overflow-hidden p-6 sm:p-10 relative">
      {/* Decorative top lighting edge */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-brand-orange to-transparent" />

      {/* Main Booking Wizard */}
      {!isSubmitted ? (
        <div className="space-y-8">
          {/* Progress Indicator */}
          <div className="space-y-4">
            <div className="flex justify-between items-center text-xs tracking-widest uppercase font-semibold text-brand-white/40">
              <span>Step {step} of 4</span>
              <span className="text-brand-orange-light">{stepsInfo[step-1].title}</span>
            </div>
            
            {/* Visual Progress Bar */}
            <div className="h-1 bg-brand-white/5 rounded-full flex overflow-hidden">
              {stepsInfo.map((s, index) => {
                const isCompleted = index + 1 < step;
                const isCurrent = index + 1 === step;
                return (
                  <div
                    key={s.num}
                    className={`h-full flex-1 transition-all duration-500 border-r last:border-0 border-brand-charcoal-light ${
                      isCompleted ? 'bg-brand-orange' : isCurrent ? 'bg-brand-orange-light animate-pulse' : 'bg-brand-white/10'
                    }`}
                  />
                );
              })}
            </div>

            <h2 className="font-display font-black text-2xl text-brand-white tracking-wide">
              {stepsInfo[step-1].subtitle}
            </h2>
          </div>

          <div className="w-full h-px bg-brand-white/5" />

          {/* Wizard Fields Content */}
          <div className="min-h-[220px]">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step-1"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-xs font-semibold tracking-widest text-brand-white/60 uppercase">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Siddharth Mehta"
                        className="w-full px-5 py-3.5 rounded-xl bg-brand-charcoal border border-brand-white/10 focus:border-brand-orange-light text-brand-white text-sm outline-none transition-all placeholder:text-brand-white/20"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="block text-xs font-semibold tracking-widest text-brand-white/60 uppercase">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. siddharth@luminary.com"
                        className="w-full px-5 py-3.5 rounded-xl bg-brand-charcoal border border-brand-white/10 focus:border-brand-orange-light text-brand-white text-sm outline-none transition-all placeholder:text-brand-white/20"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-xs font-semibold tracking-widest text-brand-white/60 uppercase">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full px-5 py-3.5 rounded-xl bg-brand-charcoal border border-brand-white/10 focus:border-brand-orange-light text-brand-white text-sm outline-none transition-all placeholder:text-brand-white/20"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-semibold tracking-widest text-brand-white/60 uppercase">
                        Company / Organization (Optional)
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="e.g. Luminary Global Tech"
                        className="w-full px-5 py-3.5 rounded-xl bg-brand-charcoal border border-brand-white/10 focus:border-brand-orange-light text-brand-white text-sm outline-none transition-all placeholder:text-brand-white/20"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step-2"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-xs font-semibold tracking-widest text-brand-white/60 uppercase">
                        Event Genre
                      </label>
                      <select
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleInputChange}
                        className="w-full px-5 py-3.5 rounded-xl bg-brand-charcoal border border-brand-white/10 focus:border-brand-orange-light text-brand-white text-sm outline-none transition-all cursor-pointer"
                      >
                        <option value="Corporate Gala">Corporate Gala / summit</option>
                        <option value="Luxury Wedding">Luxury Wedding</option>
                        <option value="Destination Celebration">Destination Celebration</option>
                        <option value="Product Launch">Product Launch</option>
                        <option value="Brand Activation">Brand Activation</option>
                        <option value="Private Celebration">Private Celebration / Award</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-semibold tracking-widest text-brand-white/60 uppercase">
                        Tentative Date *
                      </label>
                      <input
                        type="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleInputChange}
                        className="w-full px-5 py-3.5 rounded-xl bg-brand-charcoal border border-brand-white/10 focus:border-brand-orange-light text-brand-white text-sm outline-none transition-all cursor-pointer"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-semibold tracking-widest text-brand-white/60 uppercase">
                      Estimated Attendee Count
                    </label>
                    <select
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={handleInputChange}
                      className="w-full px-5 py-3.5 rounded-xl bg-brand-charcoal border border-brand-white/10 focus:border-brand-orange-light text-brand-white text-sm outline-none transition-all cursor-pointer"
                    >
                      <option value="Under 50">Intimate (Under 50 guests)</option>
                      <option value="50-100">Bespoke (50 - 100 guests)</option>
                      <option value="100-250">Grand (100 - 250 guests)</option>
                      <option value="250-500">Major Production (250 - 500 guests)</option>
                      <option value="500+">Colossal (500+ guests)</option>
                    </select>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step-3"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold tracking-widest text-brand-white/60 uppercase">
                      Estimated Event Budget
                    </label>
                    <select
                      name="budgetRange"
                      value={formData.budgetRange}
                      onChange={handleInputChange}
                      className="w-full px-5 py-3.5 rounded-xl bg-brand-charcoal border border-brand-white/10 focus:border-brand-orange-light text-brand-white text-sm outline-none transition-all cursor-pointer"
                    >
                      <option value="Premium $15k-$30k">Premium ($15,000 - $30,000)</option>
                      <option value="Exquisite $30k-$75k">Exquisite ($30,000 - $75,000)</option>
                      <option value="Grand Legacy $75k+">Grand Legacy ($75,000+)</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-semibold tracking-widest text-brand-white/60 uppercase">
                      Briefly describe your vision and specific requirements
                    </label>
                    <textarea
                      name="description"
                      rows={4}
                      value={formData.description}
                      onChange={handleInputChange}
                      placeholder="e.g. We are looking to craft a geometric laser-light event celebrating our tech IPO..."
                      className="w-full px-5 py-3.5 rounded-xl bg-brand-charcoal border border-brand-white/10 focus:border-brand-orange-light text-brand-white text-sm outline-none transition-all placeholder:text-brand-white/20 resize-none"
                    />
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div
                  key="step-4"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="space-y-5 bg-brand-charcoal p-6 rounded-2xl border border-brand-white/5"
                >
                  <p className="text-xs text-brand-white/50 tracking-wide">
                    Please confirm the parameters of your experience blueprint below. Our design committee reviews each brief personally.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-xs border-t border-brand-white/5 pt-4">
                    <div>
                      <span className="block text-[10px] text-brand-white/40 uppercase tracking-widest">Creator</span>
                      <strong className="text-brand-white font-medium mt-1 block">{formData.name}</strong>
                    </div>
                    <div>
                      <span className="block text-[10px] text-brand-white/40 uppercase tracking-widest">Contact Email</span>
                      <strong className="text-brand-white font-medium mt-1 block">{formData.email}</strong>
                    </div>
                    <div>
                      <span className="block text-[10px] text-brand-white/40 uppercase tracking-widest">Mobile Number</span>
                      <strong className="text-brand-white font-medium mt-1 block">{formData.phone}</strong>
                    </div>
                    {formData.company && (
                      <div className="col-span-2">
                        <span className="block text-[10px] text-brand-white/40 uppercase tracking-widest">Organization</span>
                        <strong className="text-brand-white font-medium mt-1 block">{formData.company}</strong>
                      </div>
                    )}
                    <div>
                      <span className="block text-[10px] text-brand-white/40 uppercase tracking-widest">Event Genre</span>
                      <strong className="text-brand-orange-light font-medium mt-1 block">{formData.eventType}</strong>
                    </div>
                    <div>
                      <span className="block text-[10px] text-brand-white/40 uppercase tracking-widest">Target Date</span>
                      <strong className="text-brand-white font-medium mt-1 block flex items-center gap-1">
                        <Calendar size={11} className="text-brand-orange-light" /> {formData.date}
                      </strong>
                    </div>
                    <div>
                      <span className="block text-[10px] text-brand-white/40 uppercase tracking-widest">Scale</span>
                      <strong className="text-brand-white font-medium mt-1 block">{formData.guestCount} guests</strong>
                    </div>
                    <div>
                      <span className="block text-[10px] text-brand-white/40 uppercase tracking-widest">Planned Budget</span>
                      <strong className="text-brand-white font-medium mt-1 block">{formData.budgetRange}</strong>
                    </div>
                    {formData.description && (
                      <div className="col-span-2 border-t border-brand-white/5 pt-3 mt-1">
                        <span className="block text-[10px] text-brand-white/40 uppercase tracking-widest">Vision Synopsis</span>
                        <p className="text-brand-white/80 font-sans text-xs mt-1 leading-relaxed">
                          "{formData.description}"
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="w-full h-px bg-brand-white/5" />

          {/* Nav Controls */}
          <div className="flex justify-between items-center pt-2">
            {step > 1 ? (
              <button
                type="button"
                id="booking-back-btn"
                onClick={handleBack}
                className="flex items-center gap-2 px-6 py-3 border border-brand-white/10 hover:border-brand-white text-brand-white/80 hover:text-brand-white text-xs font-semibold uppercase tracking-widest rounded-xl transition-all cursor-pointer"
              >
                <ArrowLeft size={13} /> Back
              </button>
            ) : (
              <div />
            )}

            {step < 4 ? (
              <button
                type="button"
                id="booking-next-btn"
                onClick={handleNext}
                className="flex items-center gap-2 px-6 py-3 bg-brand-white hover:bg-brand-orange text-brand-charcoal hover:text-brand-white text-xs font-semibold uppercase tracking-widest rounded-xl transition-all ml-auto cursor-pointer"
              >
                Next Step <ArrowRight size={13} />
              </button>
            ) : (
              <div className="flex flex-col sm:flex-row gap-3 ml-auto">
                <button
                  type="button"
                  id="booking-submit-email-btn"
                  disabled={isSubmitting}
                  onClick={() => handleSubmit('email')}
                  className="flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent border border-brand-white/15 hover:border-brand-orange-light text-brand-white text-xs font-semibold uppercase tracking-widest rounded-xl transition-all disabled:opacity-55 cursor-pointer"
                >
                  <Mail size={14} /> Send via Email
                </button>
                <button
                  type="button"
                  id="booking-submit-whatsapp-btn"
                  disabled={isSubmitting}
                  onClick={() => handleSubmit('whatsapp')}
                  className="flex items-center justify-center gap-2 px-7 py-3.5 bg-brand-orange hover:bg-brand-orange-dark text-brand-white text-xs font-semibold uppercase tracking-widest rounded-xl transition-all disabled:opacity-55 cursor-pointer shadow-lg shadow-brand-orange/15"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={13} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <MessageCircle size={14} /> Send via WhatsApp
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* SUCCESS RECEIPT ANIMATED PANEL */
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-8 space-y-6"
        >
          <div className="w-16 h-16 bg-brand-orange/10 border border-brand-orange/30 rounded-full flex items-center justify-center text-brand-orange-light mx-auto animate-bounce">
            <Check size={32} />
          </div>

          <div className="space-y-2">
            <span className="px-3 py-1 bg-brand-orange/15 border border-brand-orange-light/20 text-brand-orange-light text-[9px] tracking-widest uppercase font-black rounded-full">
              Brief Registered
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-brand-white tracking-wide pt-2">
              Blueprint Commissioned
            </h2>
            <p className="font-sans text-xs text-brand-white/65 max-w-md mx-auto leading-relaxed">
              Thank you, <span className="text-brand-white font-medium">{formData.name}</span>. {sentVia === 'whatsapp'
                ? 'We\'ve opened WhatsApp with your brief pre-filled — just hit send and our team will reply shortly.'
                : 'We\'ve opened your email app with your brief pre-filled — just hit send and our team will reply shortly.'}
            </p>
          </div>

          {/* Structured Ticket Receipt */}
          <div className="max-w-md mx-auto bg-brand-charcoal text-left p-5 rounded-xl border border-brand-white/5 space-y-3 relative overflow-hidden">
            {/* Stamp marker */}
            <div className="absolute -top-3 -right-3 w-20 h-20 bg-brand-orange/5 border border-brand-orange-light/10 flex items-center justify-center rounded-full rotate-12">
              <Award size={36} className="text-brand-orange-light/10" />
            </div>

            <h4 className="font-display font-black text-xs uppercase tracking-widest text-brand-orange-light pb-2 border-b border-brand-white/5">
              Receipt: Puram Plan-0{pastSubmissions.length}
            </h4>

            <div className="grid grid-cols-2 gap-y-2.5 text-[11px] font-sans">
              <div>
                <span className="text-brand-white/40 block">Scale / Genre</span>
                <span className="text-brand-white font-medium">{formData.eventType}</span>
              </div>
              <div>
                <span className="text-brand-white/40 block">Tentative Date</span>
                <span className="text-brand-white font-medium">{formData.date}</span>
              </div>
              <div>
                <span className="text-brand-white/40 block">Guest Bracket</span>
                <span className="text-brand-white font-medium">{formData.guestCount} guests</span>
              </div>
              <div>
                <span className="text-brand-white/40 block">Allocated Funds</span>
                <span className="text-brand-white font-medium">{formData.budgetRange}</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-3.5 pt-4">
            <button
              id="booking-new-brief-btn"
              onClick={handleReset}
              className="px-6 py-2.5 bg-brand-charcoal-light border border-brand-white/10 hover:border-brand-white text-brand-white text-xs font-semibold uppercase tracking-widest rounded-xl transition-all cursor-pointer"
            >
              Submit New Brief
            </button>
          </div>
        </motion.div>
      )}

      {/* History Log Section showing actual persistent entries */}
      {pastSubmissions.length > 0 && (
        <div className="mt-12 border-t border-brand-white/10 pt-8 space-y-4">
          <h3 className="font-display font-bold text-xs uppercase tracking-widest text-brand-white flex items-center gap-2">
            <span className="w-2 h-2 bg-brand-orange rounded-full" />
            Your Saved Consultations ({pastSubmissions.length})
          </h3>
          <p className="font-sans text-[10px] text-brand-white/40">
            Below is the history of customized plans curated using your client credentials on this sandbox container.
          </p>

          <div className="space-y-3 max-h-[220px] overflow-y-auto pr-2">
            {pastSubmissions.map((sub, i) => (
              <div key={i} className="p-4 bg-brand-charcoal rounded-xl border border-brand-white/5 flex items-center justify-between text-xs gap-4">
                <div>
                  <h4 className="font-display font-bold text-brand-white">
                    {sub.eventType}
                  </h4>
                  <p className="font-sans text-[10px] text-brand-white/50 mt-1">
                    Planned for: <span className="text-brand-orange-light font-medium">{sub.date}</span> • Scale: {sub.guestCount} guests
                  </p>
                </div>
                <div className="text-right">
                  <span className="px-2.5 py-1 bg-brand-orange/10 border border-brand-orange/20 text-brand-orange-light font-sans text-[9px] font-bold uppercase rounded-md">
                    In Committee
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
