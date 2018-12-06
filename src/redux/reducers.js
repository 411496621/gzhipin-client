import {combineReducers} from 'redux'
import {REGSUCCESS,
  REGERR,
  GETINFOSUCCESS,
  GETINFOFAIL,
  USERLISTFULL,
  USERLISTEMPTY,
  CLEARUSERINFO,
  CLEARUSERLIST} from "./action-types"
const userStateInit = {
  username:"",
  type:"",
  _id:"",
  errMsg:"",
  header:"",
  company:"",
  info:"",
  post:"",
  salary:"",
  redirectTo:""
}

function userInfo(previousState =userStateInit,action) {

     switch (action.type) {
       case REGSUCCESS:
         return {...action.data,redirectTo:getRedirectPath(action.data.type,action.data.header)}
       case REGERR:
         return {...userStateInit,...action.data}
       case GETINFOSUCCESS:
         return {...action.data,redirectTo:getRedirectPath(action.data.type,action.data.header)}
       case GETINFOFAIL:
         return {...userStateInit,...action.data}
       case CLEARUSERINFO:
         return previousState
       default:
         return previousState
     }
}
const getRedirectPath = (type,head)=>{
     let path =""
     if(type==="laoban"){
       path = "/laoban"
     }
     if(type==="dashen"){
       path = "/dashen"
     }
     if(!head){
       path +="info"
     }
     return path
}

const userListInit = []
function userList(previousState=userListInit,action) {
     switch (action.type) {
       case USERLISTFULL:
         return action.data
       case USERLISTEMPTY:
         return previousState
       case CLEARUSERLIST:
         return previousState
       default:
         return previousState
     }
}

export default combineReducers({
  userInfo,
  userList
})
