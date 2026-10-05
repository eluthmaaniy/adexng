import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Profile, Skills, Credentials, ContactInvitation } from '@/components/profile';
import { LegacyFragments } from '@/components/legacy-fragments';
import { ProjectPreview } from '@/components/project-preview';
import { Testimonials } from '@/components/testimonials';
import { Icon } from '@/components/icon';
import { site, publishedReviews } from '@/data/site';
export default function Home() {
  return <><a className="skip-link" href="#main">Skip to content</a><Header /><main id="main"><LegacyFragments /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Person', name: site.name, url: site.url, jobTitle: 'Shopify Store Expert', image: site.profileSourceUrl, sameAs: [site.identity.instagramUrl] }).replace(/</g, '\u003c') }} /><Profile opening /><div className="reading-width"><section className="profile-content"><h2>About me</h2><p>{site.about.paragraphs[0]}</p><Link className="text-link" href="/about">More about me<Icon name="ri-arrow-right-line" /></Link></section><Skills /><Credentials /></div><section className="container home-work"><div className="section-intro"><h2>Selected work</h2><Link className="text-link" href="/work">View all work<Icon name="ri-arrow-right-line" /></Link></div><div className="project-grid">{site.projects.filter(project => project.featured).map(project => <ProjectPreview key={project.id} project={project} />)}</div></section>{publishedReviews.length > 0 && <section className="container profile-content"><h2>What my clients say</h2><Testimonials reviews={publishedReviews.slice(0,3)} /><Link className="text-link" href="/reviews">Read all reviews<Icon name="ri-arrow-right-line" /></Link></section>}<div className="container"><ContactInvitation /></div></main><Footer /></>;
}
