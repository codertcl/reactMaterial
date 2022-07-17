import request from './request'

//请求轮播图数据
export function getTopBanner() {
    return request({
        url: '/banner'
    })
}

//请求推荐中热门推荐数据
export function getHotRecommends(limit) {
    return request({
        url: '/personalized',
        params:{
            limit
        }
    })
}


//新碟上架数据
export function getNewAlbums(limit) {
    return request({
        url: '/top/album',
        params:{
            limit
        }
    })
}


//获取排行榜
export function getTopList(idx) {
    return request({
        url: '/top/list',
        params:{
            idx
        }
    })
}

