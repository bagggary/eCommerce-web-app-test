import { useContext } from "react"
import { CartContext } from "../../contexts/cart.context"

import Button from "../button/button.component"

 const ProductCard = ({product})=>{

   const {name , price , imageUrl} = product
   const {addCartItems} = useContext(CartContext)
  return (
    <div className="group w-full flex flex-col h-[350px] items-center relative">
      <img src={imageUrl} alt={`${name}`} className="w-full h-[95%] object-cover mb-[5px] group-hover:opacity-80"/> 
      <div className="w-full h-[5%] flex justify-between text-lg">
        <span className="w-[90%] mb-[15px]">{name}</span>
        <span className="w-[10%]"> {price}</span>
      </div>
      <Button  type = 'button' onClick = {() => addCartItems(product)} styles = 'opacity-70 absolute top-[255px] hidden group-hover:flex group-hover:opacity-[0.85]' buttonType='inverted'> Add to card </Button>
      {/* className= 'w-[80%] opacity-70 absolute top-[255px] hidden group-hover:flex group-hover:opacity-[0.85]' */}
      {/* className= 'opacity-70 absolute top-[255px] hidden group-hover:flex group-hover:opacity-[0.85]' */}
    </div>
  )

}

export default ProductCard