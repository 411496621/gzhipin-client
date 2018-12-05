import {connect} from "react-redux"
import DashenInfo from "../components/dasheninfo"
import {update} from "../redux/actions"

export default connect(
  state=>({user:state.userInfo}),
  {update}
)(DashenInfo)
