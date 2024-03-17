import { useState } from "react"
import { TProduct } from "../../../types/app.types"
import { SelectSize } from "./SelectSize"
import { SelectColor } from "./SelectColor"
import heartIcon from "../../../assets/images/icons/heart.svg"
import bagIcon from "../../../assets/images/icons/bag.svg"

type ProductInfoProps = {
  product: TProduct
}

export const ProductInfo = ({ product }: ProductInfoProps) => {
  const [selectedSize, setSelectedSize] = useState("4")
  const [selectedColor, setSelectedColor] = useState("white")

  const handleSelectSize = (size: string) => {
    setSelectedSize(size)
  }

  const handleSelectColor = (color: string) => {
    setSelectedColor(color)
  }

  return (
    <div className="product-info">
      <h2 className="product-info__title seccond-title">{product.title}</h2>
      <p className="product-info__name">{product.name}</p>
      <p className="product-info__price product-price">{product.price} грн.</p>
      <SelectSize
        sizes={product.sizes}
        selectedSize={selectedSize}
        handleSelectSize={handleSelectSize}
      />
      <SelectColor
        colors={product.colors}
        selectedColor={selectedColor}
        handleSelectColor={handleSelectColor}
      />
      <h3 className="product-info__desc-title">інформація про товар</h3>
      <article className="product-info__article">
        <p className="product-info__desc-text">
          Терморегуляція забезпечить вам тепло в будь-якій ситуації.<br />
          Сучасні технології дозволяють нашому термокостюму адаптуватися до вашого тіла та навколишнього середовища.
        </p>
      </article>
      <article className="product-info__article">
        <p className="product-info__desc-text">
          Легкість та еластичність для максимальної свободи рухів.<br />
          Забудьте про невигоди - наш термокостюм розроблений з урахуванням вашої активності.
        </p>
      </article>
      <article className="product-info__article">
        <p className="product-info__desc-text">
          Дихаючі тканини для оптимальної вентиляції.<br />
          Забудьте про  потовиділення - наш термокостюм дозволяє шкірі "дихати", забезпечуючи вам комфорт під час активної діяльності.
        </p>
      </article>
      <div className="product-info__buttons">
        <button className="main-btn btn">оформити замовлення</button>
        <button className="seccond-btn btn">купити у кредит</button>
        <button className="icon">
          <img src={heartIcon} alt="Heart" />
        </button>
        <button className="icon">
          <img src={bagIcon} alt="Bag" />
        </button>
      </div>
    </div>
  )
}
