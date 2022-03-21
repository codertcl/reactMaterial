import React, {memo} from "react";

import {NavLink} from "react-router-dom";

import {HeaderWrapper,HeaderRight,HeaderLeft} from './style'
export default memo(function TLAppHeader() {
    return (
        <HeaderWrapper>
         <div className="content wrap-v1">
             <HeaderLeft>
                 <a href="#" cl></a>
             </HeaderLeft>
             <HeaderRight>222</HeaderRight>
         </div>
         <div className="divider"></div>
        </HeaderWrapper>
    )
})
