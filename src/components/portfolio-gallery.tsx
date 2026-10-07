import Image from 'next/image';
import { featuredShowcase, featuredWork, fullProjects, selectedProjects } from '@/data/portfolio-gallery';
import { Icon } from './icon';
import { GallerySlider, ProjectBrowser } from './portfolio-gallery-interactive';

export function PortfolioGallery() {
  return <section className="portfolio-gallery" aria-labelledby="portfolio-gallery-title">
    <p className="eyebrow">More from my portfolio</p>
    <h2 id="portfolio-gallery-title">Shopify projects across many niches.</h2>
    <p className="page-description">Store builds, theme customisation, conversion work and marketing for fashion, beauty, jewellery, food, furniture and more.</p>
    <article className="gallery-featured">
      <div className="gallery-featured-image"><Image src={featuredWork.image} alt={featuredWork.alt} fill sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1200px) 50vw, 580px" /><span className="gallery-image-count"><Icon name="ri-image-line" />{featuredWork.imageCount}<span className="sr-only"> images</span></span></div>
      <div className="gallery-featured-body"><p className="eyebrow">Featured</p><h3>{featuredWork.title}</h3><p>{featuredWork.description}</p><span className="gallery-tag">{featuredWork.tag}</span></div>
    </article>
    <GallerySlider items={selectedProjects} />
    <div className="gallery-showcase"><h3>Featured showcase</h3><div className="gallery-showcase-grid">{featuredShowcase.map((src, index) => <div className="gallery-showcase-item" key={src}><Image src={src} alt={`Featured project ${index + 1}`} fill sizes="(max-width: 767px) calc(50vw - 26px), 280px" /></div>)}</div></div>
    <div className="gallery-all"><h3>All projects ({fullProjects.length})</h3><ProjectBrowser /></div>
  </section>;
}
