import React,{Component} from "react"
import Laobaninfo from "../../container/laoban-info"
import DashenInfo from "../../container/dashen-info"
import {Route} from "react-router-dom"

class Main extends Component{
  render(){
    return(
       <div>
         <Route path="/laobaninfo" component={Laobaninfo} />
         <Route path="/dasheninfo" component={DashenInfo} />
       </div>
    )
  }
}

export default Main
