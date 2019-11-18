import http from "@utils/request";

export const jiajulistApi=(pz)=>http({
    method:"get",
    url:"/Service/callback-mall.mi/ECommerce/SearchGoods.api",
    data:{
        keyword:"",
        pageIndex:pz,
        sf:0,
        sm:2,
        topicId:0,
        movieId:0,
        roleId:0,
        categoryId1:43,
        categoryId2:0,
        brandId:0,
        fmin:0,
        fmax:0,
        salefid:0,
        cd:0,
        searchID:"CD6FAD9EDC2B8C3744729D8E42E6CE42",
        t:2019111
    }
})