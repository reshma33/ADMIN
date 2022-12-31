import "./featured.scss"
import {FaEllipsisV} from "react-icons/fa";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"
import {FaUserGraduate} from "react-icons/fa";
import {FaRegStar} from "react-icons/fa";

const Featured =()=>{
    return(
    <div className="featured">
        <div className="top">
            <h1 className="title">Total Student</h1>
            <FaEllipsisV fontSize="small"/>
        </div>
        <div className="bottom">
        <div className="featuredChart">
     <CircularProgressbar value={85} text="85%" strokeWidth={5}/>

        </div>
        <p className="title">Total Studet</p>
       
        <p className="amount">  <FaUserGraduate/>1845</p>
        <p className="desc">Someone who is a student of a particular subject is very interested</p>
        <div className="summary">
            <div className="item">
                <div className="itemTitle">10 First mark</div>
                <div className="itemResult">
                   
                <div className="resultAmount"> <FaRegStar fontSize="small"color="gold"/>
                    90%
                </div>
                
                </div>
                
            </div>
            
            
        </div>
       <div className="summary">
            <div className="item">
                <div className="itemTitle">11 First mark</div>
                <div className="itemResult">
                   
                <div className="resultAmount"><FaRegStar fontSize="small"color="gold"/>
                    99%
                </div>
                
                </div>
                
            </div>
            
            
        </div>
        <div className="summary">
            <div className="item">
                <div className="itemTitle">12 First mark</div>
                <div className="itemResult">
                   
                <div className="resultAmount"> <FaRegStar fontSize="small"color="gold"/>
                    95%
                </div>
                
                </div>
                
            </div>
            
            
        </div>
        </div>
        
    </div>
    
    )
}


export default Featured