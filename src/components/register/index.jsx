import React,{Component} from "react"
import {NavBar,WingBlank,List,InputItem,WhiteSpace,Radio,Button} from "antd-mobile"
import  Logo from "../logo"
import PropTypes from "prop-types"
const {Item} = List
class Register extends Component{
  static propTypes ={
    user:PropTypes.object.isRequired,
    register:PropTypes.func.isRequired
  }
  state ={
    isBoss:true,
    username:"",
    password:"",
    rePwd:""
  }
  hasChange =(type,value)=>{
       this.setState({
         [type]:value
       })
  }
  messageRegister = async()=>{
    const {isBoss,username,password} =this.state
    this.props.register({username,password,type:(isBoss?"laoban":"dashen")})

  }
  goLogin = ()=>{
     this.props.history.replace("/login")
  }


  render(){
    const {isBoss} = this.state
    return(
      <div>
        <NavBar>硅谷直聘</NavBar>
        <Logo/>
        <WingBlank>
          <List>
            <InputItem onChange={ value =>this.hasChange("username",value) }>用户名:</InputItem>
            <WhiteSpace/>
            <InputItem type="password" onChange={value => this.hasChange("password",value) }>密 &nbsp;&nbsp;码:</InputItem>
            <WhiteSpace/>
            <InputItem type="password" onChange={value => this.hasChange("rePwd",value)} >确认密码:</InputItem>
            <WhiteSpace/>
            <Item>用户类型:
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Radio onChange={this.hasChange.bind(null,"isBoss",false) } checked={!isBoss} >大神</Radio>
              &nbsp;&nbsp;&nbsp;<Radio onChange={this.hasChange.bind(null,"isBoss",true) } checked={isBoss}>老板</Radio>
            </Item>
            <WhiteSpace/>
            <Button type="primary" onClick={this.messageRegister} >注册</Button>
            <WhiteSpace/>
            <Button onClick={this.goLogin}>已有账户</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}

export default Register
