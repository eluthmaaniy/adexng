export type ImageAsset = { src: string; alt: string; width: number; height: number };
export type Project = {
  id: string;
  slug: string;
  name: string;
  category: string | null;
  summary: string;
  features: string[];
  liveUrl: string;
  screenshot: ImageAsset | null;
  featured: boolean;
  // Only populate after owner confirmation. Never infer from the current storefront.
  contribution: { scope: string; confirmedBy: string } | null;
  results: { description: string; sourceUrl: string }[];
};
const whatsappBaseUrl = 'https://wa.me/2349071740352';
const whatsappMessage = 'Hi Adex, I’d like to discuss my Shopify store.';
export type Testimonial = { quote: string; name: string; role?: string; sourceUrl: string; verified: true };
export type SocialLink = { label: string; url: string; icon: string };
export const site = {
  name: 'Adex',
  url: 'https://adex.com.ng',
  identity: { whatsappNumber: '+2349071740352', whatsappBaseUrl, whatsappMessage, whatsappUrl: `${whatsappBaseUrl}?text=${encodeURIComponent(whatsappMessage)}`, instagramHandle: '@adex7.77', instagramUrl: 'https://www.instagram.com/adex7.77/', email: 'adexexpert007@gmail.com', emailUrl: 'mailto:adexexpert007@gmail.com' },
  navigation: [{ label: 'Work', href: '/work' }, { label: 'Services', href: '/#services' }, { label: 'About', href: '/#about' }, { label: 'Contact', href: '/#contact' }],
  hero: {
    eyebrow: 'Adex · Shopify store expert',
    title: 'A Shopify store you’re proud to send customers to.',
    description: 'Hi, I’m Adex. I help store owners build, redesign and improve their Shopify stores, with attention to the details your customers use every day.',
    primary: 'Tell me about your store', secondary: 'Explore my work',
  },
  ui: { talk: 'Let’s talk', nextStep: 'Your next step', aboutLink: 'Let’s talk about your store', viewProject: 'View project', placeholders: { name: 'Your name', email: 'you@example.com', store: 'your-store.com', description: 'Share your goals, what needs attention and any relevant examples.' } },
  portrait: { src: '/images/adex-profile.webp', alt: 'Portrait of Adex wearing a dark suit and tie', width: 1024, height: 1024 } satisfies ImageAsset,
  banner: { src: '/images/adex-cover.webp', alt: 'Adex’s Shopify specialist banner with his portrait and illustrative store dashboard artwork', width: 1280, height: 720, caption: 'Illustrative brand artwork. Figures shown are not verified project results.' },
  work: { eyebrow: 'Selected work', title: 'A closer look at the work.', description: 'Explore a few stores from my portfolio, from home essentials to wellness and car accessories.', allTitle: 'Stores from my portfolio.', allDescription: 'Explore the storefronts in my portfolio and find links to other past work.', allLink: 'View all work', featuresTitle: 'Inside the storefront', enquiryTitle: 'Have a similar project in mind?', enquiryDescription: 'Tell me about your store and what you’d like to build or improve.', visitLabel: 'Visit live store' },
  otherPastWork: [{ name: 'Faith Forged Designs', slug: 'faith-forged-designs', url: 'https://faithforgeddesigns.com/' }],
  projects: [
    {
      id: 'zenrozone', slug: 'zenrozone', name: 'ZenroZone', category: 'Furniture & home essentials', featured: true, liveUrl: 'https://zenrozone.com/',
      summary: 'ZenroZone brings furniture, décor, lighting and practical home essentials into one catalogue for people furnishing or refreshing their homes. The storefront opens with room imagery and collection links, then introduces furniture, tools and décor in distinct groups. Product previews show prices and quick-view options, while the Dining Chairs page pairs an image gallery with dimensions, material details and shipping information to help shoppers compare the item.',
      features: ['Room-focused homepage imagery and collection links', 'Furniture, tools and décor collection groups', 'Priced product cards with quick-view controls', 'Dining Chairs gallery, specifications and shipping information'],
      screenshot: { src: '/projects/zenrozone-homepage.webp', alt: 'ZenroZone homepage showing furniture imagery and its home essentials introduction', width: 1440, height: 990 }, contribution: null, results: [],
    },
    {
      id: 'accesorioscar', slug: 'accesorioscar', name: 'Accesorioscar', category: 'Car accessories & detailing', featured: true, liveUrl: 'https://accesorioscar.com/',
      summary: 'Accesorioscar presents car-care products, interior technology and emergency accessories to Spanish-speaking drivers and motoring enthusiasts. A vehicle-led homepage points shoppers towards bundles and product categories, with popular items shown alongside prices. The detailing collection groups cleaning and polishing equipment in a product grid, with availability and price filters, sorting controls and product imagery. Delivery and returns information is surfaced near the navigation to support browsing decisions.',
      features: ['Spanish-language category navigation', 'Vehicle-led hero with bundle and catalogue links', 'Popular-product cards with visible prices', 'Detailing collection with availability, price and sorting controls'],
      screenshot: { src: '/projects/accesorioscar-homepage.webp', alt: 'Accesorioscar homepage featuring a car and Spanish-language shopping navigation', width: 1440, height: 990 }, contribution: null, results: [],
    },
    {
      id: 'zen-active', slug: 'zen-active', name: 'Zen Active', category: 'Wellness, nutrition & active living', featured: true, liveUrl: 'https://zenactive.store/',
      summary: 'Zen Active presents nutrition, wellness and active-living products for shoppers building an everyday wellness routine. Its homepage uses lifestyle imagery and routes into NeoLife, vitamins and fitness categories, alongside an explanation that the store operates independently. The catalogue brings supplements and exercise equipment into a priced product grid, with availability and price filters, sorting and visible stock status. Search and cart links remain available in the main navigation.',
      features: ['Lifestyle hero and category-led product discovery', 'Separate NeoLife, nutrition and fitness collection links', 'Catalogue filters, sorting and visible stock status', 'Search and cart navigation'],
      screenshot: { src: '/projects/zen-active-homepage.webp', alt: 'Zen Active homepage with wellness messaging, green styling and lifestyle photography', width: 1440, height: 990 }, contribution: null, results: [],
    },
    {
      id: 'flex-rack', slug: 'flex-rack', name: 'Flex Rack', category: 'Kitchen tools & appliances', featured: false, liveUrl: 'https://flexrack.net/',
      summary: 'Flex Rack focuses on kitchen tools and appliances for people equipping or updating their home kitchens. Large homepage slides introduce everyday cooking products, followed by collection groups and a bundle-shopping section. The catalogue presents appliances such as pressure cookers and air fryers with prices, product options and quick-view controls. Availability and price filters, sorting and grid-density choices give shoppers several ways to narrow and compare the range.',
      features: ['Kitchen-focused homepage slideshow', 'Appliance collection groups and bundle-shopping section', 'Catalogue availability and price filters with sorting', 'Priced product cards, options and quick-view controls'],
      screenshot: { src: '/projects/flex-rack-homepage.webp', alt: 'Flex Rack homepage featuring everyday kitchen appliances and a shop link', width: 1440, height: 990 }, contribution: null, results: [],
    },
  ] satisfies Project[],
  services: {
    eyebrow: 'How I can help', title: 'Build, redesign or refine your Shopify store.',
    items: [
      { title: 'Shopify store builds', icon: 'ri-store-2-line', description: 'Talk to me about storefront setup, organising your products and creating a shopping experience that fits your store.' },
      { title: 'Store redesigns', icon: 'ri-layout-4-line', description: 'I can help you rethink your existing layout, navigation and product presentation. Share what feels unclear or no longer fits your brand.' },
      { title: 'Theme customisation and store improvements', icon: 'ri-tools-line', description: 'Bring me specific theme changes or usability issues, from product-page details to mobile navigation. We’ll discuss what your store needs.' },
    ],
  },
  about: { eyebrow: 'A little about me', title: 'The person behind your store.', paragraphs: ['I’m Adex. I start by understanding what you want your store to do, who you’re selling to and what needs attention. That gives us a clear direction before I start building.', 'I’ll explain the choices I make in plain language and leave room for your feedback. My approach is simple: thoughtful work, a clear scope and a store that feels like yours.'] },
  process: { eyebrow: 'Working together', title: 'Clear from the first conversation.', steps: [
    { title: 'Discuss your store and goals.', description: 'Share your idea, your current store and the things you’d like to change.' },
    { title: 'Agree on scope and pricing.', description: 'I’ll discuss the work with you, then we agree on what’s included, pricing and what you’ll need to provide.' },
    { title: 'Build, review and hand over.', description: 'I build the agreed work, review it with you and hand over your store changes.' },
  ] },
  contact: { title: 'What would you like to improve about your store?', description: 'I’m Adex. Share your store, goals and what needs attention. Choose how you’d like to continue our conversation.', labels: { name: 'Your name', email: 'Email address', store: 'Store URL (optional)', service: 'Service needed', description: 'Tell me about your project' }, reviewNote: 'You’ll review and send your message in WhatsApp or your email app.', services: ['New Shopify store', 'Store redesign', 'Theme customisation', 'Store improvements', 'Not sure yet'], limits: { name: 100, email: 254, store: 2048, description: 2000 } },
  faq: { title: 'Before we discuss your store.', items: [
    { question: 'Can you work on my existing Shopify store?', answer: 'Yes. I offer redesigns, theme customisation and store improvements. Share your store link and what you’d like to change so we can discuss the scope.' },
    { question: 'What should I send before we start?', answer: 'Send your store link if you have one, your goals and any relevant examples. Tell me what’s working and what needs attention.' },
    { question: 'How much will my project cost?', answer: 'The cost depends on the work your store needs. I’ll discuss your project with you before we agree on scope and pricing.' },
    { question: 'Can I contact you before choosing a service?', answer: 'Yes. Choose “Not sure yet” in the enquiry, or contact me directly. Tell me about your store and we can discuss where to start.' },
  ] },
  footer: { specialism: 'Shopify stores, built with care.' },
  socials: [{ label: 'Email', url: 'mailto:adexexpert007@gmail.com', icon: 'ri-mail-line' }, { label: 'Instagram', url: 'https://www.instagram.com/adex7.77/', icon: 'ri-instagram-line' }] satisfies SocialLink[],
  testimonials: [] as Testimonial[],
};
