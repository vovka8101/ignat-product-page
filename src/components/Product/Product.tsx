import { ProductInfo } from "./ProductInfo/ProductInfo"
import { ProductView } from "./ProductView/ProductView"
import { product } from "../../data/data"

export const Product = () => {
  return (
    <section className="product">
      <ProductView />
      <ProductInfo product={product} />
    </section>
  )
}
