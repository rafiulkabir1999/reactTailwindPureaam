import React from 'react';
function About() {
    return (  
    <div classNameName="container mx-auto pt-24 ">
      
      
<div className=" white w-12/11 md:w-full">  
    <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <h2 className="mb-12 text-center text-2xl text-gray-900 font-bold md:text-4xl">What's our customers say</h2>
        <div className="grid gap-8 md:grid-rows-2 lg:grid-cols-2">
          <div className="row-span-2 p-6 border border-gray-100 rounded-xl bg-gray-50 text-center sm:p-8">
            <div className="h-full flex flex-col justify-center space-y-4">
              <img className="w-20 h-20 mx-auto rounded-full" src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/second_user.webp" alt="user avatar" height="220" width="220" loading="lazy"/>
              <p className="text-gray-600 md:text-xl"> <span className="font-serif">"</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto aliquam consequatur repellat provident, omnis ut, sapiente voluptates veritatis cum deleniti repudiandae ad doloribus. <span className="font-serif">"</span></p>
              <div>
                  <h6 className="text-lg font-semibold leading-none">Jane Doe</h6>
                  <span className="text-xs text-gray-500">Product Designer</span>
              </div>
            </div>
          </div>

          <div className="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8">
            <img className="w-20 h-20 mx-auto rounded-full" src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/first_user.webp" alt="user avatar" height="220" width="220" loading="lazy"/>
            <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
              <p className="text-gray-600"> <span className="font-serif">"</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto aliquam consequatur repellat provident, omnis ut, sapiente voluptates veritatis cum deleniti repudiandae ad doloribus. <span className="font-serif">"</span></p>
              <div>
                  <h6 className="text-lg font-semibold leading-none">Jane Doe</h6>
                  <span className="text-xs text-gray-500">Product Designer</span>
              </div>
            </div>
          </div>
          <div className="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8">
            <img className="w-20 h-20 mx-auto rounded-full" src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/third_user.webp" alt="user avatar" height="220" width="220" loading="lazy"/>
            <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
              <p className="text-gray-600"> <span className="font-serif">"</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto aliquam consequatur repellat provident, omnis ut, sapiente voluptates veritatis cum deleniti repudiandae ad doloribus. <span className="font-serif">"</span></p>
              <div>
                  <h6 className="text-lg font-semibold leading-none">Jane Doe</h6>
                  <span className="text-xs text-gray-500">Product Designer</span>
              </div>
            </div>
          </div>
        </div>
    </div>
</div>
      <div id="container" className="">
          <div className="flex flex-col sm:flex-row">
          
            <div className="sm:w-1/4 p-2">
              <div className="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
                <div className="mb-3">
                  <img
                    className="w-auto mx-auto rounded-full"
                    src="https://i.pravatar.cc/150?img=66"
                    alt=""
                  />
                </div>
                <h2 className="text-xl font-medium text-gray-700">Pande Muliada</h2>
                <span className="text-blue-500 block mb-5">Front End Developer</span>
      
                <a href="#" className="px-4 py-2 bg-blue-500 text-white rounded-full"
                  >Hire</a
                >
              </div>
            </div>
      
          
            <div className="sm:w-1/4 p-2">
              <div className="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
                <div className="mb-3">
                  <img
                    className="w-auto mx-auto rounded-full"
                    src="https://i.pravatar.cc/150?img=31"
                    alt=""
                  />
                </div>
                <h2 className="text-xl font-medium text-gray-700">Saraswati Cahyati</h2>
                <span className="text-blue-500 block mb-5">Back End Developer</span>
      
                <a href="#" className="px-4 py-2 bg-blue-500 text-white rounded-full"
                  >Hire</a
                >
              </div>
            </div>
      
           
            <div className="sm:w-1/4 p-2">
              <div className="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
                <div className="mb-3">
                  <img
                    className="w-auto mx-auto rounded-full"
                    src="https://i.pravatar.cc/150?img=18"
                    alt=""
                  />
                </div>
                <h2 className="text-xl font-medium text-gray-700">Wayan Alex</h2>
                <span className="text-blue-500 block mb-5">Data Scientist</span>
      
                <a href="#" className="px-4 py-2 bg-blue-500 text-white rounded-full"
                  >Hire</a
                >
              </div>
            </div>
      
       
            <div className="sm:w-1/4 p-2">
              <div className="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
                <div className="mb-3">
                  <img
                    className="w-auto mx-auto rounded-full"
                    src="https://i.pravatar.cc/150?img=28"
                    alt=""
                  />
                </div>
                <h2 className="text-xl font-medium text-gray-700">Ketut Julia</h2>
                <span className="text-blue-500 block mb-5">Project Manager</span>
      
                <a href="#" className="px-4 py-2 bg-blue-500 text-white rounded-full"
                  >Hire</a
                >
              </div>
            </div>
          </div>
        </div>
    </div>
    );
}

export default About;
