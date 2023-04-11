import React from "react"

import CategoryPreview from "../preview/preview.component"
import { useSelector } from "react-redux"
import { selectCategoriesMap } from "../../store/categories/categories.selector"


const CategoriesPreview = () => {
  // const {categoriesMap} = useContext(CategoriesContext)
  const categoriesMap = useSelector(selectCategoriesMap)

  return (
    <div>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return < CategoryPreview key={title} title={title} products={products}/>
      })}
    </div>
  )
}

export default CategoriesPreview;