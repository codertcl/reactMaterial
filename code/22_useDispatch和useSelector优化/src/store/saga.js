import {put, takeEvery,all,takeLatest} from 'redux-saga/effects'
import {FETCH_HOME_MULTIDATA} from './home/constants'
import axios from "axios";
import {changeBannerAction,changeRecommendAction} from "./home/actionCreators";

function* fetchHomeMultidata(action) {
    const res = yield axios.get("http://123.207.32.32:8000/home/multidata")
    const banner = res.data.data.banner.list
    const recommend = res.data.data.recommend.list
    // yield put(changeBannerAction(banner))
    // yield put(changeRecommendAction(recommend))
    yield all([
        yield put(changeBannerAction(banner)),
        yield put(changeRecommendAction(recommend))
    ])
}

function* mySaga() {
    //takeLatest一次只能监听一个action
    // takeEvery 每个action都会执行
    // yield takeEvery(FETCH_HOME_MULTIDATA, fetchHomeMultidata)
    // yield takeLatest(FETCH_HOME_MULTIDATA, fetchHomeMultidata)
    yield all([
        takeLatest(FETCH_HOME_MULTIDATA, fetchHomeMultidata)
    ])
}

export default mySaga
