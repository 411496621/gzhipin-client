import React,{Component} from "react"
import {NavBar,Grid,InputItem,TextareaItem,Button} from "antd-mobile"
import  HeaderSelector from "../header-selector"
import PropTypes from "prop-types"
import {Redirect} from "react-router-dom";
class DashenInfo extends Component{
  static propTypes ={
    user:PropTypes.object.isRequired,
    update:PropTypes.func.isRequired
  }
  state ={
    header:"",
    info:"",
    post:"",
    type:"dashen"
  }
  getHeader = value=>{
    this.setState({
      header:value
    })
  }
  updateMessage = ()=>{
    this.props.update(this.state)
  }

  handleChange = (type,value)=>{
    this.setState({
      [type]:value
    })
  }
  render(){
    const {redirectTo} = this.props.user
    if(redirectTo==="/dashen"){
      return  <Redirect to={redirectTo} />
    }
    const {errMsg} = this.props.user
    return(
      <div>
        <NavBar>大神信息完善</NavBar>
        <HeaderSelector getHeader={this.getHeader} />
        <p className="err-msg">{errMsg}</p>
        <InputItem onChange={value=>this.handleChange("post",value)}>求职岗位:</InputItem>
        <TextareaItem  onChange={value=>this.handleChange("info",value)} title="个人介绍:" rows={3} />
        <Button type="primary" onClick={this.updateMessage} >保存</Button>
      </div>
    )
  }
}

export default DashenInfo
