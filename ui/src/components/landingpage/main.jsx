import { Link } from "react-router-dom";
function Main() {
    return ( 
        <div class=" absolute bottom-20 left-0 right-0 mx-auto md:w-1/2 sm:text-center ">

        <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span class="block xl:inline">Chemical free  <span className="text-yellow-500">Mango </span></span>
          <span class="block text-green-400 to-yellow-500 xl:inline">from Rajshahi</span>
        </h1>

        <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">A mango is an
         edible stone fruit produced by the tropical tree Mangifera indica which is believed to have originated from the region between
          northwestern Myanmar, Bangladesh, and northeastern India.</p>

        <div class="mt-5 sm:mt-8 sm:px-4 sm:flex sm:justify-center ">
            <div class="rounded-md shadow">
                      <Link to='/products'><p className="w-full flex items-center justify-center 
                      px-8 py-3 border border-transparent text-base font-medium rounded-md bg-gradient-to-r from-green-400 to-yellow-500 
                      hover:from-pink-500 hover:to-yellow-500 md:py-4 md:text-lg md:px-10">Order Now</p></Link> 
            </div>

            <div class="mt-3 sm:mt-0 sm:ml-3">
              <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base 
              font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"> Send Massage </a>
            </div>

        </div>

      </div>
     );
}

export default Main;