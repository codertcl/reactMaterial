import React, {useEffect} from "react";

const Home=(props)=>{
    useLogLife('Home')
    return <h2>home</h2>
}

const Profile=(props)=>{
    useLogLife('Profile')
    return <h2>Profile</h2>
}

//自定义Hook 命名以use开头
function useLogLife(name) {
    useEffect(() => {
        console.log(`组件${name}被创建`)
        return () => {
            console.log(`组件${name}被销毁`)
        }
    }, [])
}

export default function CustomHookDemo01() {
    useLogLife('CustomHookDemo01')
    return (
        <div>
            <h3>自定义Hook</h3>
            <Home/>
            <Profile/>
        </div>
    )
}
