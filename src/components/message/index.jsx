import React,{Component} from "react"
import {List,Badge} from "antd-mobile"
import PropTypes from "prop-types"
import Cookies from "js-cookie"
import QueueAnim from 'rc-queue-anim'

const Item =List.Item
const Brief = Item.Brief
class Message extends Component{
  static propTypes ={
    charList:PropTypes.object.isRequired
  }
  goChat = id=>{
    this.props.history.push(`/chat/${id}`)
  }

  render(){
    const otherUsers = {};
    const myUserid = Cookies.get("userid")
    const {charList} = this.props
    const {users,chatMsgs} = charList
    chatMsgs.forEach(function (item) {
        const otherId = myUserid===item.from?item.to:item.from

        if(!otherUsers[otherId]){
          otherUsers[otherId] = {}
        }
        // 获取信息 头像
        for (let key in users[otherId]) {
          otherUsers[otherId][key] = users[otherId][key]
        }

        otherUsers[otherId].id=otherId
        // 关于未读消息的数量
        if(!otherUsers[otherId].unRead){
          otherUsers[otherId].unRead = 0
        }
        if(!item.read&&item.from===otherId){
          otherUsers[otherId].unRead++
        }
       /* if(item.from===otherId){

        }*/

        if(!otherUsers[otherId].time){
          otherUsers[otherId].time =0
          otherUsers[otherId].message = item.message
        }
        const time = Date.parse(item.createTime)

        if(otherUsers[otherId].time < time){
          otherUsers[otherId].time = time
          otherUsers[otherId].message = item.message
        }

    })
    const chatUsers = Object.values(otherUsers)
    return(
      <QueueAnim  delay={300}>
        {
          chatUsers.map((item,index)=>{
            return (
              <Item key={index}
                    onClick={this.goChat.bind(null,item.id)}
                    arrow="horizontal"
                    thumb= {require(`../../assets/images/头像${item.header==="undefined"?1:item.header}.png`)}
                    extra={<Badge text={item.unRead}  />}
              >{item.message}<Brief>{item.username}</Brief>
              </Item>
            )
          })
        }
      </QueueAnim>
    )
  }
}

export default Message
