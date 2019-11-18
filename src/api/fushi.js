import http from "@utils/request";

export const fushilistApi=(pz)=>http({
    method:"get",
    url:"/Service/callback-mall.mi/ECommerce/SearchGoods.api",
    data:{
        keyword:"",
        pageIndex:pz,sf:0,sm:2,topicId:0,movieId:0,roleId:0,
        categoryId1:42,
        categoryId2:0,brandId:0,fmin:0,fmax:0,
        salefid:0,cd:0,
        searchID:"2EFFC126AF2C2109C1EA10F51F2645DF",
        t:2019111
    }
})