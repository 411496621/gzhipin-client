import {connect} from "react-redux"
import Personal from "../components/personal"
import {clearUserInfo,clearUserList} from "../redux/actions"



export default connect(
  state=>({user:state.userInfo}),
  {clearUserInfo,clearUserList}
)(Personal)

