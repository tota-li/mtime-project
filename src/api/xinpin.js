import http from "@utils/request";

export const xinpinlistApi=(pz)=>http({
    method:"get",
    url:"Service/callback-mall.mi/ECommerce/SearchGoods.api",
    data:{
        keyword:"",
        pageIndex:pz,
        sf:0,
        sm:2,
        topicId:0,
        movieId:0,
        roleId:0,
        categoryId1:0,
        categoryId2:0,
        brandId:0,
        fmin:0,
        fmax:0,
        salefid:0,cd:0,
        searchID:"C0C1A50B0EA6A12BB79D20591DBFC33B",
        t:2019111511553689392  
    }
})