import React,{Component} from "react"
import {NavBar,Grid,InputItem,TextareaItem,Button} from "antd-mobile"
import  HeaderSelector from "../header-selector"
class Laobaninfo extends Component{
  state ={
    header:"",
    info:"",
    post:"",
    salary:"",
    company:""
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
         <NavBar>老板信息完善</NavBar>
         <HeaderSelector getHeader={this.getHeader} />
         <InputItem onChange={value=>this.handleChange("post",value)}>招聘职位:</InputItem>
         <InputItem onChange={value=>this.handleChange("company",value)}>公司名称:</InputItem>
         <InputItem onChange={value=>this.handleChange("salary",value)}>职位薪资:</InputItem>
         <TextareaItem  onChange={value=>this.handleChange("info",value)} title="职位要求:" rows={3} />
         <Button type="primary">保存</Button>
      </div>
    )
  }
}

export default Laobaninfo
