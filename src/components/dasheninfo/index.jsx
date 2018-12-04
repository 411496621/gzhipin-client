import React,{Component} from "react"
import {NavBar,Grid,InputItem,TextareaItem,Button} from "antd-mobile"
import  HeaderSelector from "../header-selector"
class DashenInfo extends Component{
  state ={
    header:"",
    info:"",
    post:""
  }
  getHeader = value=>{
    this.setState({
      header:value
    })
  }

  handleChange = (type,value)=>{
    this.setState({
      [type]:value
    })
  }
  render(){
    return(
      <div>
        <NavBar>大神信息完善</NavBar>
        <HeaderSelector getHeader={this.getHeader} />
        <InputItem onChange={value=>this.handleChange("post",value)}>求职岗位:</InputItem>
        <TextareaItem  onChange={value=>this.handleChange("info",value)} title="个人介绍:" rows={3} />
        <Button type="primary">保存</Button>
      </div>
    )
  }
}

export default DashenInfo
