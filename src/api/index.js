import ajax from "./ajax"

const prefix =""

// 定义注册请求
export const reqRegister = data => ajax(`${prefix}/register`,"POST",data)
// 定义登陆请求
export const reqLogin = data => ajax(`${prefix}/login`,"POST",data)

export const reqUpdate =data => ajax(`${prefix}/update`,"POST",data)
