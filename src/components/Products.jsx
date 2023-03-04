function Products(){
    return(
        <div>
        <div className="pt-20 flex justify-center">
        <div>
            <div className="w-5/12 mx-auto">
                <h1 className=" text-4xl text-center text-gray-800 font-bold">Making sustainable and accessible products.</h1>
                <div className="flex py-6 justify-center">
                    <button className="flex justify-center border-2 hover:bg-gray-600 hover:text-white border-gray-600 text-gray-800 px-4 py-1.5 rounded-md font-semibold">Learn more</button>            
                </div>
            </div>
            <img className="w-9/12 mx-auto" src="img\unnamed (9).webp" alt=""></img>
            
            </div>
        </div>
        <div className="flex justify-center gap-x-2 py-44">
                <div className="text-center  w-2/6">
                    <div className="flex justify-center">
                        <img src="img\65d3b27c-f612-46c1-b0f0-1d9b2b91c0d6.svg" alt=""></img>
                    </div>
                    <h1 className="py-6 text-xl font-semibold text-gray-800">Free shipping on every order.†</h1>
                    <div className="flex justify-center">
                        <button className="flex justify-center border-2 hover:bg-gray-600 hover:text-white border-gray-600 text-gray-800 px-4 py-1.5 rounded-md font-semibold">Learn more</button> 
                    </div>
                </div>
                <div className="text-center w-2/6">
                    <div className="flex justify-center">
                        <img src="img\f46e5895-17c9-43b6-b1d3-446ba0ad3eb0.svg" alt=""></img>
                    </div>
                    <h1 className="py-6 text-xl font-semibold text-gray-800">Finance your earbuds.*</h1>
                    <div className="flex justify-center">
                        <button className="flex justify-center border-2 hover:bg-gray-600 hover:text-white border-gray-600 text-gray-800 px-4 py-1.5 rounded-md font-semibold">Learn more</button> 
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Products;