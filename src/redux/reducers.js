import {combineReducers} from 'redux'
import {REGSUCCESS,REGERR} from "./action-types"
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

const yyyStateInit = {}

function reducerB(previousYYYState=yyyStateInit,action) {
     switch (action) {
       default:
         return previousYYYState
     }
}

export default combineReducers({
  userInfo,
})
