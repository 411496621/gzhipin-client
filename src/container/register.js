import Register from "../components/register"
import {connect} from "react-redux"
import {register} from "../redux/actions"

export default connect(
  state => ({user:state.userInfo}),
  {register}
)(Register)
