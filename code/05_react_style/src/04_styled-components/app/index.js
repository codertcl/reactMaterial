import React,{PureComponent} from "react";
import Home from "../home";
import Profile from "../profile";
import styled,{ThemeProvider} from 'styled-components'


const HYButton=styled.button`
padding:10px 20px;
color:red;
`

// const HYPrimaryButton=styled.button`
// padding:10px 20px;
// color:white;
// background-color: #efaeab;
// `

//继承HYButton样式
const HYPrimaryButton=styled(HYButton)`
color:white;
background-color: #efaeab;
`

export default class App extends PureComponent{
    constructor(props) {
        super(props);
        this.state={
             message:'你好'
        }
    }

    render() {
        return (
            //多个组件共享的样式
            <ThemeProvider theme={{themeColor:'skyblue',fontSize:"20px"}}>
                <h1>App</h1>
                <Home>Home</Home>
                <Profile>Profile</Profile>
                <HYButton>按钮</HYButton>
                <HYPrimaryButton>按钮2</HYPrimaryButton>
            </ThemeProvider>
        )
    }
}
