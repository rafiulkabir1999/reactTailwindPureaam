import React from 'react'
import {AiFillStar,AiOutlineLeftCircle,AiOutlineRightCircle,AiFillDelete} from 'react-icons/ai'
import {BsCartFill} from 'react-icons/bs'

export default function Review() {
  return (
    <div className='flex  w-full justify-center  flex-col md:flex-row py-6 md:justify-around'>
      <div className="flex flex-col  items-center w-full  bg-white md:w-2/4 text-sm justify-center">

            <div className="flex text-yellow-400  justify-between items-center  p-1 space-x-2">
                <div className="flex ">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </div>
                <div className='w-48 h-3  bg-gray-200  '>
                    <div className="w-40  h-3 bg-yellow-300 items-center"></div>
                </div> <span>990</span>
            </div>

            <div className="flex text-yellow-400  justify-between items-center  p-1 space-x-2">
                <div className="flex"> <span className='text-yellow-400 flex'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </span> <span className="text-gray-300">
                        <AiFillStar />
                    </span> </div>
                <div className='w-48 h-3  bg-gray-200  '>
                    <div className="w-32  h-3 bg-yellow-300 items-center"></div>
                </div> <span>990</span>
            </div>
            <div className="flex text-yellow-400  justify-between items-center p-1 space-x-2 ">
                <div className="flex"> <span className='text-yellow-400 flex'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </span> <span className="text-gray-300 flex">
                        <AiFillStar />
                        <AiFillStar />
                    </span> </div>
                <div className='w-48 h-3  bg-gray-200  '>
                    <div className="w-24  h-3 bg-yellow-300 items-center"></div>
                </div> <span>990</span>
            </div>
            <div className="flex text-yellow-400  justify-between items-center  p-1 space-x-2">
                <div className="flex"> <span className='text-yellow-400 flex'>
                        <AiFillStar />
                        <AiFillStar />
                    </span> <span className="text-gray-300 flex">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </span> </div>
                <div className='w-48 h-3  bg-gray-200  '>
                    <div className="w-16  h-3 bg-yellow-300 items-center"></div>
                </div> <span>990</span>
            </div>
            <div className="flex text-yellow-400  justify-between items-center  p-1 space-x-2">
                <div className="flex"> <span className='text-yellow-400 flex'>
                        <AiFillStar />
                    </span> <span className="text-gray-300  flex">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </span> </div>
                <div className='w-48 h-3  bg-gray-200  '>
                    <div className="w-8  h-3 bg-yellow-300 items-center"></div>
                </div> <span>990</span>
            </div>
           </div>


           <div className="flex  items center justify-center w-full p-4 flex-col md:w-1/4 ">
             <span className='text-yellow-400'>Total</span>
            <span className='text-yellow-400 text-6xl'>4036</span> 
            <span className="text-yellow-400">Reviews</span>
             </div>

                        
                        
                        </div>
  )
}
