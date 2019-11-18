import http from "@utils/request";

export const manweilistApi=(pz)=>http({
    method:"get",
    url:"/Service/callback-mall.mi/ECommerce/SearchGoods.api",
    data:{
        keyword:"%E6%BC%AB%E5%A8%81",
        pageIndex:pz,
        sf:0,sm:2,
        topicId:0,
        movieId:0,
        roleId:0,
        categoryId1:0,categoryId2:0,
        brandId:0,
        fmin:0,
        fmax:0,
        salefid:0,
        cd:0,
        searchID:"CA419643858696F72183BB5820E48B3B",
        t:201911151154253826
    }
})