export type Project = {
  id: string;
  name: string;
  service: string;
  summary: string;
  placeholder: boolean;
  format: 'wide' | 'tall';
  screenshot: { src: string; alt: string } | null;
  detailUrl: string | null;
};
export type Testimonial = { quote: string; name: string; role?: string; sourceUrl: string; verified: true };
export type SocialLink = { label: string; url: string; icon: string };
export const site = {
  name: 'Adex',
  navigation: [{ label: 'Work', href: '#work' }, { label: 'Services', href: '#services' }, { label: 'About', href: '#about' }, { label: 'Contact', href: '#contact' }],
  hero: {
    eyebrow: 'Adex · Shopify store expert',
    title: 'A Shopify store you’re proud to send customers to.',
    description: 'Hi, I’m Adex. I help store owners build, redesign and improve their Shopify stores, with attention to the details your customers use every day.',
    primary: 'Tell me about your store', secondary: 'Explore my work',
  },
  ui: { talk: 'Let’s talk', nextStep: 'Your next step', aboutLink: 'Let’s talk about your store', contentPending: 'Content pending', viewProject: 'View project', screenshot: 'Store screenshot', screenshotNote: 'Placeholder · real project to be added', screenshotFooter: 'A space for the details that matter.', portraitTitle: 'Adex’s portrait goes here.', portraitLabel: 'Photo placeholder', portraitFooter: ['A personal introduction.', 'A real photo, coming next.'], placeholders: { name: 'Your name', email: 'you@example.com', store: 'https://your-store.com', description: 'What do you have in mind for your store?' } },
  portrait: null as { src: string; alt: string } | null,
  work: { eyebrow: 'Selected work', title: 'A closer look at the work.', description: 'This is where I’ll share real stores, the work I did and the thinking behind each project.' },
  projects: [
    { id: 'project-01', name: 'Project placeholder 01', service: 'Service details to be added', summary: 'A real store screenshot, project scope and a short account of my work will go here.', placeholder: true, format: 'wide', screenshot: null, detailUrl: null },
    { id: 'project-02', name: 'Project placeholder 02', service: 'Service details to be added', summary: 'A second project will show another side of my Shopify work, once the details are confirmed.', placeholder: true, format: 'tall', screenshot: null, detailUrl: null },
  ] satisfies Project[],
  services: {
    eyebrow: 'How I can help', title: 'Your store. The right attention.',
    items: [
      { title: 'Shopify store builds', icon: 'ri-store-2-line', description: 'I bring your products, pages and navigation together in a Shopify store that’s clear to browse and easy for you to manage.' },
      { title: 'Store redesigns', icon: 'ri-layout-4-line', description: 'I rethink the layout and shopping experience of your existing store, so your brand and products feel at home.' },
      { title: 'Theme customisation and store improvements', icon: 'ri-tools-line', description: 'I adapt your theme and refine the details, from product pages to mobile layouts, around what your store needs.' },
    ],
  },
  about: { eyebrow: 'A little about me', title: 'The person behind your store.', paragraphs: ['I start by understanding what you want your store to do, who you’re selling to and what needs attention. That gives us a clear direction before I start building.', 'I’ll explain the choices I make in plain language and leave room for your feedback. My approach is simple: thoughtful work, a clear scope and a store that feels like yours.'] },
  process: { eyebrow: 'Working together', title: 'Clear from the first conversation.', steps: [
    { title: 'Tell me about your store.', description: 'Share your idea, your current store and the things you’d like to change.' },
    { title: 'Agree on the scope.', description: 'We decide what’s included, what you’ll need to provide and how the work will move forward.' },
    { title: 'Build, review and launch.', description: 'I build the agreed work, we review it together and prepare your store for launch.' },
  ] },
  contact: { title: 'What would you like to improve about your store?', description: 'Tell me what you’re building, or what isn’t working yet.', preview: 'Form preview — enquiries are not being sent yet.', destination: null as string | null, labels: { name: 'Your name', email: 'Email address', store: 'Store URL (optional)', description: 'Tell me about your project' }, button: 'Send enquiry', disabledNote: 'Submission will be available in a later phase.' },
  footer: { specialism: 'Shopify stores, built with care.' },
  socials: [] as SocialLink[],
  testimonials: [] as Testimonial[],
};
