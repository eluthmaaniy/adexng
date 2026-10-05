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
  ui: { talk: 'Let’s talk', nextStep: 'Your next step', aboutLink: 'Let’s talk about your store', contentPending: 'Content pending', viewProject: 'View project', screenshot: 'Store screenshot', screenshotNote: 'Placeholder · real project to be added', screenshotFooter: 'A space for the details that matter.', portraitTitle: 'Adex’s portrait goes here.', portraitLabel: 'Photo placeholder', portraitFooter: ['A personal introduction.', 'A real photo, coming next.'], placeholders: { name: 'Your name', email: 'you@example.com', store: 'https://your-store.com', description: 'What do you have in mind for your store?' } },
  portrait: { src: '/images/adex-profile.webp', alt: 'Portrait of Adex wearing a dark suit and tie', width: 1024, height: 1024 } satisfies ImageAsset,
  banner: { src: '/images/adex-cover.webp', alt: 'Adex’s Shopify specialist banner with his portrait and illustrative store dashboard artwork', width: 1280, height: 720, caption: 'Illustrative brand artwork. Figures shown are not verified project results.' },
  work: { eyebrow: 'Selected work', title: 'A closer look at the work.', description: 'Explore a few stores from my portfolio, from home essentials to wellness and car accessories.', allTitle: 'Stores from my portfolio.', allDescription: 'Take a closer look at five of my past projects and how their storefronts present products.', allLink: 'View all work', featuresTitle: 'Inside the storefront', enquiryTitle: 'Have a similar project in mind?', enquiryDescription: 'Tell me about your store and what you’d like to build or improve.', visitLabel: 'Visit live store', screenshotUnavailable: 'Screenshot unavailable', unavailableNote: 'The live storefront is currently unavailable.' },
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
      id: 'faith-forged-designs', slug: 'faith-forged-designs', name: 'Faith Forged Designs', category: null, featured: false, liveUrl: 'https://faithforgeddesigns.com/',
      summary: 'This project is part of my portfolio, but its live storefront is currently unavailable. I’ve left the screenshot space open rather than show an unrelated store. There isn’t enough accessible content to describe its products or shopping experience accurately. You can still follow the store link below, or talk to me about the kind of storefront you have in mind.',
      features: [], screenshot: null, contribution: null, results: [],
    },
    {
      id: 'flex-rack', slug: 'flex-rack', name: 'Flex Rack', category: 'Kitchen tools & appliances', featured: false, liveUrl: 'https://flexrack.net/',
      summary: 'Flex Rack focuses on kitchen tools and appliances for people equipping or updating their home kitchens. Large homepage slides introduce everyday cooking products, followed by collection groups and a bundle-shopping section. The catalogue presents appliances such as pressure cookers and air fryers with prices, product options and quick-view controls. Availability and price filters, sorting and grid-density choices give shoppers several ways to narrow and compare the range.',
      features: ['Kitchen-focused homepage slideshow', 'Appliance collection groups and bundle-shopping section', 'Catalogue availability and price filters with sorting', 'Priced product cards, options and quick-view controls'],
      screenshot: { src: '/projects/flex-rack-homepage.webp', alt: 'Flex Rack homepage featuring everyday kitchen appliances and a shop link', width: 1440, height: 990 }, contribution: null, results: [],
    },
  ] satisfies Project[],
  services: {
    eyebrow: 'How I can help', title: 'Your store. The right attention.',
    items: [
      { title: 'Shopify store builds', icon: 'ri-store-2-line', description: 'I bring your products, pages and navigation together in a Shopify store that’s clear to browse and easy for you to manage.' },
      { title: 'Store redesigns', icon: 'ri-layout-4-line', description: 'I rethink the layout and shopping experience of your existing store, so your brand and products feel at home.' },
      { title: 'Theme customisation and store improvements', icon: 'ri-tools-line', description: 'I adapt your theme and refine the details, from product pages to mobile layouts, around what your store needs.' },
    ],
  },
  about: { eyebrow: 'A little about me', title: 'The person behind your store.', paragraphs: ['I’m Adex. I start by understanding what you want your store to do, who you’re selling to and what needs attention. That gives us a clear direction before I start building.', 'I’ll explain the choices I make in plain language and leave room for your feedback. My approach is simple: thoughtful work, a clear scope and a store that feels like yours.'] },
  process: { eyebrow: 'Working together', title: 'Clear from the first conversation.', steps: [
    { title: 'Tell me about your store.', description: 'Share your idea, your current store and the things you’d like to change.' },
    { title: 'Agree on the scope.', description: 'We decide what’s included, what you’ll need to provide and how the work will move forward.' },
    { title: 'Build, review and launch.', description: 'I build the agreed work, we review it together and prepare your store for launch.' },
  ] },
  contact: { title: 'What would you like to improve about your store?', description: 'I’m Adex. Tell me what you’re building, or what isn’t working yet. You can reach me directly on WhatsApp or email.', preview: 'Form preview — enquiries are not being sent yet.', destination: null as string | null, labels: { name: 'Your name', email: 'Email address', store: 'Store URL (optional)', description: 'Tell me about your project' }, button: 'Send enquiry', disabledNote: 'Submission will be available in a later phase.' },
  footer: { specialism: 'Shopify stores, built with care.' },
  socials: [{ label: 'Email', url: 'mailto:adexexpert007@gmail.com', icon: 'ri-mail-line' }, { label: 'Instagram', url: 'https://www.instagram.com/adex7.77/', icon: 'ri-instagram-line' }] satisfies SocialLink[],
  testimonials: [] as Testimonial[],
};
