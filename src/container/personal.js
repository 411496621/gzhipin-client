import {connect} from "react-redux"
import Personal from "../components/personal"
import {clearInfo,clearList} from "../redux/actions"

export default connect(
  state=>({user:state.userInfo}),
  {clearInfo,clearList}
)(Personal)

