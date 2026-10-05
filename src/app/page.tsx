import Image from 'next/image';
import Link from 'next/link';
import { Footer } from '@/components/footer';
import { ContactLinks } from '@/components/contact-links';
import { site } from '@/data/site';
import { Header } from '@/components/header';
import { Icon } from '@/components/icon';
import { ProjectPreview } from '@/components/project-preview';
import { ContactForm } from '@/components/contact-form';
export default function Home() {
  return <><a className="skip-link" href="#main">Skip to content</a><div id="top" /><Header /><main id="main">
    <section className="hero container" aria-labelledby="hero-title"><div className="hero-copy"><p className="eyebrow">{site.hero.eyebrow}</p><h1 id="hero-title">{site.hero.title}</h1><p className="hero-description">{site.hero.description}</p><div className="hero-actions"><a className="button" href={site.identity.whatsappUrl}>{site.hero.primary}<Icon name="ri-arrow-right-up-line" /></a><a className="text-link" href="#work">{site.hero.secondary}<Icon name="ri-arrow-down-line" /></a></div></div><div className="portrait-area"><Image className="portrait" src={site.portrait.src} alt={site.portrait.alt} width={site.portrait.width} height={site.portrait.height} sizes="(max-width: 767px) calc(100vw - 40px), 460px" priority /></div></section>
    <section id="work" className="section container work-section" aria-labelledby="work-title"><div className="section-intro"><div><p className="eyebrow">{site.work.eyebrow}</p><h2 id="work-title">{site.work.title}</h2></div><p>{site.work.description}</p></div><div className="project-grid">{site.projects.filter(project => project.featured).map(project => <ProjectPreview key={project.id} project={project} />)}</div><Link className="text-link all-work-link" href="/work">{site.work.allLink}<Icon name="ri-arrow-right-line" /></Link></section>
    <section id="services" className="section services-section" aria-labelledby="services-title"><div className="container"><p className="eyebrow">{site.services.eyebrow}</p><h2 id="services-title">{site.services.title}</h2><div className="services-grid">{site.services.items.map((service, index) => <article className="service" key={service.title}><div className="service-top"><Icon name={service.icon} /><span>0{index + 1}</span></div><h3>{service.title}</h3><p>{service.description}</p></article>)}</div></div></section>
    <section id="about" className="section container about-section" aria-labelledby="about-title"><div><p className="eyebrow">{site.about.eyebrow}</p><h2 id="about-title">{site.about.title}</h2></div><div className="about-copy">{site.about.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}<a className="text-link" href={site.identity.whatsappUrl}>{site.ui.aboutLink}<Icon name="ri-arrow-right-up-line" /></a></div></section>
    <figure className="container personal-banner"><Image src={site.banner.src} alt={site.banner.alt} width={site.banner.width} height={site.banner.height} sizes="(max-width: 767px) calc(100vw - 40px), 850px" /><figcaption>{site.banner.caption}</figcaption></figure>
    <section className="section container process-section" aria-labelledby="process-title"><p className="eyebrow">{site.process.eyebrow}</p><h2 id="process-title">{site.process.title}</h2><ol className="process-grid">{site.process.steps.map((step, index) => <li key={step.title}><span className="step-number">0{index + 1}</span><h3>{step.title}</h3><p>{step.description}</p></li>)}</ol></section>
    <section id="contact" className="section contact-section" aria-labelledby="contact-title"><div className="container contact-grid"><div className="contact-copy"><p className="eyebrow">{site.ui.nextStep}</p><h2 id="contact-title">{site.contact.title}</h2><p>{site.contact.description}</p><ContactLinks /></div><ContactForm /></div></section>
  </main><Footer /></>;
}
