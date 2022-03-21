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

        .select-item{
            position: relative;
          a{
            padding: 0 19px;
            text-decoration: none;
            display: inline-block;
            font-size: 14px;
            color:rgb(204,204,204);
          }

          :last-of-type a{
              position: relative;
              /* 引入hot图标*/
              ::after{
                  position: absolute;
                  content:"";
                  width: 28px;
                  height: 19px;
                  /* 图片路径使用了别名所以需要当成模块来导入精灵图 */
                  background-image: url(${require("@/assets/img/sprite_01.png")});
                  /* background-image: url("@/assets/img/sprite_01.png"); */
                  background-position: -190px 0;
                  top: 20px;
                  right: -15px;
              }
          }

           &:hover a,&.active a{
               background-color: black;
               color: rgb(255, 255, 255);
           }

           &.active .icon {
             position: absolute;
             display: inline-block;
             width: 12px;
             height: 7px;
             bottom: -1px;
             left:50%;
             transform: ;
           }
    }
}
    `

export const HeaderRight = styled.div `
color:red;
    `