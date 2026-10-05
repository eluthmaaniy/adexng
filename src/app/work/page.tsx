import type { Metadata } from 'next';
import { Icon } from '@/components/icon';
import { site } from '@/data/site';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ProjectPreview } from '@/components/project-preview';
export const metadata: Metadata = { title: 'My work | Adex', description: 'Explore Adex’s past work, with storefront screenshots, shopping descriptions and project links.', alternates: { canonical: '/work' }, openGraph: { title: 'My work | Adex', description: 'Explore stores from my portfolio and their shopping experiences.', url: '/work' } };
export default function WorkPage() {
  return <><a className="skip-link" href="#main">Skip to content</a><Header /><main id="main" className="container section work-page"><p className="eyebrow">My work</p><h1>{site.work.allTitle}</h1><p className="page-description">{site.work.allDescription}</p><div className="project-grid">{site.projects.map(project => <ProjectPreview key={project.id} project={project} />)}</div><section className="other-work" aria-labelledby="other-work-title"><h2 id="other-work-title">Other past work</h2>{site.otherPastWork.map(project => <a key={project.url} className="text-link" href={project.url} target="_blank" rel="noopener noreferrer">{project.name}<Icon name="ri-external-link-line" /><span className="sr-only"> (opens in a new tab)</span></a>)}</section></main><Footer /></>;
}
