import {ADD_NUMBER, DECREMENT, INCREMENT, SUB_NUMBER,CHANGE_BANNER,CHANGE_RECOMMEND} from './constants.js';
import axios from "axios";

export function addNumber(num) {
    return {
        type: ADD_NUMBER,
        num
    }
}

export const subNumber = (num) => {
    return {
        type: SUB_NUMBER,
        num
    }
}

export const increment = () => ({
    type: INCREMENT,
});

export const decrement = () => ({
    type: DECREMENT,
});

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
export const getHomeMultidataAction = (dispatch,getState) => {
    axios({
        url: "http://123.207.32.32:8000/home/multidata",
    }).then(res => {
        const data = res.data.data;
        dispatch(changeBannerAction(data.banner.list));
        dispatch(changeRecommendAction(data.recommend.list));
    })
}
