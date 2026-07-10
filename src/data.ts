import { Service, Project, ClientStory, BlogPost, TimelineStep } from './types';

export const SERVICES: Service[] = [
  {
    id: 'corporate-events',
    title: 'Corporate Events & Galas',
    shortDescription: 'Immersive, high-profile corporate experiences designed to amplify corporate culture and leave lasting industry footprints.',
    fullDescription: 'We build events that align seamlessly with your corporate identity and business goals. From high-tech international summits to lavish annual galas, our team engineers every detail from AV production and stage layout to keynote flow, making your corporate vision powerful and engaging.',
    details: [
      'Strategic stage design & custom lighting',
      'High-bandwidth, reliable multi-feed livestreaming',
      'Immersive brand-integrated environmental graphics',
      'VIP lounge design and curated high-end catering',
      'Flawless executive guest hospitality & transport'
    ],
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200',
    iconName: 'Building2'
  },
  {
    id: 'luxury-weddings',
    title: 'Luxury & Destination Weddings',
    shortDescription: 'Curating highly personal, visually spectacular love stories set in the world’s most breathtaking locations.',
    fullDescription: 'A wedding is not just a ceremony—it is an emotional journey. Puram Events designs weddings that capture your unique story, combining premium floral installations, customized architectural stages, world-class entertainment, and exquisite guest management so you can simply live the magic.',
    details: [
      'End-to-end global venue sourcing and contracts',
      'Bespoke architectural layout & spatial floral styling',
      'Multilingual guest relations & travel hospitality',
      'Customized wedding branding, typography & stationery',
      'Legendary artist curation & theatrical programming'
    ],
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1200',
    iconName: 'Heart'
  },
  {
    id: 'product-launches',
    title: 'Product Launches & Brand Activations',
    shortDescription: 'Transforming product announcements into iconic, media-worthy cultural moments that ignite customer desire.',
    fullDescription: 'To launch a product is to tell a story about the future. We craft theatrical, sensory-rich environments that bring your product to life. By combining spatial design, interactive tech installations, and premium media coordination, we ensure your launch dominates conversations.',
    details: [
      'Interactive sensory displays & AR integrations',
      'Dramatic reveal mechanics & mechanical stage automation',
      'Press kit design, media lounges & photography setups',
      'Key opinion leader (KOL) & influencer hospitality',
      'Synchronized lighting, sound & laser choreography'
    ],
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1200',
    iconName: 'Sparkles'
  },
  {
    id: 'technical-production',
    title: 'Technical Production & Stage Design',
    shortDescription: 'World-class audiovisual engineering, kinetic staging, and synchronized light installations that captivate thousands.',
    fullDescription: 'Great event design is nothing without technical perfection. Our internal technical division handles the highest-grade sound systems, intelligent lighting arrays, high-resolution modular LEDs, and automated stage mechanisms to execute complex, zero-latency live productions.',
    details: [
      'State-of-the-art acoustics & immersive spatial audio',
      'Intelligent concert-grade lighting setups',
      'Custom 3D projection mapping & pixel mapping',
      'Rigging safety audits & structural engineering',
      'Real-time backup power grids & power redundancy'
    ],
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1200',
    iconName: 'Cpu'
  },
  {
    id: 'guest-management',
    title: 'Guest Experience & Hospitality',
    shortDescription: 'Meticulous, zero-friction white-glove hospitality that treats every single attendee like a VIP.',
    fullDescription: 'The attendee journey begins long before they enter the venue. We build comprehensive, premium guest systems including bespoke custom digital RSVPs, secure travel coordination, executive airport transfers, curated hotel check-ins, and on-site concierge services.',
    details: [
      'Custom branded digital check-in platforms',
      'Airport tarmac transfers & luxury fleet routing',
      'Specialized dietary & accessibility curation',
      '24/7 dedicated guest concierge hotline',
      'Custom curated welcome boxes and parting gifts'
    ],
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200',
    iconName: 'Users'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'luminary-gala',
    title: 'The Luminary Annual Gala',
    category: 'Corporate',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200',
    year: '2025',
    location: 'Mumbai, India',
    client: 'Luminary Global Tech',
    challenge: 'To host an annual gala for 800 executive level clients and stakeholders that feels intensely premium, avoiding the traditional dry corporate atmosphere while successfully presenting the firm’s forward-thinking tech ethos.',
    approach: 'We designed a space inspired by the flow of light—representing data and ideas. We built an immersive tunnel of curved light that transported guests from the busy city streets into a celestial sanctuary.',
    execution: 'Used 400 linear meters of custom programmable neon strips, interactive responsive tracking on the entrance bridge, and an epic central stage framed by high-end dark brown curved columns mimicking geometric elephant trunks.',
    result: 'Achieved a record-breaking 99% positive guest feedback score. The launch went viral across professional networks, cementing Luminary’s brand as a creative powerhouse.',
    galleryImages: [
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1482245294234-b3f2f8d5f1a4?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  {
    id: 'aurelia-wedding',
    title: 'Aurelia: Udaipur Destination Dream',
    category: 'Wedding',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1200',
    year: '2026',
    location: 'Udaipur, India',
    client: 'Aditya & Kiara',
    challenge: 'A multi-day royal wedding for 350 international guests demanding total modern luxury combined with the majestic heritage of Rajasthan, on a historical lake palace with complex logistics.',
    approach: 'We leaned into the theme of "Grandeur & Memory," inspired by the majestic elephant. We utilized deep warm orange, soft golds, and off-white fabrics. We designed custom circular floating stages on Lake Pichola.',
    execution: 'Every floral arrangement was hand-sourced. We coordinated boat logistics for all 350 guests, designed custom laser lighting that accentuated the historical palace architecture without touching the heritage walls, and arranged classical sitar artists.',
    result: 'A breathtaking, flawless three-day celebration. Complete guest comfort with zero delays, covered extensively by luxury wedding magazines as the benchmark of the season.',
    galleryImages: [
      'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  {
    id: 'apex-brand-activation',
    title: 'Apex Reveal: Immersive Launch',
    category: 'Brand',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1200',
    year: '2025',
    location: 'New Delhi, India',
    client: 'Apex Automotive Corp',
    challenge: 'Excite premium buyers and automotive journalists for a new high-end vehicle. The reveal mechanism had to feel incredibly high-tech and visceral, leaving no margin for technical error.',
    approach: 'We created an immersive dark tunnel utilizing wind generators, spatial surround sound, and a massive mechanical water-droplet curtain screen that parted exactly when the vehicle drove through.',
    execution: 'Engineered a highly precise laser-trigger water system, integrated high-contrast amber lights, and designed a custom amphitheater seating layout that ensured every guest sat in the sweet-spot of the acoustic landscape.',
    result: 'The launch generated millions of impressions across automotive channels. Secure pre-bookings surged by 180% within 48 hours of the event.',
    galleryImages: [
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  {
    id: 'vanguard-summit',
    title: 'Vanguard Global Founders Forum',
    category: 'Luxury',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200',
    year: '2026',
    location: 'Goa, India',
    client: 'Vanguard Capital',
    challenge: 'Produce a relaxed, extremely high-end roundtable and summit for 120 unicorn founders in a beach setting, requiring impeccable technical setups in an open-air beachfront environment.',
    approach: 'We built a bespoke, highly robust wooden geometric pavilion directly on the sands of Goa. The design focused on premium natural materials (dark brown woods, linen sails) in organic flowing curves.',
    execution: 'Incorporated invisible solar-powered silent HVAC units, high-resolution outdoor-ready LED panels disguised as native design elements, and a multi-zone discrete audio matrix.',
    result: 'Praised by legendary technology founders as the most comfortable, inspiring, and flawlessly coordinated summit they had ever attended.',
    galleryImages: [
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200'
    ]
  }
];

export const CLIENT_STORIES: ClientStory[] = [
  {
    id: 'story-1',
    clientName: 'Siddharth Mehta',
    clientRole: 'VP of Global Brand Relations',
    company: 'Luminary Global Tech',
    eventName: 'Luminary Annual Gala',
    challenge: 'We had exactly three weeks to transition our traditional indoor annual gala into an ultra-premium outdoor experience when an unexpected venue change occurred. The risk of standardizing and looking like a cheap substitute was massive.',
    solution: 'Puram Events swooped in within 24 hours. They drafted an entirely new architectural concept inspired by majestic organic geometry, coordinating with their trusted high-end lighting and construction partners.',
    outcome: 'They didn’t just execute; they created a work of art. The curved structure they erected felt like a permanent exhibition. Our stakeholders are still raving about the lighting tunnels and ambient details.',
    quote: 'Puram Events turns pressure into absolute art. Their absolute focus on high design and precise timelines was spectacular.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 'story-2',
    clientName: 'Kiara Sen',
    clientRole: 'Creative Director',
    company: 'Aurelia Wedding Case Study',
    eventName: 'Udaipur Royal Celebration',
    challenge: 'Hosting 350 VIP global guests across three historic islands in Udaipur. With continuous custom boat movements, unpredictable weather, and historical heritage protection rules, the margin for error was non-existent.',
    solution: 'Puram managed the entire operation with military precision. They constructed specialized, temporary floating decks that protected the heritage waters and created custom digital check-in systems for our guests.',
    outcome: 'Every single event started exactly on the second. Our guests experienced complete comfort, without feeling any of the immense backend logistical weight. It felt as effortless as a gentle breeze.',
    quote: 'If you want absolute perfection, complete peace of mind, and breathtaking design that leaves people speechless—you call Puram.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    title: 'The Art of Spatial Flow: Designing the Perfect Event Layout',
    excerpt: 'How spatial psychology and deliberate visual transitions turn physical venues into memorable emotional narratives.',
    content: 'An extraordinary event doesn’t happen in static squares. It happens in journeys. In this comprehensive journal, we discuss the core philosophies behind designing spatial flows. By understanding the natural movement of human attention, we utilize custom corridors, curated lighting guides, and organic curves—like the powerful arcs of a majestic elephant trunk—to gently lead guests through distinct scenes of an event. Good design should feel invisible yet highly felt.',
    category: 'Event Design',
    date: 'June 18, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200',
    author: 'Aarav Puram, Founder'
  },
  {
    id: 'post-2',
    title: 'Mastering the Unpredictable: High-End Destination Logistics',
    excerpt: 'Behind the scenes of Udaipur and Goa: How our technical production team manages absolute precision under pressure.',
    content: 'Destination weddings and remote summits are beautiful, but they present immense logistical challenges. We dive into the proprietary checklists, redundant power systems, and premium vendor relationships that allow Puram Events to guarantee complete operational stability, even on floating lake platforms and sandy coastal stretches. Learn how we eliminate client stress entirely.',
    category: 'Logistics & Execution',
    date: 'May 04, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200',
    author: 'Rajesh Nair, Head of Operations'
  }
];

export const TIMELINE_STEPS: TimelineStep[] = [
  {
    label: 'Your Vision',
    description: 'The Spark',
    detail: 'We sit with you to absorb your aspirations, brand guidelines, or romantic stories. No notebooks or standard forms—just deep human conversation to locate the genuine emotional heart of your event.'
  },
  {
    label: 'Creative Strategy',
    description: 'The Canvas',
    detail: 'Our brand strategists and art directors design custom visual concepts, mood boards, and sensory outlines. We explore spatial flow, custom color theory, and memorable touchpoints.'
  },
  {
    label: 'Event Design',
    description: 'The Blueprint',
    detail: 'Using 3D spatial models and custom CAD renders, we map every seating arrangement, lighting angle, and stage curve, so you can walk through your event in virtual reality before it is built.'
  },
  {
    label: 'Planning',
    description: 'The Redundancy Grid',
    detail: 'We secure premium materials, source rare decor, and build detailed, minute-by-minute operational schedules. We establish redundant plans for power, weather, and catering.'
  },
  {
    label: 'Vendor Coordination',
    description: 'The Alliance',
    detail: 'We handle every single partner contract, alignment meeting, and logistics pipeline. Our vetted roster of luxury providers ensures everyone performs at award-winning levels.'
  },
  {
    label: 'Execution',
    description: 'The Live Stage',
    detail: 'Our technical director, stage managers, and hospitality hosts arrive on-site days early to build, test, and polish. Every visual cue, soundcheck, and transition is executed flawlessly.'
  },
  {
    label: 'Celebration',
    description: 'Pure Magic',
    detail: 'You raise your glass, hug your family, or connect with your partners. The background logistics hum invisibly, leaving you completely present to experience your story.'
  },
  {
    label: 'Lasting Memories',
    description: 'The Afterglow',
    detail: 'We deliver beautiful, cinematic galleries and professionally edited highlight reels. Long after the lights dim, the emotional resonance of the extraordinary experience remains.'
  }
];
