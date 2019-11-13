import axios from "axios";
// import { promised } from "";
const server=axios.create({
    timeout:5000,
    withCredentials:true,
})

//请求拦截
server.interceptors.request.use((config)=>{
    if(config.mothod=="get"){
        config.params={...config.data};
    }
        return config
    // config.header["content-type"]="application.json"
},(err)=>{
    return Promise.reject(err);

})

//响应的拦截
server.interceptors.response.use((res)=>{
    if(res.status==200){
        return res.data;
    }
})

export default server;