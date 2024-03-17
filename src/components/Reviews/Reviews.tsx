import { ReviewsSwiper } from "../Swipers/ReviewsSwiper"
import { reviews } from "../../data/data"

export const Reviews = () => {
  return (
    <section className="reviews">
      <div className="reviews__navigation">
        <h2 className="title seccond-title">Відгуки про товар</h2>
        <span className="count">({reviews.length})</span>
      </div>
      <ReviewsSwiper reviews={reviews} />
    </section>
  )
}
