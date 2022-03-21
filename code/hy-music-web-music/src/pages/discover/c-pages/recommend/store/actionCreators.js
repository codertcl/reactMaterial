import * as actionTypes from './constants'
import {getTopBanner} from '@/services/recommend.js'

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
