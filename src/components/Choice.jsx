import {GoPrimitiveDot} from"react-icons/go";
import {BsCheckCircleFill} from"react-icons/bs";
import {AiFillMinusCircle} from"react-icons/ai";
function Choice(){
    return(
        <div>
            <div className="text-gray-800 flex justify-center items-center">
                <div className="w-4/12">
                    <img src="img\unnamed.png" alt=""></img>
                    <div className="py-4">
                        <div className="flex pl-6 gap-x-3 text-xs pb-6">
                            <h1 className="text-gray-200 border-gray-500 border-2 bg-gray-200 rounded-full"><GoPrimitiveDot/></h1>
                            <h1 className="text-gray-600 border-gray-500 border-2 bg-gray-600 rounded-full"><GoPrimitiveDot/></h1>
                            <h1 className="bg-pink-300 border-gray-500 border-2 text-pink-300 rounded-full"><GoPrimitiveDot/></h1>
                            <h1 className="bg-gray-100 border-gray-500 border-2 text-gray-100 rounded-full"><GoPrimitiveDot/></h1>
                        </div>
                        <h1 className="text-2xl font-bold pb-5">Pixel Buds Pro</h1>
                        <p className="font-bold pb-2">$199.99</p>
                        <p className="text-xs pb-4">Or $16.67 with 0% APR financing for 12 months. *</p>
                        <div className="flex flex-wrap items-center">
                            <button className=" bg-blue-700 hover:bg-blue-800 font-medium px-6 py-2 text-white rounded-md">Buy</button>
                            <h1 className="pl-6 pr-1 text-blue-700 hover:underline cursor-pointer font-semibold">Learn more</h1><span>{'>'}</span>
                        </div>
                    </div>
                </div>
                <div className="w-4/12">
                    <img src="img\unnamed (1).png" alt=""></img>
                    <div className="py-4">
                    <div className="flex pl-6 gap-x-3 text-xs pb-6">
                            <h1 className="bg-gray-100 border-gray-500 border-2 text-gray-100 rounded-full"><GoPrimitiveDot/></h1>
                            <h1 className="text-gray-600 border-gray-600 border-2 bg-gray-600 rounded-full"><GoPrimitiveDot/></h1>
                            <h1 className="text-gray-500 border-gray-500 border-2 bg-gray-500 rounded-full"><GoPrimitiveDot/></h1>
                            
                        </div>
                        <h1 className="text-2xl font-bold pb-5">Pixel Buds A-Series</h1>
                        <p className="font-bold pb-8">$99</p>
                        <div className="flex flex-wrap items-center">
                            <button className=" bg-blue-700 hover:bg-blue-800 font-medium px-6 py-2 text-white rounded-md">Buy</button>
                            <h1 className="pl-6 pr-1 text-blue-700 hover:underline cursor-pointer font-semibold">Learn more</h1><span>{'>'}</span>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="w-8/12 mx-auto py-10">
                <div className="px-4 py-10">
                    <h1 className="text-xl text-left text-gray-800 font-bold">Active Noise Cancellation with Silent Seal™</h1>
                    <hr class="h-px my-2 bg-gray-300 border-0"/>
                    <div className="flex text-2xl pt-4">
                    <div className="text-blue-700 w-3/6">
                        <BsCheckCircleFill/>
                    </div>
                    <div className="text-gray-500 w-3/6">
                        <AiFillMinusCircle/>
                    </div>
                    </div>
                </div>
                <div className="px-4 py-10">
                    <h1 className="text-xl text-left text-gray-800 font-bold">Total listening time (including charging case)</h1>
                    <hr class="h-px my-2 bg-gray-300 border-0"/>
                    <div className="flex text-2xl pt-4">
                    <div className="text-base text-gray-800 font-medium w-3/6">
                    Up to 31 hours<span className="bottom-1 relative text-xs">1</span>
                    </div>
                    <div className="text-base text-gray-800 font-medium w-3/6">
                    Up to 24 hours<span className="bottom-1 relative text-xs">1</span>
                    </div>
                    </div>
                </div>
                <div className="px-4 py-10">
                    <h1 className="text-xl text-left text-gray-800 font-bold">Transparency mode</h1>
                    <hr class="h-px my-2 bg-gray-300 border-0"/>
                    <div className="flex text-2xl pt-4">
                    <div className="text-blue-700 w-3/6">
                        <BsCheckCircleFill/>
                    </div>
                    <div className="text-gray-500 w-3/6">
                        <AiFillMinusCircle/>
                    </div>
                    </div>
                </div>
                <div className="px-4 py-10">
                    <h1 className="text-xl text-left text-gray-800 font-bold">Wireless charging</h1>
                    <hr class="h-px my-2 bg-gray-300 border-0"/>
                    <div className="flex text-2xl pt-4">
                    <div className="text-blue-700 w-3/6">
                        <BsCheckCircleFill/>
                    </div>
                    <div className="text-gray-500 w-3/6">
                        <AiFillMinusCircle/>
                    </div>
                    </div>
                </div>
                <div className="px-4 py-10">
                    <h1 className="text-xl text-left text-gray-800 font-bold">Google Assistant</h1>
                    <hr class="h-px my-2 bg-gray-300 border-0"/>
                    <div className="flex text-2xl pt-4">
                    <div className="text-blue-700 w-3/6">
                        <BsCheckCircleFill/>
                    </div>
                    <div className="text-blue-700 w-3/6">
                        <BsCheckCircleFill/>
                    </div>
                    </div>
                </div>
            <div className="flex justify-center pt-8">
                <button className="flex justify-center border-2 border-blue-700 text-blue-700 px-4 py-1.5 rounded-md font-semibold">View all specs</button>
            </div>
            </div>
        </div>
    );
}
export default Choice;