import {put, takeEvery,all,takeLatest} from 'redux-saga/effects'
import {FETCH_HOME_MULTIDATA} from './constants'
import axios from "axios";
import {changeBannerAction,changeRecommendAction} from "./actionCreators";

function* fetchHomeMultidata(action) {
    const res = yield axios.get("http://123.207.32.32:8000/home/multidata")
    const banner = res.data.data.banner.list
    const recommend = res.data.data.recommend.list
    yield put(changeBannerAction(banner))
    yield put(changeRecommendAction(recommend))
    ////在yield的时候put多个action 遍历数组进行put派发action
    // yield all([
    //     yield put(changeBannerAction(banner)),
    //     yield put(changeRecommendAction(recommend))
    // ])
}

function* mySaga() {
    //// takeEvery 每个action都会执行
    //// 第一个参数即拦截的action类型  第二个参数为生成器函数
    // yield takeEvery(FETCH_HOME_MULTIDATA, fetchHomeMultidata)
    //// takeLatest一次只能监听一个action
    //// (发出了多个action,当前面的action没有执行完时,新的action被派发,则前面的action会被取消)
    // yield takeLatest(FETCH_HOME_MULTIDATA, fetchHomeMultidata)
    yield all([
        takeLatest(FETCH_HOME_MULTIDATA, fetchHomeMultidata)
    ])
}

export default mySaga
