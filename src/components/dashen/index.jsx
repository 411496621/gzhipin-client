import React,{Component} from "react"
import { Card, WingBlank, WhiteSpace } from 'antd-mobile'
class Dashen extends Component{


  render(){

    return(
      <WingBlank size="lg">
        <WhiteSpace size="lg" />
        <Card>
          <Card.Header
            thumb= {require("../../assets/images/头像1.png")}
            extra={<span>laoban001</span>}
          />
          <Card.Body>
            <div>职位: xxx</div>
            <div>公司: xxx</div>
            <div>月薪: xxx</div>
            <div>描述: xxx</div>
          </Card.Body>
        </Card>
        <WhiteSpace size="lg" />

        <WhiteSpace size="lg" />
        <Card>
          <Card.Header
            thumb= {require("../../assets/images/头像5.png")}
            extra={<span>laoban003</span>}
          />
          <Card.Body>
            <div>职位: xxx</div>
            <div>公司: xxx</div>
            <div>月薪: xxx</div>
            <div>描述: xxx</div>
          </Card.Body>
        </Card>
        <WhiteSpace size="lg" />

      </WingBlank>
    )
  }
}

export default Dashen
