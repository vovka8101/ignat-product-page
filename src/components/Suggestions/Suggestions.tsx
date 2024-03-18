import heartIcon from "../../assets/images/icons/heart.svg"
import img1 from "../../assets/images/product-img-1.png"
import img2 from "../../assets/images/product-img-2.png"
import img3 from "../../assets/images/product-img-3.png"

export const Suggestions = () => {
  return (
    <section className="suggestions">
      <h2 className="suggestions__title seccond-title">Ще може сподобатись</h2>
      <div className="suggestions__item">
        <div className="item__img-container">
          <button className="like-btn">
            <img src={heartIcon} alt="Heart" className="like-btn__img" />
          </button>
          <img src={img1} alt="Product" className="item__img" />
        </div>
        <h4 className="item__title">Термобілизна для бодібілдерів</h4>
        <p className="item__gender item__text">Для чоловіків</p>
        <p className="item__colors item__text">2 кольори</p>
        <p className="item__price product-price">4000 грн.</p>
      </div>
      <div className="suggestions__item">
        <div className="item__img-container">
          <button className="like-btn">
            <img src={heartIcon} alt="Heart" className="like-btn__img" />
          </button>
          <img src={img2} alt="Product" className="item__img" />
        </div>
        <h4 className="item__title">Термобілизна для бодібілдерів</h4>
        <p className="item__gender item__text">Для чоловіків</p>
        <p className="item__colors item__text">2 кольори</p>
        <p className="item__price product-price">4000 грн.</p>
      </div>
      <div className="suggestions__item">
        <div className="item__img-container">
          <button className="like-btn">
            <img src={heartIcon} alt="Heart" className="like-btn__img" />
          </button>
          <img src={img3} alt="Product" className="item__img" />
        </div>
        <h4 className="item__title">Термобілизна для бодібілдерів</h4>
        <p className="item__gender item__text">Для чоловіків</p>
        <p className="item__colors item__text">2 кольори</p>
        <p className="item__price product-price">4000 грн.</p>
      </div>
      <p className="suggestions__show-more">
        <a href="#">дивитись більше</a>
      </p>
    </section>
  )
}
