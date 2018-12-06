import React,{Component} from "react"
import {TabBar} from 'antd-mobile'
import PropTypes from "prop-types"
import {withRouter} from "react-router-dom"
import "./index.less"
const Item = TabBar.Item
class Foot extends Component{
 static propTypes ={
   navList:PropTypes.array.isRequired,
   type:PropTypes.string.isRequired
 }
  redirectTo = path=>{
      this.props.history.replace(path)
  }
  render(){
    const type = this.props.type
    const path = type==="laoban"?"/dashen":"/laoban"
    const newList = this.props.navList.filter((item,index)=>item.path!==path)
    return(
      <div className="footer">
        <TabBar>
          {newList.map((item,index)=>
            <Item key={index}
                  title={item.iconText} onPress ={this.redirectTo.bind(null,item.path)}
                  icon = {<img className="img" src={require(`./images/${item.icon}.png`)} alt=""/>}
                  selectedIcon ={<img className="img" src={require(`./images/${item.icon}-selected.png`)} alt=""/>}
                  selected ={this.props.location.pathname === item.path}
            />
          )}

        </TabBar>
      </div>
    )
  }
}

export default withRouter(Foot)
