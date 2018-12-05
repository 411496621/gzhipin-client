import React,{Component} from "react"
import Laobaninfo from "../../container/laoban-info"
import DashenInfo from "../../container/dashen-info"
import Dashen from "../dashen"
import Laoban from "../laoban"
import Message from "../message"
import Personal from "../personal"
import Footer from "../footer"
import {Route,Redirect} from "react-router-dom"
import Cookie from "js-cookie"
import {NavBar} from "antd-mobile"

class Main extends Component{
  navList = [
    {path:"/laoban",title:"大神列表",icon:"laoban",iconText:"大神"},
    {path:"/dashen",title:"老板列表",icon:"dashen",iconText:"老板"},
    {path:"/message",title:"消息列表",icon:"message",iconText:"消息"},
    {path:"/personal",title:"个人中心",icon:"personal",iconText:"个人"}
    ]
  render(){
    const userid = Cookie.get("userid")
    if(!userid){
      return <Redirect to="login" />
    }
    const path = this.props.location.pathname
    const currentList = this.navList.find((item,index)=>path===item.path)
    return(
       <div>
         { currentList?<NavBar>{currentList.title}</NavBar>:null }
         <Route path="/laobaninfo" component={Laobaninfo} />
         <Route path="/dasheninfo" component={DashenInfo} />
         <Route path="/laoban" component={Laoban}/>
         <Route path="/dashen" component={Dashen} />
         <Route path="/message" component={Message} />
         <Route path="/personal" component={Personal} />
         {currentList?<Footer navList={this.navList} />:null}
       </div>
    )
  }
}

export default Main
