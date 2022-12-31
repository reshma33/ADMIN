import "./single.scss"
import Sidebar from "../components/sidebar/sidebar"
import Navbar from "../components/Navbar/navbar"
import Chart from "../components/chart/chart"
import Table from "../components/Table/Table"


const Single=()=>{
    return(
        <div className="single">
            <Sidebar/>
            <div className="singleContainer">
                <Navbar/>
                <div className="top">
                    <div className="left">
                        <div className="editButton">
                            Edit
                        </div>
                        <h1 className="title">School Info</h1>
                        <div className="item">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQClBvWzXifwIrt2oZexwgK-fixX26zvtZL1A&usqp=CAU"
                             alt=""
                              className="itemImg" />
                            <div className="details">
                                <h1 className="itemTitle">
                                international schools</h1>
                                <div className="detailitem">
                                    <span className="itemKey">Email:</span>
                                    <span className="itemValue">internationalschools@gmail.com</span>
                                </div>
                                <div className="detailitem">
                                    <span className="itemKey">Phone: </span>
                                    <span className="itemValue">9952558565</span>
                                </div>
                                <div className="detailitem">
                                    <span className="itemKey">Adress: </span>
                                    <span className="itemValue">st. 23 235 coimbatore tamilnadu</span>
                                </div>
                                <div className="detailitem">
                                    <span className="itemKey">Country:</span>
                                    <span className="itemValue">India</span>
                                </div>


                            </div>
                        </div>
                        
                    </div>
                    <div className="right">
                        <Chart/>
                    </div>
                </div>
                <div className="bottom">
                <h1 className="title">Best result</h1>
                  <Table/>
                </div>
            </div>
        </div>
    )
}

export default Single