import http from "@utils/request";

export const quanbulistApi=(pz)=>http({
    method:"get",
    url:"/Service/callback-mall.mi/ECommerce/SearchGoods.api",
    data:{
        keyword:"",
        pageIndex:pz,
        sf:0,sm:2,
        topicId:0,
        movieId:0,
        roleId:0,
        categoryId1:0,
        categoryId2:0,
        brandId:0,
        fmin:0,
        fmax:0,
        salefid:0,
        cd:0,
        searchID:"69D5A35475CA2504231C84B8755708A7",
        t:2019111511555994148
    }
})