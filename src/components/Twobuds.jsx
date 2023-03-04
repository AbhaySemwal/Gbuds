function Twobuds(){
    return(
        <div className="flex py-10 flex-wrap lg:flex-nowrap gap-6 px-10">
            <div className="lg:w-3/6  bg-pink-200/95 rounded-2xl">
            <div className="text-gray-700 text-center py-10">
                <h1 className="text-5xl font-bold pb-6">Pixel Buds Pro</h1>
                <h3 className="font-normal pb-4">How premium sounds.</h3>
                <p className="font-medium pb-2">$199.99</p>
                <p className="text-xs pb-5">Or $16.67 with 0% APR financing for 12 months. *</p>
                <button className="text-gray-800 font-medium px-5 py-1.5 border-gray-600 hover:bg-gray-600 hover:text-white cursor-pointer border-2 rounded-md">Learn more</button>
            </div>   
                <img src="img\unnamed (4).webp" alt=""></img>
            </div>
            <div className="lg:w-3/6 bg-gray-200 rounded-2xl">
            <div className="text-gray-700 text-center py-10">
                <h1 className="text-5xl font-bold pb-6">Pixel Buds A-Series</h1>
                <h3 className="font-normal pb-4">Rich sound, for less.</h3>
                <p className="font-medium pb-2">$99</p>
                <button className="text-gray-800 font-medium px-5 py-1.5 border-gray-600 hover:bg-gray-600 hover:text-white cursor-pointer border-2 rounded-md">Learn more</button>
            </div>  
                <img src="img\unnamed (5).webp" alt=""></img>
            </div>
        </div>
    );
}
export default Twobuds;
