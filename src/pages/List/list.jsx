import Sidebar from "../components/sidebar/sidebar"
import Navbar from "../components/Navbar/navbar"
import "./list.scss"
import Datatable from "../components/Datatable/Datatable"
const list=()=>{
    return(
        <div className="list">
           <Sidebar/>
           <div className="ListContainer">
            <Navbar/>
           <Datatable/>
           </div>
        </div>
    )
}
export default list