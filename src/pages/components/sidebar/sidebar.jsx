
import "./sidebar.scss";
import { FaHome } from "react-icons/fa";
import { FaUserAlt} from "react-icons/fa";
import { FaRegCalendarAlt} from "react-icons/fa";
import { FaRegComments} from "react-icons/fa";
import {FaUserGraduate} from "react-icons/fa";
import {FaHandHoldingUsd} from "react-icons/fa";
import {FaUser} from "react-icons/fa";
import {FaCog} from "react-icons/fa";
import {FaDiagnoses} from "react-icons/fa";
import {FaPowerOff} from "react-icons/fa";
import {Link} from "react-router-dom"
import { useContext } from "react";
import { DarkModeContext } from "../../../context/darkModeContext";

const Sidebar =()=>{
    const { dispatch } = useContext(DarkModeContext)
    return(
    <div className="Sidebar">
    <div className="top">
       <Link to="/" style={{textDecoration:"none"}}>
       <div className="logo"> ADMIN </div>
       </Link>
        
    </div>
    <hr />
    <div className="center">
        <ul >
            <p className="title">MAIN</p>
            <Link to="/users/userId" style={{textDecoration:"none"}}>
            <li >
        
               <FaHome/>
                <span>DASHBOARD </span>
                </li>
                </Link>
                <p className="title">LIST</p>
            <li>
                <span>My class</span>
                </li>
                <Link to="/users/new" style={{textDecoration:"none"}}>
            <li>
           <FaUserAlt className="icon"/>
                <span>User</span>
                </li>
          </Link>
                <Link to="/products" style={{textDecoration:"none"}}>
                <li>
                    <FaUser  className="icon"/>
                <span>Teacher</span>
                </li>
                </Link>
                <Link to="/users" style={{textDecoration:"none"}}>
                <li>
                    <FaUserGraduate  className="icon"/>
                <span>Sudent</span>
                </li>
                </Link>
                <p className="title">USEFULL</p>
                <li>
                    <FaRegCalendarAlt  className="icon"/>
                <span>Event</span>
                </li>
                <li>
                    <FaHandHoldingUsd  className="icon"/>
                <span>Finance</span>
                </li>
                <li>
                    <FaDiagnoses  className="icon"/>
                <span>Food</span>
                </li>
                <p className="title">SERVICE</p>
                <li>
                    <FaRegComments  className="icon"/>
                <span>Chat</span>
                </li>
                <p className="title">USER</p>
                <li>
                    <FaCog  className="icon"/>
                <span>Settings</span>
                </li>
                <li>
                  <FaPowerOff  className="icon"/>
                <span>Logout</span>
                </li>
    
        </ul>
        </div>
        <div className="bottom">
    <div className="ColorOptions" onClick={()=>dispatch({type:"LIGHT"})}></div>
    <div className="ColorOptions"onClick={()=>dispatch({type:"DARK"})}></div>
    
    </div>
    </div>
    )
}
export default Sidebar