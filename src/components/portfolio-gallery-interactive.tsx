'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { filterCategories, fullProjects, type FullCategory, type GalleryImage } from '@/data/portfolio-gallery';
import { Icon } from './icon';

const slidesOf = (element: HTMLElement) => Array.from(element.children) as HTMLElement[];
const atEnd = (element: HTMLElement) => element.scrollLeft + element.clientWidth >= element.scrollWidth - 2;
const nearestSlide = (element: HTMLElement) => {
  const offsets = slidesOf(element).map(slide => Math.abs(slide.offsetLeft - element.scrollLeft));
  return offsets.indexOf(Math.min(...offsets));
};

export function GallerySlider({ items }: { items: GalleryImage[] }) {
  const track = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState(0);
  const scrollTo = (index: number) => {
    const element = track.current;
    const target = element && slidesOf(element)[(index + items.length) % items.length];
    if (element && target) element.scrollTo({ left: target.offsetLeft, behavior: 'smooth' });
  };
  const step = (direction: 1 | -1) => {
    const element = track.current;
    if (!element) return;
    if (direction === 1 && atEnd(element)) scrollTo(0);
    else if (direction === -1 && element.scrollLeft <= 2) element.scrollTo({ left: element.scrollWidth, behavior: 'smooth' });
    else scrollTo(nearestSlide(element) + direction);
  };
  useEffect(() => {
    const element = track.current;
    if (!element) return;
    const onScroll = () => setSelected(atEnd(element) ? element.children.length - 1 : nearestSlide(element));
    element.addEventListener('scroll', onScroll, { passive: true });
    return () => element.removeEventListener('scroll', onScroll);
  }, []);
  return <div className="gallery-slider">
    <div className="gallery-slider-heading"><h3>Selected projects</h3><div className="gallery-slider-controls"><button type="button" aria-label="Previous project" onClick={() => step(-1)}><Icon name="ri-arrow-left-s-line" /></button><button type="button" aria-label="Next project" onClick={() => step(1)}><Icon name="ri-arrow-right-s-line" /></button></div></div>
    <div className="gallery-slider-track" ref={track}>{items.map(item => <figure className="gallery-card gallery-slide" key={item.src}><div className="gallery-card-image"><Image src={item.src} alt={item.title} fill sizes="(max-width: 767px) 85vw, (max-width: 1023px) 50vw, 380px" /></div><figcaption>{item.title}</figcaption></figure>)}</div>
    <div className="gallery-slider-dots">{items.map((item, index) => <button type="button" key={item.src} aria-label={`Go to slide ${index + 1}`} aria-current={index === selected ? 'true' : undefined} onClick={() => scrollTo(index)} />)}</div>
  </div>;
}

const pageSize = 12;

export function ProjectBrowser() {
  const [filter, setFilter] = useState<FullCategory | 'all'>('all');
  const [visible, setVisible] = useState(pageSize);
  const projects = filter === 'all' ? fullProjects : fullProjects.filter(project => project.category === filter);
  const choose = (value: FullCategory | 'all') => { setFilter(value); setVisible(pageSize); };
  return <div className="project-browser">
    <div className="gallery-filters" role="group" aria-label="Filter projects by category">{filterCategories.map(category => <button type="button" key={category.value} aria-pressed={filter === category.value} onClick={() => choose(category.value)}>{category.label}</button>)}</div>
    <p className="gallery-count" aria-live="polite">Showing {Math.min(visible, projects.length)} of {projects.length} {projects.length === 1 ? 'project' : 'projects'}</p>
    {projects.length > 0 ? <div className="gallery-grid">{projects.slice(0, visible).map(project => <article className="gallery-card" key={project.image}><div className="gallery-card-image"><Image src={project.image} alt={project.alt} fill sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1023px) 50vw, 380px" /></div><div className="gallery-card-body"><h3>{project.title}</h3><p>{project.desc}</p><p className="gallery-ordered-by">Ordered by <span>{project.orderedBy}</span></p></div></article>)}</div> : <p className="section-empty">No projects in this category yet.</p>}
    {visible < projects.length && <button type="button" className="button button-secondary gallery-load-more" onClick={() => setVisible(count => count + pageSize)}>Load more projects<Icon name="ri-arrow-down-line" /></button>}
  </div>;
}
