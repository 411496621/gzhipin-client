import {connect} from "react-redux"
import Main from "../components/main"
import {getUserInfo,getCharList} from "../redux/actions"


export default connect(
  state=> ({user:state.userInfo}),
  {getUserInfo,getCharList}
)(Main)
