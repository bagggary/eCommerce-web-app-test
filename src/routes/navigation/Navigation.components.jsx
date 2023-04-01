import React from 'react'
import { Outlet , Link} from 'react-router-dom'

import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'

const Navigation = ()=> {
  return (
    <React.Fragment>
      <div className='w-full h-[70px] flex justify-between mb-[25px]'>
        <Link className='h-full w-[70px] p-[25px]' to='/'> 
        <CrwnLogo />
        </Link>
        <div className='w-1/2 h-full flex items-center justify-end'>
          <Link className='px-[15px] py-2.5 cursor-pointer' to = "/shop"> SHOP </Link>
          <Link className='px-[15px] py-2.5 cursor-pointer'> SHOP </Link>
          <Link className='px-[15px] py-2.5 cursor-pointer' to = "/signIn"> SIGN IN </Link>
          <Link className='px-[15px] py-2.5 cursor-pointer'> SHOP </Link>
        </div>
      </div>
          <Outlet />
    </React.Fragment>
  )
}
export default Navigation
