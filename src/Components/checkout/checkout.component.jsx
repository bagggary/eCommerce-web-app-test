import CheckoutItem from "../checkoutItem/checkoutItem.component";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { selectCartTotal } from "../../store/cart/cart.selector";


const Checkout = () => {
  const cartItems = useSelector(selectCartItems)
  const total = useSelector(selectCartTotal)
    return (
    <div className="w-[55%] min-h-[90vh] flex flex-col items-center mt-[50px] mx-auto mb-0">
      <div className="w-full last:w-[8%] py-[10px] flex justify-between border-b border-solid border-gray-600">
        <div className=" capitalize w-[23%]">
          <span>Product</span>
        </div>
        <div className=" capitalize w-[23%]">
          <span>Description</span>
        </div>
        <div className=" capitalize w-[23%]">
          <span>Quantity</span>
        </div>
        <div className=" capitalize w-[23%]">
          <span>Price</span>
        </div>
        <div className=" capitalize w-[23%]">
          <span>Remove</span>
        </div>
      </div>
        {cartItems.map((item) => {
          // const {name , quantity , imageUrl , price , id} = item
          return(
            <CheckoutItem key={item.id} cartItem = {item} />
            ) 
          })}
          <span className="mt-[30px] ml-auto text-4xl">Total: ${total} </span>
    </div>
  )
}
export default Checkout;
