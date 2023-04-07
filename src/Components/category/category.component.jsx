import React , {useState , useEffect , useContext} from "react"
import { CategoriesContext } from "../../contexts/categories.context";
import { useParams } from "react-router-dom";
import ProductCard from "../ProductCards/ProductCards.component";


const CategoryCom = ()=>{
  const {Category } = useParams();
  const {categoriesMap } = useContext(CategoriesContext)
  const [products , setProducts] = useState(categoriesMap[Category])


  useEffect(()=>{
    setProducts(categoriesMap[Category])
  } , [categoriesMap] , [Category])


  return (
    <React.Fragment>
       <h2 className=" text-4xl mb-[25px] text-center">{Category.toUpperCase()}</h2>
    <div className="grid grid-cols-4 gap-x-5 gap-y-[50px]">
      {products && products.map(product => (
        <ProductCard key={product.id} product={product} />
        ))}
    </div>
        </React.Fragment>
  )
}
export default CategoryCom