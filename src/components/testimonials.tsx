import type { Testimonial } from '@/data/site';
import { Icon } from './icon';
export function Testimonials({ reviews }: { reviews: Testimonial[] }) {
  return <div className="reviews-grid">{reviews.map(review => <figure className="review" key={review.id}><div className="review-rating"><span aria-hidden="true">{Array.from({ length: 5 }, (_, index) => <span className="review-star" key={index}><Icon name="ri-star-line" /><span className="review-star-fill" style={{ width: `${Math.max(0, Math.min(1, review.rating - index)) * 100}%` }}><Icon name="ri-star-fill" /></span></span>)}</span><span className="sr-only">Rated {review.rating} out of 5 stars</span><span className="rating-number" aria-hidden="true">{review.rating}/5</span></div><blockquote><p>{review.reviewText}</p></blockquote><figcaption>{review.clientDisplayName}{review.storeName && review.storeNameVerified && <span>{review.storeName}</span>}</figcaption></figure>)}</div>;
}
