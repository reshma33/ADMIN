import Sidebar from "../components/sidebar/sidebar"
import Navbar from "../components/Navbar/navbar"
import Widget from "../components/Widget/Widget"

import "./Home.scss"
import Featured from "../components/featured/Featured"
import Chart from "../components/chart/chart"
import Table from "../components/Table/Table"
const Home =()=>{
    return(
        <div className="home">
          <Sidebar/>
          <div className="homeContainer">
            <Navbar/>
           <div className="widgets">
            <Widget type="user" />
            <Widget  type="student"/>
            <Widget type="earning" />
            <Widget type="books" />
           </div>
           <div className="charts">
            <Featured/>
            <Chart/>
           </div>
           <div className="listContainer">
            <div className="listTitle">Student List</div>
            <Table/>
           </div>
          </div>
        </div>
    )
}

export default Home