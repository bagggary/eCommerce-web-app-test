import React from 'react'
import Category from './Category'

export default function CategoryContainer({data}) {
  return (
    <div className='w-screen flex flex-wrap justify-between'>
           {data.map((category) => (
            <Category key={category.id} category={category} />
          ))}
    </div>
  )
}
