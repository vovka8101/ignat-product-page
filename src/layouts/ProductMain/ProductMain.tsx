import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs"
import { Product } from "../../components/Product/Product"
import { Reviews } from "../../components/Reviews/Reviews"
import { Suggestions } from "../../components/Suggestions/Suggestions"
import { location } from "../../data/data"

export const ProductMain = () => {
  return (
    <main className="product-main main">
      <div className="content">
        <Breadcrumbs location={location} />
        <Product />
        <Reviews />
        <Suggestions />
      </div>
    </main>
  )
}
