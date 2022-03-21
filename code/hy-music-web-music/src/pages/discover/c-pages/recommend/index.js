// import React, {memo, useEffect} from "react";
// import {connect} from "react-redux";
// import {getTopBannerAction} from "./store/actionCreators";
//
// function TlRecommend(props) {
//     const {getBanners} = props
//     useEffect(() => {
//         getBanners()
//     }, [getBanners])
//     return (
//         <div>
//             <h2>Recommend</h2>
//         </div>
//     )
// }
//
// const mapStateToProps = state => {
//     return {
//         topBanners: state.recommend.topBanners
//     }
// }
// const mapDispatchToProps = dispatch => ({
//     getBanners: () => {
//         dispatch(getTopBannerAction());
//     }
// })
//
// export default connect(mapStateToProps, mapDispatchToProps)(memo(TlRecommend))


import React, {memo, useEffect} from "react";
import {Map} from 'immutable'
import {useDispatch, useSelector} from "react-redux";
import {getTopBannerAction} from "./store/actionCreators";

//使用hooks进行网络请求
function TlRecommend(props) {
    //获取请求结果数据 useSelector返回对象
    const {topBanners} = useSelector(state => ({
        topBanners: state.recommend.get("topBanners")
        // topBanners: state.recommend.topBanners
    }))

    //useDispatch作用：共享状态，返回Redux的store中对dispatch的引用
    //可执行redux中的方法
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getTopBannerAction())
    }, [dispatch])
    return (
        <div>
            <h2>Recommend</h2>
        </div>
    )
}

export default memo(TlRecommend)
