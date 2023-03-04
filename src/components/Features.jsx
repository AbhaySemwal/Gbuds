import {BsSoundwave,BsEarbuds} from "react-icons/bs"
import {GiBatteryPack} from "react-icons/gi"
import {SiGoogleassistant} from "react-icons/si"

function Features(){
    return(
        <div className="py-24">
            <div className="flex justify-center pb-14">
                <h1 className="text-center w-8/12 lg:w-7/12  text-2xl lg:text-4xl font-bold text-gray-700">What makes Google Pixel Buds look, feel, and sound different?</h1>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
                <div className="text-gray-700 text-center pb-4 lg:w-2/12">
                    <span className="flex justify-center text-2xl pb-4"><BsSoundwave/></span>
                    <h1 className="font-semibold text-lg pb-3">High-quality audio</h1>
                    <p className="">Enjoy full, crisp audio for your songs, videos, and phone calls.</p>
                </div>
                <div className="text-gray-700 text-center pb-4 lg:w-2/12">
                    <span className="flex justify-center text-2xl pb-4"><BsEarbuds/></span>
                    <h1 className="font-semibold text-lg pb-3">Comfortable and snug.</h1>
                    <p className="">With a thoughtful design, they look great and stay firmly in place.</p>
                </div>
                <div className="text-gray-700 text-center pb-4 lg:w-2/12">
                    <span className="flex justify-center text-2xl pb-4"><GiBatteryPack/></span>
                    <h1 className="font-semibold text-lg pb-3">All-day battery.</h1>
                    <p className="">Keep listening for longer thanks to a charging case that lasts all day.</p>
                </div>
                <div className="text-gray-700 text-center pb-4 lg:w-2/12">
                    <span className="flex justify-center text-2xl pb-4"><SiGoogleassistant/></span>
                    <h1 className="font-semibold text-lg pb-3">Hands-free help.</h1>
                    <p className="">Talk to Google to get answers, hear updates, and control your devices.</p>
                </div>
            </div>
        </div>
    );
}
export default Features;