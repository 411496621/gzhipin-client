import React, {Component} from 'react'
import {NavBar, List, InputItem,Icon,Grid} from 'antd-mobile'
import "./index.less"
import PropTypes from "prop-types"
import Cookies from "js-cookie"

const Item = List.Item
export default class Chat extends Component {
  static propTypes ={
    sendMessage:PropTypes.func.isRequired,
    charList:PropTypes.object.isRequired
  }
  state ={
    message:"",
    isShow:false
  }
  componentDidMount(){
    window.scrollTo(0,document.body.clientHeight)
  }
  componentDidUpdate(){
    window.scrollTo(0,document.body.clientHeight)
  }

  emojis=['😀', '😁', '🤣','😀', '😁', '🤣','😀', '😁', '🤣','😀', '😁', '🤣','😀'
    ,'😁', '🤣','😀', '😁', '🤣','😀', '😁', '🤣','😀', '😁', '🤣'
    ,'😁', '🤣','😀', '😁', '🤣','😀', '😁', '🤣','😀', '😁', '🤣'
    ,'😁', '🤣','😀', '😁', '🤣','😀', '😁', '🤣','😀', '😁', '🤣', '🙉']
  myemojis=this.emojis.map((item) => ({
    text:item,
  }))

  goBack = ()=>{
    this.props.history.goBack()
  }
  handleChange = value=>{
    this.setState({
      message:value,
    })
  }
  sendMessage = ()=>{
    const {message} = this.state
    const from = Cookies.get("userid")
    const to = this.props.match.params.id
    this.props.sendMessage({message,from,to})
    this.setState({
      message:""
    })
  }
  showGrid =()=>{
     const {isShow} = this.state
     this.setState({
       isShow:!isShow
     })
     if(!isShow){
        setTimeout(function () {
          window.dispatchEvent(new Event('resize'))
        },0)
     }
  }
  sendEmojis = el=>{
     this.setState({
       message:this.state.message+ el.text
     })
  }

  render() {
    const {charList} = this.props
    if(charList.chatMsgs.length===0){
      return null
    }
    const {users}= charList
    const from = this.props.match.params.id
    const fromUser = users[from]  // 用来展示头像
    const to = Cookies.get("userid")
    const from_to = [from,to].sort().join("-")
    const nowChatMsgs = charList.chatMsgs.filter((item)=>item.from_to===from_to)
    return (
      <div id='chat-page'>
        <NavBar className="chat-header" onLeftClick={this.goBack} icon={<Icon type="left"/>}>{fromUser.username}</NavBar>
        <List className="main-chat">
          {nowChatMsgs.map((item,index)=>{
              if(item.from===from){
                return(
                  <Item key={index}
                    thumb={require(`../../assets/images/头像${fromUser.header==="undefined"?0:fromUser.header}.png`)}
                  >
                    {item.message}
                  </Item>
                )
              }else{
                return(
                  <Item  key={index}
                    className='chat-me'
                    extra='我'
                  >
                    {item.message}
                  </Item>
                )
              }
          })}
        </List>
        <div style={{height:this.state.isShow?"200px":0}}></div>
        <div className='am-tab-bar'>
          <InputItem
            onChange={this.handleChange}
            placeholder="请输入"
            value={this.state.message}
            extra={
              <div>
                <span onClick={this.showGrid} >🙉</span> &nbsp;
                <span onClick={this.sendMessage}>发送</span>
              </div>
            }
          />
          {
            this.state.isShow?<Grid
              data={this.myemojis}
              columnNum ={8}
              carouselMaxRow={4}
              isCarousel
              onClick={this.sendEmojis} />
              :null
          }
        </div>
      </div>
    )
  }
}
