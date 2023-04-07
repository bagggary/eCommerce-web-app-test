import { useContext } from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import { CartContext } from '../../contexts/cart.context';


const CardIcon = ()=>{
  const {isCartOpen , setIsCartOpen , cartCount} = useContext(CartContext)

  const toggleIsCardOpen = () => setIsCartOpen(!isCartOpen)
  return (
    <div className=' w-[45px] h-[45px] relative flex items-center justify-center cursor-pointer' onClick={toggleIsCardOpen}>
        <ShoppingIcon className = ' w-6 h-6'/>
        <span className=' absolute text-[10px] font-bold bottom-3'>{cartCount}</span>
    </div>
  )
}
export default CardIcon;