import "./wiget.scss"
import {FaCaretUp} from "react-icons/fa";
import {FaUser} from "react-icons/fa";
import {FaClipboard} from "react-icons/fa";
import {FaHandHoldingUsd} from "react-icons/fa";
import {FaUserGraduate} from "react-icons/fa";


const widge=({type})=>{
    let data;

    const amount=100
    const diff=20

switch(type){
    case "user":
    data={
        title:"USERS",
        isMoney:false,
        link:"see all users",
        icon:
           <FaUser className="icon" style={{
            backgroundColor:"rgba(218,165,32,0.2)",
            color:"crimson"}}/>,
    }
        break;
        case "student":
            data={
                title:"STUDENT",
                isMoney:false,
                link:"see all users",
                icon:
                   <FaUserGraduate className="icon" style={{
                    backgroundColor:"#13b42833",
                    color:"crimson"}}/>,
            }
                break
                case "earning":
                    data={
                        title:"RESULT",
                        isMoney:false,
                        link:"view net result",
                        icon:
                           <FaHandHoldingUsd className="icon" style={{
                            backgroundColor:"rgb(241, 206, 2) ",
                            color:"crimson"}}/>,
                    }
                        break
                        case "books":
                            data={
                                title:"BOOKS",
                                isMoney:false,
                                link:"view all books",
                                icon:
                                   <FaClipboard className="icon" style={{
                                    backgroundColor:"#b4b8f333",
                                    color:"crimson"}}/>,
                            }
                                break
        default:
            break;
    
}



    return(
        <div className="widgets">
            <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && "$"}{amount}</span>
            <span className="link">{data.link}</span>
            </div>
            <div className="right">
<div className="percentage positive">
    <FaCaretUp/>
    {diff}%
    </div>
    {data.icon}
            </div>
            
       
            
        </div>
    )
}



export default widge