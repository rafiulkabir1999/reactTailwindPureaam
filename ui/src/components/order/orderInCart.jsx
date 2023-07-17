function OrderInCart() {
    return ( 
        <div className="w-full   shadow-md rounded md:w-1/4 ">
             <div className="flex p-2  justify-between shadow items-center">
                <p>Product Name</p>
                <p className="bg-red-400 p-1 px-4 rounded text-white">Paid</p>
             </div>
             <div className=" flex flex-col  p-4 ">
                <span className="flex justify-between">
                    <p>quantity </p>
                    <p>50 kg</p>
                </span>
                <span className="flex justify-between">
                    <p>Delivery Location </p>
                    <p>Dhaka Kuril</p>
                </span>
                <span className="flex justify-between">
                    <p>Phone </p>
                    <p>01739337119</p>
                </span>
             </div>
        </div>
     );
}

export default OrderInCart;