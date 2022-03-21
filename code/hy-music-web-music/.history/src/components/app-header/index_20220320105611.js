import React, {memo} from "react";

import {NavLink} from "react-router-dom";
import {headerLinks} from '@/common/local-data.js'
import {HeaderLeft, HeaderRight, HeaderWrapper} from './style'

export default memo(function TLAppHeader() {
    //业务逻辑代码
    const showSelectItem = (item, index) => {
        if (index < 3) {
            return (
                <NavLink to={item.link}>{item.title}</NavLink>
            )
        } else {
            return <a className="link" href={item.link}>{item.title}</a>
        }
    }
    return (
        <HeaderWrapper>
            <div className="content wrap-v1">
                <HeaderLeft>
                    <a href="#/" className="logo sprite_01"/>
                    <div className="select-list">
                        {
                            headerLinks.map((item, index) => {
                                return <div className="header-item" key={item.title}>
                                    {showSelectItem(item,index)}
                                </div>
                            })
                        }
                    </div>
                </HeaderLeft>
                <HeaderRight>222</HeaderRight>
            </div>
            <div className="divider"></div>
        </HeaderWrapper>
    )
})
