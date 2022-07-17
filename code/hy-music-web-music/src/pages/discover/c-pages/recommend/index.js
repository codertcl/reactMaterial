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
import TLTopBanner from './c-cpns/top-banner/index'
import TLHotRecommend from './c-cpns/hot-recommend/index'
import TLNewAlbum from './c-cpns/new-album/index'
import TLUserLogin from './c-cpns/user-login/index'
import TLHotAnchor from './c-cpns/hot-anchor/index'
import TLSettleSinger from './c-cpns/settle-singer/index'
import TLRecommendRanking from './c-cpns/recommend-ranking/index'
import {
    RecommendWrapper,
    Content,
    RecommendLeft,
    RecommendRight
} from "./style";

//使用hooks进行网络请求
export default memo(function TlRecommend(props) {
    return (
        <RecommendWrapper>
            <TLTopBanner/>
            <Content className="wrap-v2">
                <RecommendLeft>
                    <TLHotRecommend/>
                    <TLNewAlbum/>
                    <TLRecommendRanking/>
                </RecommendLeft>
                <RecommendRight>
                    <TLUserLogin/>
                    <TLSettleSinger/>
                    <TLHotAnchor/>
                </RecommendRight>
            </Content>
        </RecommendWrapper>
    )
})

