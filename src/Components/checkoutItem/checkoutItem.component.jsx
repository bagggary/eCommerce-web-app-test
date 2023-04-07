import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";


const CheckoutItem = ({cartItem})=> {
  const {clearItemFromCart , addCartItems , removeItemToCart } = useContext(CartContext)

  const {name , imageUrl , price , quantity } = cartItem
return (
  <div className="w-full flex min-h-[100px] border-b border-solid border-gray-700 py-[15px] items-center">
    <div className="w-[23%] pr-[15px]">
      <img src={imageUrl} alt={`${name}`} className="w-full h-full"/>
    </div>
    <span className="w-[23%]">{name}</span>
    <span className="w-[23%] flex">
           <div className=" cursor-pointer" onClick={()=>removeItemToCart(cartItem)}>&#10094;</div>
           <span className="mx-[10px]">{quantity}</span>  
           <div className=" cursor-pointer" onClick={()=>addCartItems(cartItem)}>&#10095;</div>
      </span>
    <span className="w-[23%]">{price}</span>
    <div className=" pl-3 cursor-pointer " onClick={()=>clearItemFromCart(cartItem)}>&#10005;</div>
  </div>
)
}
export default CheckoutItem ;