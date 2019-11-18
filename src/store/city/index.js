import { cityApi } from '@api/city'
let state = {
    cityList: JSON.parse(sessionStorage.getItem("cityList"))||[],
    hotCity: JSON.parse(sessionStorage.getItem("hotCity"))||[],
    nm:sessionStorage.getItem("nm")||"北京",
    cityId: sessionStorage.getItem("cityId")||290
}
let actions = {
    async handleGetCityList({ commit }) {
        let data = await cityApi();
        // console.log(data.p)
        commit("handleCityList", data.p)
    }
}
let mutations = {
    handleUpdateCity(state,params){
        state.cityId = params.id;
        state.nm = params.nm;
        sessionStorage.setItem("cityId",params.id)
        sessionStorage.setItem("nm",params.nm)
    },
    handleCityList(state, params) {
        console.log(params[1])

        let cityList = [];
        let hotCity = [];

       
        for (var i = 0; i < 10; i++) {
            hotCity.push({ id: params[i].id, nm: params[i].n })
            console.log("yes")
        }


        for (var i = 0; i < params.length; i++) {
            let letterFirst = params[i].pinyinShort.slice(0, 1).toUpperCase();
            if (isCtiyList(letterFirst)) {
                cityList.push({ index: letterFirst, list: [{ id: params[i].id, nm: params[i].n }] })
            } else {
                // console.log(1111);

                for (var j = 0; j < cityList.length; j++) {
                    // console.log(params[j].index,letterFirst)
                    if (cityList[j].index == letterFirst) {
                        cityList[j].list.push({
                            id: params[i].id, nm: params[i].n
                        })
                    }
                }
            }
        }

        function isCtiyList(letterFirst) {
            var bStop = true;
            for (var i = 0; i < cityList.length; i++) {
                if (cityList[i].index == letterFirst) {
                    bStop = false;
                    break;
                }
            }

            return bStop;
        }

        cityList.sort((a,b)=>{
            if(a.index>b.index){
                return 1;
            }else{
                return -1;
            }
        })

        state.hotCity = hotCity;
        state.cityList = cityList;
        // console.log(cityList);

        sessionStorage.setItem("hotCity",JSON.stringify(hotCity));
        sessionStorage.setItem("cityList",JSON.stringify(cityList));
    },
}
let getters = {

}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters,
}