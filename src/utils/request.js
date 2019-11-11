import axios from "axios";
import { promised } from "q";
const server=axios.create({
    timeout:5000,
    withCredentials:true,
})

//请求拦截
server.interceptors.request.ues((config)=>{
    if(config.mothod=="get"){
        config.params={...config.data};
    }

    // config.header["content-type"]="application.json"
},(err)=>{
    promised.reject(err);

})

//响应的拦截
server.interceptors.reponse.ues((res)=>{
    if(res.status==200){
        return res.data;
    }
})

export default server;