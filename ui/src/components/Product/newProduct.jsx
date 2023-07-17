import React from 'react'

export default function NewProduct(props) {
  return (
    
          <div className='p-2 m-1 hover:shadow-md cursor-pointer '>
                <img 
                    className='h-36 h-36 mx-auto'
                    src={props.url} 
                    alt="" />

                <div className="flex flex-col p-2 pb-4 w-40">
                    <p className='text-left font-md text-gray-500'>{props.name}</p>
                    <p className='text-left text-orange-500'>{props.price} tk</p>
                </div>

         </div>

  )
}
