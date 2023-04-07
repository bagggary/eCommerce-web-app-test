import React from "react"
import { Routes , Route } from "react-router-dom"
import CategoriesPreview from "../categoriesPreview/categoriesPreview.component"
import CategoryCom from "../category/category.component"


const Shop = () => {
  return (
      <Routes>
        <Route index element = {<CategoriesPreview/>} />
        <Route path = ":Category" element = {<CategoryCom/>} />
      </Routes>
  )
}

export default Shop