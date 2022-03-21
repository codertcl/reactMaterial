import styled from 'styled-components'

export const HeaderWrapper = styled.div `
height:75px;
background-color:RGB(36,36,36);

.content{
    display: flex;
    justify-content: space-between;
    height:70px;
    background-color: #fffeaa;
}

.divider:{
    height: 5px;
    background-color: #C20C0C;
}`

export const HeaderLeft = styled.div `
    color:white;
    .logo{
        display: block;
        width: 176px;
        height: 69px;
        background-position: 0 0;
    }
    `

export const HeaderRight = styled.div `
color:red;
    `