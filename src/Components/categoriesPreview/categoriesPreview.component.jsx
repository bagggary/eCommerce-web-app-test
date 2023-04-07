import React from "react"
import { useContext  } from "react"


import { CategoriesContext } from "../../contexts/categories.context"
import CategoryPreview from "../preview/preview.component"


const CategoriesPreview = () => {
  const {categoriesMap} = useContext(CategoriesContext)
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