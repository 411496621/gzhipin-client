import React, {Component} from 'react'
import {NavBar, List, InputItem,Icon} from 'antd-mobile'
import "./index.less"
import PropTypes from "prop-types"
import Cookies from "js-cookie"

const Item = List.Item
export default class Chat extends Component {
  static propTypes ={
    sendMessage:PropTypes.func.isRequired
  }
  state ={
    message:""
  }
  goBack = ()=>{
    this.props.history.goBack()
  }
  handleChange = value=>{
    this.setState({
      message:value
    })
  }
  sendMessage = ()=>{
    const {message} = this.state
    const from = Cookies.get("userid")
    const to = this.props.match.params.id
    this.props.sendMessage({message,from,to})
  }

  render() {
    return (
      <div id='chat-page'>
        <NavBar onLeftClick={this.goBack} icon={<Icon type="left"/>}>aa</NavBar>
        <List>
          <Item
            thumb={require('../../assets/images/头像1.png')}
          >
            你好
          </Item>
          <Item
            thumb={require('../../assets/images/头像1.png')}
          >
            你好2
          </Item>
          <Item
            className='chat-me'
            extra='我'
          >
            很好
          </Item>
          <Item
            className='chat-me'
            extra='我'
          >
            很好2
          </Item>
        </List>

        <div className='am-tab-bar'>
          <InputItem
            onChange={this.handleChange}
            placeholder="请输入"
            extra={
              <span onClick={this.sendMessage}>发送</span>
            }
          />
        </div>
      </div>
    )
  }
}
