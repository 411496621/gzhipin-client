import ajax from "./ajax"

const prefix =""

// 定义发送注册请求
export const reqRegister = data => ajax(`${prefix}/register`,"POST",data)
// 定义发送登陆请求
export const reqLogin = data => ajax(`${prefix}/login`,"POST",data)
// 定义发送更新请求
export const reqUpdate =data => ajax(`${prefix}/update`,"POST",data)
// 定义发送获取用户信息请求
export const reqUserInfo = ()=> ajax(`${prefix}/user`)

// 定义发送获取用户列表的请求
export const reqUserList =  type=> ajax(`${prefix}/userlist`,"GET",{type})
