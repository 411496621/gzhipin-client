import React,{Component} from "react"
import Laobaninfo from "../../container/laoban-info"
import DashenInfo from "../../container/dashen-info"
import Dashen from "../../container/dashen"
import Laoban from "../../container/laoban"
import Message from "../message"
import Personal from "../../container/personal"
import Footer from "../footer"
import {Route,Redirect} from "react-router-dom"
import Cookie from "js-cookie"
import {NavBar,Icon} from "antd-mobile"
import PropTypes from "prop-types"
import "./index.less"

class Main extends Component{
  static propTypes={
    user:PropTypes.object.isRequired,
    getUserInfo:PropTypes.func.isRequired
  }

  navList = [
    {path:"/laoban",title:"大神列表",icon:"laoban",iconText:"大神"},
    {path:"/dashen",title:"老板列表",icon:"dashen",iconText:"老板"},
    {path:"/message",title:"消息列表",icon:"message",iconText:"消息"},
    {path:"/personal",title:"个人中心",icon:"personal",iconText:"个人"}
    ]
  render(){
    /*
    *  1 检查是否有cookie 如果没有cookie 跳转到/login
    *  2 有cookie 但没有redux状态 那么发请求得到用户的相关信息
    *  3 有cookie 有redux状态 显示完整信息
    *
    * */
    // 1 检查是否有cookie 如果没有cookie 跳转到/login
    const userid = Cookie.get("userid")
    if(!userid){
      return <Redirect to="login" />
    }
    //  2 有cookie 但redux状态为空 那么发请求得到用户的相关信息
    if(!this.props.user.username &&!this.props.user.errMsg){
        this.props.getUserInfo()
        // 当用户相关信息数据还未加载回来的时候 不让它显示后面的内容
        return <Icon className='loading-img' type="loading" size="lg" />
    }
    //  3 有cookie 有redux状态 显示相关信息
    const path = this.props.location.pathname
    // 如果是/
    if(path==="/"){// 此时去老板/老板信息完善页面或者大神/大神信息完善页面
       return  <Redirect to={this.props.user.redirectTo}/>
    }
    const currentList = this.navList.find((item,index)=>path===item.path)

    return(
       <div>
         { currentList?<NavBar className="header" >{currentList.title}</NavBar>:null }
         <div className="main">
           <Route path="/laobaninfo" component={Laobaninfo} />
           <Route path="/dasheninfo" component={DashenInfo} />
           <Route path="/laoban" component={Laoban}/>
           <Route path="/dashen" component={Dashen} />
           <Route path="/message" component={Message} />
           <Route path="/personal" component={Personal} />
         </div>
         {currentList?<Footer class="footer" navList={this.navList} type={this.props.user.type} />:null}
       </div>
    )
  }
}

export default Main
