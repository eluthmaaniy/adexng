import Image from 'next/image';
import Link from 'next/link';
import { site, type Project } from '@/data/site';
import { Icon } from './icon';
export function ProjectImage({ project, priority = false, large = false }: { project: Project; priority?: boolean; large?: boolean }) {
  return <div className="project-image">{project.screenshot ? <Image src={project.screenshot.src} alt={project.screenshot.alt} width={project.screenshot.width} height={project.screenshot.height} sizes={large ? "(max-width: 1200px) calc(100vw - 48px), 1160px" : "(max-width: 767px) calc(100vw - 40px), (max-width: 1200px) 50vw, 580px"} priority={priority} /> : null}</div>;
}
export function ProjectPreview({ project }: { project: Project }) {
  return <article className="project"><Link href={`/work/${project.slug}`} className="project-cover-link" aria-label={`View ${project.name} project`}><ProjectImage project={project} /></Link><div className="project-heading"><h3><Link href={`/work/${project.slug}`}>{project.name}</Link></h3></div>{project.category && <p className="project-service">{project.category}</p>}<p className="project-summary">{project.summary}</p><Link className="text-link" href={`/work/${project.slug}`}>{site.ui.viewProject}<Icon name="ri-arrow-right-up-line" /></Link></article>;
}
