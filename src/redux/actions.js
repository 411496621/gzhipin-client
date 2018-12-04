import {reqRegister,reqLogin} from "../api"
import {REGERR,REGSUCCESS} from "./action-types"
export const regsuccess = data=> ({type:REGSUCCESS,data})
export const regerr = data=>({type:REGERR,data})

// 异步action creator
export const register = ({username,password,type,rePwd})=>{
      // 进行表单验证
      if(!username){
         return  regerr({errMsg:"请输入用户名"})
      }
      if(!password){
        return regerr({errMsg:"请输入密码"})
      }
      if(password!==rePwd){
        return regerr({errMsg:"两次密码不一致"})
      }
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

export const login = ({username,password}) =>{
     if(!username){
       return regerr({errMsg:"请输入用户名"})
     }
     if(!password){
       return regerr({errMsg:"请输入密码"})
     }
     return dispatch=>{
        reqLogin({username,password})
          .then(({data})=>{
              console.log(data)
              if(data.code===0){ // 请求成功 可以登录
                 dispatch( regsuccess(data.data))
              }else{ //
                 dispatch( regerr({errMsg:data.msg}) )
              }
          })
          .catch(err=>{
               console.log(err)
               dispatch( regerr({errMsg:"网络不稳定 请刷新重试"}) )
          })
     }
}
