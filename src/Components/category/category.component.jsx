import React , {useState , useEffect } from "react"
import { useParams } from "react-router-dom";
import ProductCard from "../ProductCards/ProductCards.component";
import { useSelector } from "react-redux";
import { selectCategoriesMap, selectIsCategoriesIsLoading } from "../../store/categories/categories.selector";
import Spinner from '../../Components/spinner/spinner.component'

const CategoryCom = ()=>{
  const {Category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsCategoriesIsLoading)


  const [products , setProducts] = useState(categoriesMap[Category])

  useEffect(()=>{
    setProducts(categoriesMap[Category])
  } , [categoriesMap] , [Category])



  return (
    <React.Fragment>
       <h2 className=" text-4xl mb-[25px] text-center">{Category.toUpperCase()}</h2>
       {
        isLoading ? <Spinner /> : <div className="grid grid-cols-4 gap-x-5 gap-y-[50px]">
        {products && products.map(product => (
          <ProductCard key={product.id} product={product} />
          ))}
      </div>
       }
    
        </React.Fragment>
  )
}
export default CategoryCom