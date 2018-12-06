import React,{Component} from "react"
import { Result,List,Button,WhiteSpace,Modal} from 'antd-mobile'
import cookie from "js-cookie"
import PropTypes from "prop-types"
const Item = List.Item
const Brief = Item.Brief
const alert = Modal.alert
class Personal extends Component{
  static propTypes ={
    user:PropTypes.object.isRequired,
    clearUserInfo:PropTypes.func.isRequired,
    clearUserList:PropTypes.func.isRequired
  }
  logout = ()=>{
    alert('退出登录', '你确定要退出登录吗???', [
      { text: '取消', onPress: () =>{} },
      { text: '确认', onPress: () =>{
             // 清除cookie
             cookie.remove("userid")
             // 清除redux相关的状态
             console.log(this.props.clearUserInfo)
             this.props.clearUserInfo()
             this.props.clearUserList()
             console.log(this.props.user)
             //  跳转到登录页面
             /*this.props.history.replace("/login")*/
      }},
    ])

  }

  render(){
    const user = this.props.user
    return(
      <div>
        <Result
          img={<img src={require(`../../assets/images/头像${user.header}.png`)} alt=""/>}
          title = {user.username}
        />
        <List renderHeader={() => '相关信息'} className="my-list">
          <Item multipleLine>
            <Brief>职位:{user.post}</Brief>
            {user.company!=="undefined"?<Brief>公司:{user.company}</Brief>:null }
            <Brief>简介:{user.info}</Brief>
            {user.salary!=="undefined"?<Brief>薪资:{user.salary}</Brief>:null}
          </Item>
        </List>
        <WhiteSpace />
        <Button type="warning" onClick={this.logout}>退出登录</Button>
      </div>
    )
  }
}

export default Personal
