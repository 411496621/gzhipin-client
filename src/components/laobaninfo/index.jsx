import React,{Component} from "react"
import {NavBar,InputItem,TextareaItem,Button} from "antd-mobile"
import  HeaderSelector from "../header-selector"
import PropTypes from "prop-types"
import {Redirect} from "react-router-dom"
import "./index.less"
class Laobaninfo extends Component{
  static propTypes ={
    user:PropTypes.object.isRequired,
    update:PropTypes.func.isRequired
  }
  state ={
    header:"",
    info:"",
    post:"",
    salary:"",
    company:"",
    type:"laoban"
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
    if(redirectTo==="/laoban"){
      return  <Redirect to={redirectTo} />
    }
    const {errMsg} = this.props.user
    return(
      <div>
         <NavBar className="laoban-header">老板信息完善</NavBar>
         <HeaderSelector getHeader={this.getHeader} />
         <p className="err-msg">{errMsg}</p>
         <InputItem onChange={value=>this.handleChange("post",value)}>招聘职位:</InputItem>
         <InputItem onChange={value=>this.handleChange("company",value)}>公司名称:</InputItem>
         <InputItem onChange={value=>this.handleChange("salary",value)}>职位薪资:</InputItem>
         <TextareaItem  onChange={value=>this.handleChange("info",value)} title="职位要求:" rows={3} />
         <Button type="primary" onClick={this.updateMessage} >保存</Button>
      </div>
    )
  }
}

export default Laobaninfo
