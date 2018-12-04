import React,{Component} from "react"
import {NavBar,List,InputItem,WhiteSpace,WingBlank,Button} from "antd-mobile"
import Logo from "../logo"
import PropTypes from "prop-types"
import {Redirect} from "react-router-dom"

class Login extends Component{
  static propTypes ={
    user:PropTypes.object.isRequired,
    login:PropTypes.func.isRequired
  }
  state ={
    username:"",
    password:""
  }
  handleChange = (type,value)=>{
      this.setState({
         [type]:value
      })
  }
  goLogin = ()=>{
     const {username,password} = this.state
     this.props.login({username,password})
  }
  goRegister = ()=>{
     this.props.history.replace("/register")
  }

  render(){
    const {errMsg} = this.props.user
    const path = this.props.user.redirectTo
    if(path){
      return <Redirect to={path} />
    }

    return(
      <div>
        <NavBar>硅谷直聘</NavBar>
        <Logo/>
        <p className="err-msg">{errMsg}</p>
        <WingBlank>
          <List>
            <InputItem onChange={value => this.handleChange("username",value)}>用户名:</InputItem>
            <WhiteSpace />
            <InputItem type="password" onChange={value => this.handleChange("password",value)}>密&nbsp;&nbsp;&nbsp;码:</InputItem>
            <WhiteSpace />
            <Button onClick={this.goLogin} type="primary">登录</Button>
            <WhiteSpace />
            <Button onClick={this.goRegister}>还没有账户</Button>
          </List>
        </WingBlank>

      </div>
    )
  }
}

export default Login
