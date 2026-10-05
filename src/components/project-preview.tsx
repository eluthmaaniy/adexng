import Image from 'next/image';
import { site } from '@/data/site';
import type { Project } from '@/data/site';
import { Icon } from './icon';
export function ProjectPreview({ project, index }: { project: Project; index: number }) {
  return <article className={`project project-${project.format}`}>
    <div className="project-image">{project.screenshot ? <Image src={project.screenshot.src} alt={project.screenshot.alt} fill sizes="(max-width: 767px) 100vw, 60vw" /> : <><div className="placeholder-top"><span>PROJECT {String(index + 1).padStart(2, '0')}</span><Icon name="ri-image-line" /></div><div className="screenshot-placeholder"><Icon name="ri-image-add-line" /><span>{site.ui.screenshot}</span><small>{site.ui.screenshotNote}</small></div><span className="placeholder-bottom">{site.ui.screenshotFooter}</span></>}</div>
    <div className="project-heading"><h3>{project.name}</h3>{project.placeholder && <span className="content-label">{site.ui.contentPending}</span>}</div>
    <p className="project-service">{project.service}</p><p className="project-summary">{project.summary}</p>
    {project.detailUrl && <a className="text-link" href={project.detailUrl}>{site.ui.viewProject} <Icon name="ri-arrow-right-up-line" /></a>}
  </article>;
}
