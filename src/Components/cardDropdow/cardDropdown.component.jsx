import React , {useContext} from "react";
import Button from "../button/button.component";
import CartItem from "../cardItem/cardItem.component";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";

const EmptyCart = styled.span`
font-size : 16px;
margin : 50px auto
`

const CartDropdown = ()=>{
  const cartItems = useSelector(selectCartItems)

  const navigate = useNavigate();
  const goToCheckout = () => {
    navigate('/checkout')
  }

  return (
    <div className=" absolute bg-white w-60 h-[340px] flex flex-col p-5 border border-solid border-black top-[90px] right-10 z-[5]">
      <div className=" h-60 flex flex-col overflow-scroll ">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item}/>)
       )  :  (
        <EmptyCart>Your cart is empty</EmptyCart>
       )
       }
      </div>
         <Button onClick = {goToCheckout} buttonType='inverted' styles='mt-auto'>CHECKOUT</Button>
    </div>
  )
}

export default CartDropdown;