import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound, permanentRedirect } from 'next/navigation';
import { site } from '@/data/site';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ProjectImage } from '@/components/project-preview';
import { Icon } from '@/components/icon';
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return site.projects.map(project => ({ slug: project.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (site.otherPastWork.some(item => item.slug === slug)) return {};
  const project = site.projects.find(item => item.slug === slug);
  if (!project) return {};
  return { title: `${project.name} | My work | Adex`, description: project.summary, alternates: { canonical: `/work/${project.slug}` }, openGraph: { title: `${project.name} | Adex`, description: project.summary, url: `/work/${project.slug}`, images: project.screenshot ? [project.screenshot.src] : [] } };
}
export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  if (site.otherPastWork.some(item => item.slug === slug)) permanentRedirect('/work');
  const project = site.projects.find(item => item.slug === slug);
  if (!project) notFound();
  return <><a className="skip-link" href="#main">Skip to content</a><Header /><main id="main" className="container section project-page"><Link href="/work" className="text-link"><Icon name="ri-arrow-left-line" />All work</Link><header className="project-page-heading">{project.category && <p className="eyebrow">{project.category}</p>}<h1>{project.name}</h1></header><ProjectImage project={project} priority large /><div className="project-story"><div><h2>The storefront</h2><p>{project.summary}</p><a href={project.liveUrl} className="text-link" target="_blank" rel="noopener noreferrer">{site.work.visitLabel}<Icon name="ri-external-link-line" /><span className="sr-only"> (opens in a new tab)</span></a></div>{project.features.length > 0 && <div><h2>{site.work.featuresTitle}</h2><ul>{project.features.map(feature => <li key={feature}>{feature}</li>)}</ul></div>}</div><section className="project-enquiry"><h2>{site.work.enquiryTitle}</h2><p>{site.work.enquiryDescription}</p><a className="button" href={`${site.identity.whatsappBaseUrl}?text=${encodeURIComponent(`Hi Adex, I’d like to discuss my Shopify store. I saw your ${project.name} project and have a similar project in mind.`)}`}>Discuss this on WhatsApp<Icon name="ri-whatsapp-line" /></a><Link className="text-link" href="/#contact">Tell me about your store<Icon name="ri-arrow-right-line" /></Link></section></main><Footer /></>;
}
