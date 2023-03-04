function Adv(){
    return (
        <div className="pt-48 pb-10">
            <h1 className="flex px-10 text-center items-center justify-center text-gray-700 lg:text-6xl text-4xl font-bold">Earbuds that sound great all day.</h1>
            <div className="flex items-center justify-center py-24 lg:gap-x-10 gap-x-2 lg:overflow-hidden overflow-scroll">
            <div className="h-32 w-32 ">
                <img src="img\unnamed.webp"></img>
                <div className="flex items-center justify-center pt-2">
                    <button className="px-1 font-semibold bg-gray-200 text-normal text-xs text-gray-700 rounded-xl">New</button>
                </div>
                <p className="flex justify-center text-gray-700 lg:text-sm font-medium text-xs text-center px-4">Pixel Buds Pro</p>  
            </div>
            <div className="h-32 w-32">
                <img src="img\unnamed (1).webp"></img>
                <p className="flex flex-wrap justify-center text-gray-700 lg:text-sm font-medium text-xs pt-6 text-center px-4">Pixel Buds A-Series</p>
            </div>
            <div className="h-32 w-32">
                <img src="img\unnamed (2).webp"></img>
                <p className="flex flex-wrap justify-center text-gray-700 lg:text-sm font-medium pt-6 text-xs text-center px-4">Compare Earbuds</p>
            </div>
            <div className="h-32 w-32">
                <img src="img\unnamed (3).webp"></img>
                <p className="flex flex-wrap justify-center text-gray-700 lg:text-sm font-medium pt-6 text-xs text-center px-4">Accessories</p>
            </div>
            </div>
        </div>
    );
}
export default Adv;