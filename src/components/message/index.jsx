import React,{Component} from "react"
import {List} from "antd-mobile"
const Item =List.Item
const Brief = Item.Brief
class Message extends Component{


  render(){

    return(
      <div>
        <Item
          arrow="horizontal"
          thumb= {require("../../assets/images/头像1.png")}
          multipleLine
          onClick={() => {}}
        >你好 在吗 <Brief>laoban001</Brief>
        </Item>
        <Item
          arrow="horizontal"
          thumb= {require("../../assets/images/头像5.png")}
          multipleLine
          onClick={() => {}}
        >请问你在找工作吗 <Brief>laoban002</Brief>
        </Item>
      </div>
    )
  }
}

export default Message
