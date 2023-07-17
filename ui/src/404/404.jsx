import { Link } from "react-router-dom";
function NotFound() {
    return ( <div className=' pt-14 w-full md:mx-auto md:w-1/2'>
                 <div className="relative h-screen flex items-center justify-center">
                 <div className="  bg-white shadow w-full p-10  h-96">
                    <h1 className="text-4xl m-4"> <span className="text-red-500 text-7xl">404</span> !! Page Not Found</h1>
                    <Link to='/'><span className="bg-blue-400 px-4 py-2 rounded-full mt-auto text-white">
                        
                    go back to home page</span></Link>

                  </div>
                 </div>
                  
           </div> );
}

export default NotFound;