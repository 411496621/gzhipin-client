import{
  reqRegister,
  reqLogin,
  reqUpdate,
  reqUserInfo,
  reqUserList
} from "../api"
import io from 'socket.io-client'
import {REGERR,REGSUCCESS,GETINFOSUCCESS,GETINFOFAIL,USERLISTFULL,USERLISTEMPTY,CLEARINFO,CLEARLIST} from "./action-types"
export const regsuccess = data=> ({type:REGSUCCESS,data})
export const regerr = data=>({type:REGERR,data})
export const getInfoSuccess = data=> ({type:GETINFOSUCCESS,data})
export const getInfoFail = data=> ({type:GETINFOFAIL,data})
export const userListFull = data=>({type:USERLISTFULL,data})
export const userListEmpty = data=>({type:USERLISTEMPTY,data})

// 清空 redux状态
export const clearInfo = ()=> ({type:CLEARINFO})
export const clearList = ()=> ({type:CLEARLIST})

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
export const update = ({company,info,post,salary,header,type})=>{
     if(!header){
       return regerr({errMsg:"请选择头像"})
     }
     if(type==="laoban"&&!company){
       return regerr({errMsg:"请填写公司名称"})
     }
     if(!post){
       return regerr({errMsg:type==="laoban"?"请填写招聘职位":"请填写求职岗位"})
     }
     if(!info){
       return regerr({errMsg:type==="laoban"?"请填写职位要求":"请填写个人介绍"})
     }
     if(type==="laoban"&&!salary){
       return regerr({errMsg:"请填写职位薪资"})
     }
     return dispatch=>{
         reqUpdate({company,info,post,salary,header})
           .then(({data})=>{

             if(data.code===0){
               dispatch(regsuccess(data.data))
             }else{
               dispatch(regerr({errMsg:data.msg}))
             }
           })
           .catch(()=>{
               dispatch(regerr({errMsg:"网络不稳定 请刷新重试"}))
           })
     }
}
export const getUserInfo = ()=>{
    return dispatch=>{
        reqUserInfo()
          .then(({data})=>{
            console.log(data)
            if(data.code===0){
              dispatch(getInfoSuccess(data.data))
            }else{
              dispatch(getInfoFail({errMsg:data.msg}))
            }
          })
          .catch(()=>{
              dispatch(getInfoFail({errMsg:"网络不稳定 请刷新重试"}))
          })
    }
}
export const getUserList = type=>{
  return dispatch=>{
    reqUserList(type)
      .then(({data})=>{
        if(data.code===0){
          dispatch(userListFull(data.data))
        }else{
          dispatch(userListEmpty({errMsg:data.msg}))
        }
      })
      .catch(()=>{
        dispatch(userListEmpty({errMsg:"网络不稳定 请刷新重试"}))
      })
  }
}

// 发送输入的消息

// 连接服务器, 得到代表连接的socket对象
const socket = io('ws://localhost:5000')
// 绑定'receiveMessage'的监听, 来接收服务器发送的消息
socket.on('receiveMsg', function (data) {
  console.log('浏览器端接收到消息:', data)
})
// 向服务器发送消息
export const sendMessage = ({message,from,to})=>{
    return dispatch=>{
       socket.emit('sendMsg', {message,from,to})
    }
}
