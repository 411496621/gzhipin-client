import ajax from "./ajax"

const prefix =""

//   注册功能POST请求
export const reqRegister = data => ajax(`${prefix}/register`,"POST",data)
