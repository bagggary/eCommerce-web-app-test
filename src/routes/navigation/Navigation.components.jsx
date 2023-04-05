import React ,{ useContext } from 'react'
import { Outlet , Link} from 'react-router-dom'
import { userContext } from '../../contexts/user.context'
import { SignOutUser } from '../../util/firebase/firebase.util'
import CardIcon from '../../Components/cart/cart.component'
import CartDropdown from '../../Components/cardDropdow/cardDropdown.component'
import { CartContext } from '../../contexts/cart.context'

import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'


const Navigation = ()=> {
  const {currentUser } = useContext(userContext)
  const {isCartOpen} = useContext(CartContext)

  return (
    <React.Fragment>
      <div className='w-full h-[70px] flex justify-between mb-[25px]'>
        <Link className='h-full w-[70px] p-[25px]' to='/'> 
        <CrwnLogo />
        </Link>
        <div className='w-1/2 h-full flex items-center justify-end'>
          <Link className='px-[15px] py-2.5 cursor-pointer' to = "/shop"> SHOP </Link>
          <Link className='px-[15px] py-2.5 cursor-pointer'> CONTACT </Link>
          {currentUser ? (
            <span className='px-[15px] py-2.5 cursor-pointer' onClick={SignOutUser} > SIGN OUT</span>
          ) : (
            <Link className='px-[15px] py-2.5 cursor-pointer' to = "/signIn"> SIGN IN </Link>
          )}
          {/* <Link className='px-[15px] py-2.5 cursor-pointer'> SHOP </Link> */}
          <CardIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
          <Outlet />
    </React.Fragment>
  )
}
export default Navigation
