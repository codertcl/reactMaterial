import {
    CHANGE_BANNER,
    CHANGE_RECOMMEND,
    FETCH_HOME_MULTIDATA,
} from './constants.js';
import axios from "axios";


//轮播图和推荐数据
export const changeBannerAction = (banner) => ({
    type: CHANGE_BANNER,
    banner
})

export const changeRecommendAction = (recommend) => ({
    type: CHANGE_RECOMMEND,
    recommend
})


//redux-thunk
export const getHomeMultidataAction = (dispatch, getState) => {
    axios({
        url: "http://123.207.32.32:8000/home/multidata",
    }).then(res => {
        const data = res.data.data;
        dispatch(changeBannerAction(data.banner.list));
        dispatch(changeRecommendAction(data.recommend.list));
    })
}


//redux-saga拦截的action
export const fetchHomeMultidataAction = {
    type: FETCH_HOME_MULTIDATA
}
