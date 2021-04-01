import styled from 'styled-components'
// Header组件 样式
export const HeaderWrap = styled.div`
    height:0.44rem;
    background:#ee742f;
    font-size:0.18rem;
    color:#fff;
    text-align: center; 
    line-height: 0.44rem;
`

// Swiper组件 样式
export const SwiperWrap = styled.div`
    height:0;
    font-size:0;
    padding-bottom:66.66667%;
      img{
        width:100%;
      }
`

// HotList 组件 样式
export const HotListWrap = styled.div`
    padding:0.2rem 0.2rem;
    header{
      color:#969696;
    }
    >div{
      display:flex;
      justify-content:space-between;
      flex-wrap:wrap;
      figure{
        width:48%;
        margin:0.15rem 0rem;
        background-color:#fff;
        overflow:hidden;
        /* figure 标签里边的img */
        img{
         width:100%;
       }
      /* figcaption */
      figcaption{
        height:0.8rem;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;

        p{
          color:#b4b4b4;
          font-size:0.5em;
        }
      }
      }
    }
`

