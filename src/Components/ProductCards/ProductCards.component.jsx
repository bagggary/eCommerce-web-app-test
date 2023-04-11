
import { addCartItems } from "../../store/cart/cart.action"
import { selectCartItems } from "../../store/cart/cart.selector"

import Button from "../button/button.component"
import { useDispatch, useSelector } from "react-redux"

 const ProductCard = ({product})=>{
  const cartItmes = useSelector(selectCartItems)
  const dispatch = useDispatch()
  
   const {name , price , imageUrl} = product
  return (
    <div className="group w-full flex flex-col h-[350px] items-center relative">
      <img src={imageUrl} alt={`${name}`} className="w-full h-[95%] object-cover mb-[5px] group-hover:opacity-80"/> 
      <div className="w-full h-[5%] flex justify-between text-lg">
        <span className="w-[90%] mb-[15px]">{name}</span>
        <span className="w-[10%]"> {price}</span>
      </div>
      <Button  type = 'button' onClick = {() => dispatch(addCartItems( cartItmes , product))} styles = 'opacity-70 absolute top-[255px] hidden group-hover:flex group-hover:opacity-[0.85]' buttonType='inverted'> Add to card </Button>
      {/* className= 'w-[80%] opacity-70 absolute top-[255px] hidden group-hover:flex group-hover:opacity-[0.85]' */}
      {/* className= 'opacity-70 absolute top-[255px] hidden group-hover:flex group-hover:opacity-[0.85]' */}
    </div>
  )

}

export default ProductCard