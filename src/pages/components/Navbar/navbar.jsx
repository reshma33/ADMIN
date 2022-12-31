import React from "react";
import "./navbar.scss"
import {FaSearch} from "react-icons/fa";
import {FaGlobe} from "react-icons/fa";
import {FaBell} from "react-icons/fa";
import {FaCompress} from "react-icons/fa";
import {FaAlignJustify} from "react-icons/fa";
import {FaMoon} from "react-icons/fa";
import {FaRegClock} from "react-icons/fa";
import {FaFlag} from "react-icons/fa";
import { DarkModeContext } from "../../../context/darkModeContext";
import { useContext } from "react";
const Navbar =()=>{
   const { dispatch } = useContext(DarkModeContext)
    return(
    <div className="Navbar">
        <div className="wrapper">
<div className="search">
    <input type="text"placeholder="search..." />
    <FaSearch/>
</div>
<div className="items">
<div className="items">
    <FaGlobe className="icon"/>
    English
    
</div>
<div className="items">
   <FaMoon className="icon" onClick={()=>dispatch ({type:"TOGGLE"})}/>
</div>
<div className="items">
   <FaCompress className="icon"/>
</div>
<div className="items">
   <FaRegClock className="icon"/>
  
</div>
<div className="items">
   <FaFlag className="icon"/>
   
   </div>
   <div className="items">
   <FaAlignJustify className="icon"/>
   </div>
   <div className="items">
  <img
   
   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFU7U2h0umyF0P6E_yhTX45sGgPEQAbGaJ4g&usqp=CAU"
alt=""
className="avatar"/>
   </div>
</div>
   </div>
    
        
    </div>
    )
}
export default Navbar