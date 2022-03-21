import React from "react";
import {
    Redirect
} from "react-router-dom";
import TLDiscover from '@/pages/discover/index.js'
import TLRecommend from '@/pages/discover/c-pages/recommend'
import TLAlbum from '@/pages/discover/c-pages/album'
import TLDjradio from '@/pages/discover/c-pages/djradio'
import TLArtist from '@/pages/discover/c-pages/artist'
import TLRanking from '@/pages/discover/c-pages/ranking'
import TLSongs from '@/pages/discover/c-pages/songs'
import TLFriend from '@/pages/friend/index.js'
import TLMine from '@/pages/mine/index.js'

const routes = [
    {
        path: '/',
        exact: true,
        // component: TLDiscover,
        render: () => (
            <Redirect to="/discover"/>
        )
    },
    {
        path: '/discover',
        component: TLDiscover,
        routes:[
            {
                path: "/discover",
                exact: true,
                render: () => (
                    <Redirect to="/discover/recommend"/>
                )
            },
            {
                path: '/discover/recommend',
                component: TLRecommend,
            },
            {
                path: '/discover/album',
                component: TLAlbum,
            },
            {
                path: '/discover/artist',
                component: TLArtist,
            },
            {
                path: '/discover/djradio',
                component: TLDjradio,
            },
            {
                path: '/discover/ranking',
                component: TLRanking,
            },
            {
                path: '/discover/songs',
                component: TLSongs,
            },
        ]
    },
    {
        path: '/mine',
        component: TLMine,
    },
    {
        path: '/friend',
        component: TLFriend,
    },
]

export default routes
