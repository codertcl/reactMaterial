import React, {useContext} from "react";
import {themeContext, userContext} from "../App";

export default function UseConTextHookDemo() {
    const user = useContext(userContext)
    const theme = useContext(themeContext)
    console.log(user, theme)
    return (
        <div>
            <h3 style={{color:theme.color,fontSize:theme.fontSize}}>用户名{user.name}  年龄:{user.age}</h3>
        </div>
    )
}
