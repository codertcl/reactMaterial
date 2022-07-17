import * as actionTypes from './constants'
import {getTopBanner,getHotRecommends,getNewAlbums,getTopList} from '@/services/recommend.js'

////请求轮播图数据
export const getTopBannerAction = () => {
    return dispatch => {
        getTopBanner().then(res => {
            dispatch(changeTopBannerAction(res));
        })
    }
}

export const changeTopBannerAction = (res) => ({
    type: actionTypes.CHANGE_TOP_BANNERS,
    topBanners: res.banners
})


////请求推荐中热门推荐数据
export const getHotRecommendsAction = (limit) => {
    return dispatch => {
        getHotRecommends(limit).then(res => {
            dispatch(changeHotRecommendsAction(res));
        })
    }
}

export const changeHotRecommendsAction = (res) => ({
    type: actionTypes.CHANGE_HOT_RECOMMEND,
    hotRecommends: res.result
})


////请求推荐中新碟上架数据
export const getNewAlbumsAction = (limit) => {
    return dispatch => {
        getNewAlbums(limit).then(res => {
            dispatch(changeNewAlbumsAction(res));
        })
    }
}

export const changeNewAlbumsAction = (res) => ({
    type: actionTypes.CHANGE_NEW_ALBUM,
    newAlbums: res.albums
})


////请求首页中榜单数据
export const getTopListAction = (idx) => {
    return dispatch => {
        getTopList(idx).then(res => {
            switch (idx) {
                case 0:
                    dispatch(changeUpRankingAction(res));
                    break;
                case 2:
                    dispatch(changeNewRankingAction(res));
                    break;
                case 3:
                    dispatch(changeOriginRankingAction(res));
                    break;
                default:
            }
        })
    }
}

export const changeUpRankingAction = (res) => ({
    type: actionTypes.CHANGE_UP_RANKING,
    upRanking: res.playlist
})


export const changeNewRankingAction = (res) => ({
    type: actionTypes.CHANGE_NEW_RANKING,
    newRanking: res.playlist
})

export const changeOriginRankingAction = (res) => ({
    type: actionTypes.CHANGE_ORIGIN_RANKING,
    originRanking: res.playlist
})

