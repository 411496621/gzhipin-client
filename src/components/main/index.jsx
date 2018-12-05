import React,{Component} from "react"
import Laobaninfo from "../../container/laoban-info"
import DashenInfo from "../../container/dashen-info"
import {Route,Redirect} from "react-router-dom"
import Cookie from "js-cookie"
class Main extends Component{
  render(){
    const userid = Cookie.get("userid")
    console.log(userid)
    if(!userid){
      return <Redirect to="login" />
    }
    return(
       <div>
         <Route path="/laobaninfo" component={Laobaninfo} />
         <Route path="/dasheninfo" component={DashenInfo} />
       </div>
    )
  }
}

export default Main
