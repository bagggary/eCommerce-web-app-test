import React from 'react'
import { Route, useNavigate  } from 'react-router-dom'

function Category({ category }) {
  const navigate = useNavigate()
  const onNavigateHandler = () => navigate(category.route)
  return (
    <div onClick={onNavigateHandler} className='group min-w-[30%] first:mr-[7.5px] last:ml-[7.5px] h-[240px] flex flex-auto items-center justify-center border border-black border-solid overflow-hidden mt-0 mb-2 mx-[15px] hover:cursor-pointer'>
      <div
        className='group-hover:scale-110 group-hover:transition-transform group-hover:duration-[6s] group-hover:ease-linear w-full h-full bg-cover bg-center'
        style={{
          backgroundImage: `url(${category.imageUrl})`
        }}
      />
      <div className='group-hover:opacity-[0.9] h-[90px] py-0 px-[25px] flex flex-col items-center justify-center border border-solid border-black bg-white opacity-70 absolute'>
        <h2 className='font-bold mx-6 my-0 text-[22px] text-[#4a4a4a]'>{category.title}</h2>
        <p className=' font-extralight '>Shop Now</p>
      </div>
    </div>
  )
}

export default Category