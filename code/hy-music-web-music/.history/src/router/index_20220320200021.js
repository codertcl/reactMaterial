import React from "react";
import {Redirect} from "react-router-dom";
import TLDiscover from '@/pages/discover/index.js'
import TLFriend from '@/pages/friend/index.js'
import TLMine from '@/pages/mine/index.js'


const routes = [
    {
        path: '/',
        exact:true,
        // component: TLDiscover,
        render:()=>{
            <Redirect to="/discover"/>
        }
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
