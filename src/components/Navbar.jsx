import {AiOutlineSearch,AiFillQuestionCircle,AiOutlineShoppingCart} from "react-icons/ai"
import { useState,useEffect } from "react";
const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      window.onscroll = function() {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
    }, []);

    return(
        <nav className={scrolled ? "fixed shadow-xl w-screen bg-white" : "fixed w-screen bg-white"}>
            <div className="h-12 bg-white container w-screen flex flex-wrap items-center justify-between mx-auto px-12">
                <div className="flex gap-x-5">
                    <img className="w-6 h-6 cursor-pointer" src="img\google-logo-9808.png" alt=""></img>
                    <div className="hidden w-full lg:block">
                    <div className="text-sm flex gap-x-5">
                    <a className="text-gray-800 hover:text-blue-800" href="">Phones</a>
                    <a className="text-gray-800 hover:text-blue-800" href="">Earbuds</a>
                    <a className="text-gray-800 hover:text-blue-800" href="">Watches</a>
                    <a className="text-gray-800 hover:text-blue-800" href="">Smart Home</a>
                    <a className="text-gray-800 hover:text-blue-800" href="">Laptops</a>
                    <a className="text-gray-800 hover:text-blue-800" href="">Accessories</a>
                    <a className="text-gray-800 hover:text-blue-800" href="">Subscriptions</a>
                    <a className="text-gray-800 hover:text-blue-800" href="">Offers</a>
                    </div>
                    </div>                   
                </div>
                <div className="flex gap-x-4 text-2xl text-gray-600">
                    <span className="cursor-pointer hover:text-blue-800 pt-2"><AiOutlineSearch/></span>
                    <span className="cursor-pointer hover:text-blue-800 pt-2"><AiFillQuestionCircle/></span>
                    <span className="cursor-pointer hover:text-blue-800 pt-2"><AiOutlineShoppingCart/></span>
                    <img className="w-10 h-10 rounded-full cursor-pointer" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTixZtt0DenR6hIlRFoGmY60gpxxG6zL1lhj5hIgmOs3TKtGGft6d-pD6G5faaG724JNg0&usqp=CAU" alt=""></img>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;