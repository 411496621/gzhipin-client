import React,{Component} from "react"
import { Result,List,Button,WhiteSpace,Modal} from 'antd-mobile'
import {Redirect} from "react-router-dom"
import cookie from "js-cookie"
const Item = List.Item
const Brief = Item.Brief
const alert = Modal.alert
class Personal extends Component{

  logout = ()=>{
    alert('退出登录', '你确定要退出登录吗???', [
      { text: '取消', onPress: () =>{} },
      { text: '确认', onPress: () =>{
             // 清除cookie
             cookie.remove("userid")
             // 清除redux相关的状态
             //  跳转到登录页面
             this.props.history.replace("/login")
      }},
    ])

  }

  render(){

    return(
      <div>
        <Result
          img={<img src={require("../../assets/images/头像1.png")} alt=""/>}
          title = "lanban001"
        />
        <List renderHeader={() => '相关信息'} className="my-list">
          <Item multipleLine>
            <Brief>职位:xxx</Brief>
            <Brief>职位:xxx</Brief>
          </Item>
        </List>
        <WhiteSpace />
        <Button type="warning" onClick={this.logout}>退出登录</Button>
      </div>
    )
  }
}

export default Personal
