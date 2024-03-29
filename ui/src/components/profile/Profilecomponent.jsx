import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

export default function ProfileComponent() {

    const history = useNavigate()
    const {name,phone,Type} = useSelector(state => state.login.user)
    
    const logout =()=>{
        localStorage.removeItem('user')
        history('/login')
    }
  return (


    <div class="container mx-auto my-20">
        <div>

            <div class="bg-white relative shadow rounded-lg  mx-auto">
                <div class="flex justify-center">
                        <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" 
                        class="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"
                        />
                </div>
                
                <div class="mt-16">
                    <h1 class="font-bold text-center text-3xl text-gray-900">{name ? name : "Name" }</h1>
                    <p class="text-center text-sm text-gray-400 font-medium">{phone ? phone : "Phone" }</p>
                    <p>
                        <span>
                            
                        </span>
                    </p>
                    <div class="my-5 px-6">
                        <div href="" class="text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white">Connect with <span class="font-bold">@pantazisoft</span></div>
                    </div>
                    <div class="flex justify-between items-center my-5 px-6">
                        <div href="" class="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Facebook</div>
                        <div href="" class="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Twitter</div>
                        <div href="" class="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Instagram</div>
                        <div href="" class="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Email</div>
                    </div>

                    <div class="w-full">
                        <h3 class="font-medium text-gray-900 text-left px-6">Recent activites</h3>
                        <div class="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
                            <div href="" class="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" class="rounded-full h-6 shadow-md inline-block mr-2"/>
                                    Updated his status
                                    <span class="text-gray-500 text-xs">24 min ago</span>
                            </div>

                            <div href="" class="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" class="rounded-full h-6 shadow-md inline-block mr-2"/>
                                    Added new profile picture
                                    <span class="text-gray-500 text-xs">42 min ago</span>
                            </div>

                            <div href="" class="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" class="rounded-full h-6 shadow-md inline-block mr-2"/>
                                Posted new article in <span class="font-bold">#Web Dev</span>
                                <span class="text-gray-500 text-xs">49 min ago</span>
                            </div>

                            <div href="" class="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" class="rounded-full h-6 shadow-md inline-block mr-2"/>
                                Edited website settings
                                <span class="text-gray-500 text-xs">1 day ago</span>
                            </div>

                            <div href="" class="w-full border-t b border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block bg-gray-100 transition duration-150 overflow-hidden">
                                
                                <button onClick={logout} className='p-2 px-4 border bg-white text-gray-600'>Log Out</button>
                               
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>


  )
}
