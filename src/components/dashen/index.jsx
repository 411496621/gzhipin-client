import React,{Component} from "react"
import { Card, WingBlank, WhiteSpace } from 'antd-mobile'
import PropTypes from "prop-types"

class Dashen extends Component{
  static  propTypes ={
    userList:PropTypes.array.isRequired,
    getUserList:PropTypes.func.isRequired
  }
  componentDidMount(){
    if(this.props.userList.length===0){
      this.props.getUserList("laoban")
    }
  }
  goChat = id=>{
    this.props.history.push(`/chat/${id}`)
  }
  render(){
    const userList = this.props.userList.filter((item)=>item.header)
    return(
      <WingBlank size="lg">
        <WhiteSpace size="lg" />
        {userList.map((item,index)=>{
          return (
            <div key={index} onClick={this.goChat.bind(null,item._id)}>
              <Card>
                <Card.Header
                  thumb= {require(`../../assets/images/头像${item.header}.png`)}
                  extra={<span>{item.username}</span>}
                />
                <Card.Body>
                  <div>职位: {item.post}</div>
                  <div>公司: {item.company}</div>
                  <div>月薪: {item.salary}</div>
                  <div>描述: {item.info}</div>
                </Card.Body>
              </Card>
              <WhiteSpace size="lg" />
            </div>
          )
        }) }
      </WingBlank>
    )
  }
}

export default Dashen
