import http from "@utils/request";

export const movienowApi =()=> http({
    method:"get",
    url:"/Service/callback.mi/Showtime/LocationMovies.api",
    data:{
        locationId:290,
        t:2019111220141270212
    }
})   

export const newsnowApi =()=> http({
    method:"post",
    url:"article/originalInfoList.api",
    data:{
    }
})   
