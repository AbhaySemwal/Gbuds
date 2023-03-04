function Accessories()
{
    return(
        <div className="py-20">
            <div className="flex justify-center">
                <div>
                    <h1 className="text-4xl text-center font-bold text-gray-800">Accessories to keep you moving.</h1>
                    <div className="justify-center flex text-center text-blue-700 hover:cursor-pointer gap-x-1 font-semibold pt-6">
                        <p className="hover:underline">See all Accessories</p>
                        <span>{'>'}</span>
                    </div>
                    <div className="flex justify-center gap-x-5 flex-wrap">
                        <div className="w-3/12">
                            <img className="bg-slate-50" src="img\unnamed (6).webp" alt=""></img>
                            <h3 className="text-gray-800 font-bold pb-8 text-xl">Google USB-C to USB-C Cable</h3>
                            <p className="text-gray-800 font-semibold pb-6 text-">$20</p>
                            <button className="flex justify-center border-2 hover:bg-gray-600 hover:text-white border-gray-600 text-gray-800 px-4 py-1.5 rounded-md font-semibold">Learn more</button>
                        </div>
                        <div className="w-3/12">
                            <img className="bg-slate-50" src="img\unnamed (7).webp" alt=""></img>
                            <h3 className="text-gray-800 font-bold pb-8 text-xl">Google 30W USB-C Power Charger</h3>
                            <p className="text-gray-800 font-semibold pb-6 text-">$25</p>
                            <button className="flex justify-center border-2 hover:bg-gray-600 hover:text-white border-gray-600 text-gray-800 px-4 py-1.5 rounded-md font-semibold">Learn more</button>
                        </div>
                        <div className="w-3/12">
                            <img className="bg-slate-50" src="img\unnamed (8).webp" alt=""></img>
                            <h3 className="text-gray-800 font-bold pb-1 text-xl">Comply™ Premium Foam Tips for Pixel Buds A-Series</h3>
                            <p className="text-gray-800 font-semibold pb-6 text-">$24.99</p>
                            <button className="flex justify-center border-2 hover:bg-gray-600 hover:text-white border-gray-600 text-gray-800 px-4 py-1.5 rounded-md font-semibold">Learn more</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
export default Accessories;