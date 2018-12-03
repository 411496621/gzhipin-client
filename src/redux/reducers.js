import {combineReducers} from 'redux'

const xxxStateInit = 0

function reducerA(previousXXXState =xxxStateInit,action) {
     switch (action) {
       default:
         return previousXXXState
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
  reducerA,
  reducerB
})
