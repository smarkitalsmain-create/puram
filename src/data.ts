import { Service, Project, ClientStory, BlogPost, TimelineStep, TeamMember } from './types';

export const LEADERSHIP: TeamMember[] = [
  {
    id: 'karthika-venugopal',
    name: 'Karthika Venugopal',
    role: 'Co-Founder & Creative Director',
    image: '/team/karthika-venugopal.jpg',
    bio: [
      'With a professional background in architecture and interior design, Karthika Venugopal knows how to transform an ordinary space into an immersive experience. Her instinct for detail, proportion, colour and storytelling allows her to envision an event as a complete world rather than a collection of decorations.',
      'A trained dancer, theatre artist and choreographer, Karthika also understands performance, movement and the energy of a live audience. At Puram Events, she leads creative planning and experience design, ensuring that every element, from the overall concept to the smallest visual detail, feels intentional and connected.',
      'Her greatest strength is her ability to understand what a client wants people to feel and then build the entire event around that emotion. Whether the occasion is intimate, cultural, celebratory or large-scale, Karthika ensures that it carries a distinctive identity and leaves a lasting impression.',
      'Under her creative leadership, Puram does not simply decorate venues. It creates environments that tell stories, celebrate cultures and make every guest feel part of something special.'
    ]
  },
  {
    id: 'abhijit-arjun',
    name: 'Abhijit G. Arjun',
    role: 'Co-Founder & Artistic Director',
    image: '/team/abhijit-arjun.jpg',
    bio: [
      'Abhijit G. Arjun is the artistic force who brings Puram’s ideas to life. A graphic designer and visual artist by profession, he has the ability to turn imagination into powerful visual experiences. His work brings clarity and character to every event, ensuring that its design, ambience and presentation reflect the client’s personality and purpose.',
      'As a guitarist and band leader, Abhijit also understands something that cannot be created through decoration alone: the emotional rhythm of an event. He knows how music, performance, lighting and visual storytelling can work together to change the energy of a space and create moments that guests genuinely connect with.',
      'At Puram Events, Abhijit leads artistic direction and experiential execution. He looks beyond how an event appears and focuses on how it unfolds, how it makes people feel and what they remember when it is over.',
      'His creative sensitivity, combined with a practical understanding of execution, ensures that every Puram event feels lively, expressive and thoughtfully crafted rather than manufactured or repetitive.'
    ]
  }
];

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
  },
  {
    id: 'regional-cultural-events',
    title: 'Indian Regional & Cultural Celebrations',
    shortDescription: 'Tradition-rich celebrations designed around the customs, cuisine and rituals of India\'s different states and communities.',
    fullDescription: 'India\'s regional traditions each carry their own colours, rituals, cuisines and rhythms, and we design events that honour them properly rather than treating them as generic themes. We research the customs, source the right artisans, musicians and caterers, and build a celebration that feels authentic to the culture being celebrated.',
    details: [
      'Kerala: Onam Sadya banana-leaf feasts, Vishu celebrations, and traditional Kerala wedding (Kalyanam) styling',
      'Tamil Nadu: Pongal harvest celebrations and traditional Tamil wedding rituals with authentic mandap design',
      'Jammu & Kashmir: Kashmiri Wazwan feast setups and Dogra-style festive décor',
      'Manipur: Manipuri classical dance showcases and Sangai festival-inspired cultural evenings',
      'Gujarat: Garba and Sangeet nights, and traditional Gujarati wedding ceremonies',
      'Custom regional menus, folk music and dance curation, and ritual-accurate décor for any Indian community or state'
    ],
    image: 'https://images.unsplash.com/photo-1478147427282-58a87a120781?auto=format&fit=crop&q=80&w=1200',
    iconName: 'Landmark'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'thespis-4-national-micro-drama-festival',
    title: 'Thespis 4: National Micro Drama Festival',
    category: 'Cultural & Theatre',
    image: '/portfolio/thespis-4/03-gate-entrance.jpg',
    year: '2025',
    location: 'The Little Theatre, New Delhi',
    client: 'Vriksh — The Theatre, in association with National School of Drama',
    challenge: 'Turn an entire theatre campus — entrances, gardens, and backstage — into a cohesive festival environment for Thespis 4, held as part of Bharat Rang Mahotsav 2025, without overshadowing the day\'s formal tribute to the late Prof. Omchery N. N. Pillai.',
    approach: 'A hand-crafted, paper-and-colour visual language tying every corner of the campus together: pom-pom garlands and lettering at the main gate, a ribbon-and-pinwheel arch at the tribute entrance, and playful sculptural props scattered through the gardens.',
    execution: 'Built the festival billboard and wayfinding, the Omchery N. N. Pillai memorial board and its floral-ribbon frame, garden installations of painted cactus totems and character masks on plinths, string-light dressing for evening sessions, and supported the black-box stage sets used during performances.',
    result: 'A festival that felt designed rather than assembled — signage, gardens, and stage all reading as one identity across a multi-day, multi-venue programme.',
    galleryImages: [
      '/portfolio/thespis-4/03-gate-entrance.jpg',
      '/portfolio/thespis-4/01-billboard.jpg',
      '/portfolio/thespis-4/02-gate-tribute.jpg',
      '/portfolio/thespis-4/04-legacy-board.jpg',
      '/portfolio/thespis-4/05-garden-install.jpg',
      '/portfolio/thespis-4/06-garden-masks.jpg',
      '/portfolio/thespis-4/07-night-lights.jpg',
      '/portfolio/thespis-4/08-stage-performance.jpg',
      '/portfolio/thespis-4/09-stage-bw.jpg'
    ]
  },
  {
    id: 'gst-day-2025',
    title: '8th GST Day, Meerut Zone',
    category: 'Corporate',
    image: '/portfolio/gst-day/01-stage.jpg',
    year: '2025',
    location: 'IMS Ghaziabad',
    client: 'Central Goods and Services Tax, Meerut Zone',
    challenge: 'Stage a formal departmental ceremony — hosted in the presence of the Zonal Member & Member (Customs), CBIC — that felt dignified and on-brand, not generic government-hall decor.',
    approach: 'A classic, warm palette of marigold and rose garlands against the venue\'s existing gold-and-red staging, keeping every element functional for a head-table of officials and a large-screen presentation.',
    execution: 'Layered marigold, orange, and white floral garlands and tassels along the full stage skirt, matching centerpiece arrangements at each seat, and coordinated staging around the podium banner and screen.',
    result: 'A stage that read as respectful and polished for a senior government audience, delivered on schedule for the ceremony start.',
    galleryImages: [
      '/portfolio/gst-day/01-stage.jpg'
    ]
  },
  {
    id: 'baddie-and-birthday',
    title: '"Baddie & Birthday": A 35th in Maroon & Gold',
    category: 'Celebrations',
    image: '/portfolio/baddie-birthday/01-collage.jpg',
    year: '2026',
    location: 'Private Celebration, India',
    client: 'Private Client',
    challenge: 'Design a 35th birthday that felt moody and glamorous rather than the usual pastel party — a "baddie" aesthetic the client could actually picture herself in.',
    approach: 'A deep maroon, gold, and black palette carried through every surface: a sculptural red rose backdrop, a black dessert table with red florals and candelabras, and a ribbon-and-fairy-light photo wall.',
    execution: 'Built a cascading rose and ranunculus table runner, a red-and-white balloon garland entry moment, a candlelit dessert spread with cherries, chocolate-dipped treats and mini birthday cakes, and a "Cheers to 35" signature cake display.',
    result: 'Every corner styled as its own photo moment — from the gift table to the dessert spread — for a night that felt editorial rather than off-the-shelf.',
    galleryImages: [
      '/portfolio/baddie-birthday/01-collage.jpg'
    ]
  },
  {
    id: 'welcome-baby-girl',
    title: 'Welcome Baby Girl: A Newborn Homecoming',
    category: 'Celebrations',
    image: '/portfolio/welcome-baby-girl/01-decor.jpg',
    year: '2026',
    location: 'Private Residence, India',
    client: 'Private Client',
    challenge: 'Transform a family bedroom into a warm, camera-ready homecoming moment for a newborn\'s first day home, on a compressed same-week timeline.',
    approach: 'A soft purple-and-pink balloon and fringe-curtain scheme designed to photograph beautifully in low light, with a personalised banner as the centerpiece.',
    execution: 'A balloon garland arch, metallic fringe curtain backdrop, a "Welcome Princess" bunting banner, and layered fairy lighting around the bed.',
    result: 'A ready-to-photograph nursery corner waiting the moment mother and baby walked in.',
    galleryImages: [
      '/portfolio/welcome-baby-girl/01-decor.jpg'
    ]
  },
  {
    id: 'intimate-engagement',
    title: 'An Intimate Engagement',
    category: 'Celebrations',
    image: '/portfolio/intimate-engagement/01-arch.jpg',
    year: '2026',
    location: 'Private Residence, India',
    client: 'Private Client',
    challenge: 'Design a small-scale, at-home engagement setting that still felt like a proper wedding-grade backdrop for photographs.',
    approach: 'A romantic, blush-and-ivory palette built around a single strong focal point rather than a full room takeover — fitting an intimate guest count without feeling under-decorated.',
    execution: 'A round floral arch of white and blush roses with trailing greenery, a fairy-lit sheer curtain backdrop, a tufted bench seat, and lantern accents on either side.',
    result: 'A compact but complete ceremony corner that carried the full visual weight of a larger celebration.',
    galleryImages: [
      '/portfolio/intimate-engagement/01-arch.jpg'
    ]
  },
  {
    id: 'bespoke-family-portrait',
    title: 'A Custom Family Portrait Keepsake',
    category: 'Bespoke Keepsakes',
    image: '/portfolio/bespoke-portrait/01-painting.jpg',
    year: '2026',
    location: 'India',
    client: 'Private Client',
    challenge: 'Give a new family a lasting, personal keepsake of their newborn\'s arrival — something beyond photography.',
    approach: 'Commissioning a hand-painted portrait rather than a printed photo, so the piece felt like an heirloom from day one.',
    execution: 'Coordinated an original framed acrylic portrait of the parents and their newborn, custom-composed and hand-finished in a soft pink palette.',
    result: 'A one-of-a-kind piece the family will keep long after the celebration itself is over — proof that "unforgettable" isn\'t limited to the day of the event.',
    galleryImages: [
      '/portfolio/bespoke-portrait/01-painting.jpg'
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
    quote: 'Puram Events turns pressure into absolute art. Their absolute focus on high design and precise timelines was spectacular.'
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
    quote: 'If you want absolute perfection, complete peace of mind, and breathtaking design that leaves people speechless—you call Puram.'
  },
  {
    id: 'story-3',
    clientName: 'Reema Nair',
    clientRole: 'Bride',
    company: 'Private Kerala Wedding',
    eventName: 'Traditional Kerala Kalyanam',
    challenge: 'We wanted a wedding that actually felt Kerala — the right sadya, the right flowers, the right rituals — instead of a generic "Indian wedding" package with none of it done properly.',
    solution: 'Puram\'s team took the time to understand exactly how our families wanted the ceremony run, then built the banana-leaf feast, floral styling and mandap around those specifics instead of a template.',
    outcome: 'Our grandparents said it reminded them of weddings from their own childhood. That mattered more to us than anything Instagram-worthy.',
    quote: 'They didn\'t just decorate our wedding, they understood it.'
  },
  {
    id: 'story-4',
    clientName: 'Vikram Chauhan',
    clientRole: 'Events Lead',
    company: 'Private Corporate Client',
    eventName: 'Annual Team Appreciation Evening',
    challenge: 'A modest-budget internal appreciation evening for our team that still needed to feel considered and warm, not like a leftover conference room with balloons.',
    solution: 'Puram proposed a tighter, better-styled setup rather than spreading the budget thin — a strong focal backdrop and lighting instead of decorating every wall.',
    outcome: 'The room looked far more expensive than what we spent, and the team actually noticed the difference from previous years.',
    quote: 'Proof that a smaller budget done well beats a bigger budget done generically.'
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
