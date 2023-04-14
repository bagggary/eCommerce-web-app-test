import React  from 'react'
import { Outlet , Link} from 'react-router-dom'
import { SignOutUser } from '../../util/firebase/firebase.util'
import CardIcon from '../../Components/cart/cart.component'
import CartDropdown from '../../Components/cardDropdow/cardDropdown.component'
import { useSelector } from 'react-redux'
import { selectIsCartOpen } from '../../store/cart/cart.selector'
import { useDispatch } from 'react-redux'


import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import { signOutStart } from '../../store/user/user.action'


const Navigation = ()=> {
  const dispatch = useDispatch()
  // const currentUser = useSelector((state) => state.user.currentUser)
  const currentUser = useSelector((state) => state.currentUser )
  const isCartOpen = useSelector(selectIsCartOpen)
  const handleSignOut = () => dispatch(signOutStart())

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
            <span className='px-[15px] py-2.5 cursor-pointer' onClick={handleSignOut} > SIGN OUT</span>
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
