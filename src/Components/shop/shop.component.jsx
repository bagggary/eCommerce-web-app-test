import React , {useEffect} from "react"
import { Routes , Route } from "react-router-dom"
import CategoriesPreview from "../categoriesPreview/categoriesPreview.component"
import CategoryCom from "../category/category.component"
import { useDispatch } from "react-redux"
import { fetchCategoriesStart } from "../../store/categories/category.action"


const Shop = () => {
  const dispatch = useDispatch()

  useEffect(()=>{
     dispatch(fetchCategoriesStart())
      }, [])
      
  return (
      <Routes>
        <Route index element = {<CategoriesPreview/>} />
        <Route path = ":Category" element = {<CategoryCom/>} />
      </Routes>
  )
}

export default Shop