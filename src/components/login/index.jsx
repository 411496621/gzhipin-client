import React,{Component} from "react"
import {NavBar,List,InputItem,WhiteSpace,WingBlank,Button} from "antd-mobile"
import Logo from "../logo"
class Login extends Component{

  goRegister = ()=>{
     this.props.history.replace("/register")
  }

  render(){

    return(
      <div>
        <NavBar>硅谷直聘</NavBar>
        <Logo/>
        <WingBlank>
          <List>
            <InputItem>用户名:</InputItem>
            <WhiteSpace />
            <InputItem type="password">密&nbsp;&nbsp;&nbsp;码:</InputItem>
            <WhiteSpace />
            <Button type="primary">登录</Button>
            <WhiteSpace />
            <Button onClick={this.goRegister}>还没有账户</Button>
          </List>
        </WingBlank>

      </div>
    )
  }
}

export default Login
