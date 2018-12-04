import {combineReducers} from 'redux'
import {REGSUCCESS,REGERR} from "./action-types"
const userStateInit = {
  username:"",
  type:"",
  _id:"",
  errMsg:""
}

function userInfo(previousState =userStateInit,action) {
     switch (action.type) {
       case REGSUCCESS:
         return {...action.data,errMsg:""}
       case REGERR:
         return {...userStateInit,...action.data}
       default:
         return previousState
     }
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
