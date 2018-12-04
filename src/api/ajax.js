
// 定义请求ajax相关的模块
import axios from "axios"

export default (url,method="GET",data)=>{
   let qs =""
  /*
   {name:"sunwukong",age:18}  name=sunwukong&age=18
  */
   if(data){
      const  propsArr = Object.keys(data)
      propsArr.forEach(item=>{
        qs += `${item}=${data[item]}&`
      })
      qs = qs.substring(0,qs.length-1)
   }
   method = method.toUpperCase()
   if(method === "GET"){
       return axios.get(url+"?"+qs)
   }else if(method==="POST"){
       return axios.post(url,qs,{
         "content-type":"application/x-www-form-urlencoded"
       })
   }

}
