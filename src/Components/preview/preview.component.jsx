
import ProductCard from "../ProductCards/ProductCards.component"
import { Link } from "react-router-dom"


const CategoryPreview = ({title , products}) => {
  return (
    <div className="flex flex-col mb-[30px]">
      <h2>
        <Link className=" text-[28px] mb-[25px] cursor-pointer" to = {title}>{title.toUpperCase()}</Link>
      </h2>
      <div className="grid grid-cols-4 gap-x-5">
        {
          products
          .filter((_,idx ) => idx < 4)
          .map((product) => {
            return  (
              <ProductCard key={product.id} product={product} />
            )
          })
        }
      </div>
    </div>
  )
}
export default CategoryPreview;