import React from "react";
import Navbar from "./Navbar";
import Adv from "./Adv";
import Twobuds from "./Twobuds";
import Features from "./Features";
import Choice from "./Choice";
import Accessories from "./Accessories";
import Products from "./Products";
import Footer from "./Footer";
function App(){
    return(
        <div>   
            <Navbar/>
            <Adv/>
            <Twobuds/>
            <Features/>
            <Choice/>
            <Accessories/>
            <Products/>
            <Footer/>
        </div>
    );
}
export default App;