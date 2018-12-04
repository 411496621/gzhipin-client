import Login from "../components/login"
import {connect} from "react-redux"
import {login} from "../redux/actions"

export default connect(
  state => ({user:state.userInfo}),
  {login}
)(Login)
