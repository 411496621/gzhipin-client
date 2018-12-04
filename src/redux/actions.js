import {reqRegister} from "../api"
import {REGERR,REGSUCCESS} from "./action-types"
export const regsuccess = data=> ({type:REGSUCCESS,data})
export const regerr = data=>({type:REGERR,data})

// 异步action creator
export const register = ({username,password,type})=>{
      return dispatch=>{
          reqRegister({username,password,type})
            .then(({data})=>{
                 console.log(data)
                 if(data.code===0){ // 注册成功
                    dispatch(regsuccess(data.data))
                 }else{// 注册失败
                    dispatch(regerr({errMsg:data.msg}))
                 }
            })
            .catch(()=>{
                    dispatch(regerr({errMsg:"网络不稳定,请刷新重试"}))
            })
      }
}
