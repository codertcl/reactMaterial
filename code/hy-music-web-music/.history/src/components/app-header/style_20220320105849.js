import styled from 'styled-components'

export const HeaderWrapper = styled.div `
height:75px;
background-color:RGB(36,36,36);

.content{
    display: flex;
    justify-content: space-between;
    height:70px;
    /* background-color: #fffeaa; */
}

.divider:{
    height: 5px;
    background-color: #C20C0C;
}`

export const HeaderLeft = styled.div `
    display: flex;
    color:white;
    .logo{
        display: block;
        width: 176px;
        height: 69px;
        background-position: 0 0;
    }
    
    .select-list{
        display:flex;
        line-height:70px;

        .h-item{
          /* justify-content: space-between; */
          a{
            padding: 0 19px;
            text-decoration: none;
            display: inline-block;
            /* font-size: 14px; */
            color:rgb(204,204,204);
          }
           &:hover {
               background-color: black;
               color: rgb(255, 255, 255);
           }
          
          .active{
             color: rgb(255, 255, 255);
           }
        /* } */
    }
    `

export const HeaderRight = styled.div `
color:red;
    `
