import styled from 'styled-components';

//生成div
export const HomeWrapper = styled.div`
  font-size: 12px;
  color: red;

  .banner {
    background-color: blue;

    span {
      color: #fff;

      //添加了active类的span
      &.active {
        color: red;
      }

      &:hover {
        color: green;
      }

      &::after {
        content: "aaa"
      }
    }

    /* .active {
      color: #f00;
    } */
  }
`

export const TitleWrapper = styled.h2`
  text-decoration: underline;
  //通过ThemeProvider设置的样式
  color: ${props => props.theme.themeColor};
  font-size: ${props => props.theme.fontSize};
`
