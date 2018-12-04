import React,{Component} from "react"
import Laobaninfo from "../laobaninfo"
import DashenInfo from "../dasheninfo"
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
