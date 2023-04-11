
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'

import { useSelector , useDispatch } from 'react-redux';
import { selectCartCount , selectIsCartOpen } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';


const CardIcon = ()=>{
  const dispatch = useDispatch()
  const cartCount = useSelector(selectCartCount)
  const isCartOpen = useSelector(selectIsCartOpen)

  const toggleIsCardOpen = () => dispatch(setIsCartOpen(!isCartOpen))
  return (
    <div className=' w-[45px] h-[45px] relative flex items-center justify-center cursor-pointer' onClick={toggleIsCardOpen}>
        <ShoppingIcon className = ' w-6 h-6'/>
        <span className=' absolute text-[10px] font-bold bottom-3'>{cartCount}</span>
    </div>
  )
}
export default CardIcon;