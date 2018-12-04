import React,{Component} from "react"
import {Grid,List} from "antd-mobile"
import PropTypes from "prop-types"
class HeaderSelector extends Component{
  static propTypes ={
    getHeader:PropTypes.func.isRequired
  }

  state={
    header:null
  }
  setHeader = (el,index)=>{
    this.setState({
      header:el.icon
    })
    this.props.getHeader(index+1)
  }
  render(){
    const data = Array.from(new Array(20)).map((_val, i) => ({
      icon: require(`./images/头像${i+1}.png`),
      text: `头像${i+1}`,
    }))
    const {header} =this.state
    return(
      <div>
        <List  renderHeader={() => <div>请选择头像 <img src={header} alt=""/></div> }>
          <Grid  onClick={this.setHeader}  data={data} activeStyle={false} columnNum={5} />
        </List>
      </div>
    )
  }
}

export default HeaderSelector
