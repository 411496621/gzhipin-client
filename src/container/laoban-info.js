import {connect} from "react-redux"
import LaobanInfo from "../components/laobaninfo"
import {update} from "../redux/actions"

export default connect(
  state => ({user:state.userInfo}),
  {update}
)(LaobanInfo)
