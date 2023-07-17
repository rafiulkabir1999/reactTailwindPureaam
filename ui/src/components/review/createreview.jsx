import React from 'react';
import {AiFillStar} from 'react-icons/ai'
function CreateReview() {
    return ( 
      
     <div className='flex flex-col items-center justify-center md:justify-between  md:flex-row pt-20  '>
    <div className="flex flex-col  w-11/12 mr-0 p-2 rounded  md:mr-2 md:1/2   md:w-full md:mx-0"> 
    <input type="text" className='p-2 outline-0 bg-gray-200' placeholder='Input your Order ID' /> 
    <textarea rows="5" cols="10" className='p-2 outline-0' />
    <input type="submit" className='bg-green-400 w-full p-2 outline-0 hover:bg-green-500 text-white cursor-pointer' />
     </div>
    
    
    
    <div className="p-2 w-11/12 p-8 m-0 mx-atuo  bg-white flex items-center justify-evenly border-0 m-0 flex-col md:flex-row mt-1 md:w-full ">
        <div className="flex flex-col  items-center  bg-white">
            <div className="flex text-yellow-400  justify-between items-center  p-1 space-x-2">
                <div className="flex">
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
        <div className="flex items center justify-center flex-col"> <span className='text-yellow-400'>Total</span> <span className='text-yellow-400 text-6xl'>4036</span> <span className="text-yellow-400">Reviews</span> </div>
    </div>
</div>

            
      
     );
}

export default CreateReview;