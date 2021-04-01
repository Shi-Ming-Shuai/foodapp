// 导入style-conponets
import styled from "styled-components"

export const HeaderWrap = styled.div`
  height:.44rem;
  background:#ee742f;
  display:flex;
  align-items:center;
  justify-content:center;
  ul{
      width:1.4rem;
      height:.3rem;
      display:flex;
      position:relative;
      border:1px solid #fff;
      border-radius:.15rem;

      /* //  3 修改添加滑块 */
      z-index:0;
      li{
          flex:1;
          line-height:.3rem;
          text-align:center;
          color:#fff;
          border-radius:.15rem;
          
          &:last-child{
            position:absolute;
            /* //  1 修改添加滑块 */
            width:50%;
            height:.3rem;
            background:#fff;
            z-index:-1;
           
           /* 增加滑动动画 */
           transform: translate(0,0);
           transition: all 0.4s ease-in;
            &.right{
              transform: translate(100%,0)
            }
          }
          &.active{
            color:#ee742f;
          }
      }
  }
`

export const CateWrap = styled.div`
  height:100%;
  overflow:hidden;  
`

export const CategoryListWrap = styled.div`
  display: flex;
  height:100%;
    > div:first-child {
      width 0.9rem;
        >ul{
          /* 设置y轴 内容 溢出触发滚动效果  
          （给父盒子设置一下） overflow:hidden*/
          height:100%;
          overflow-y : scroll;
         >li{
          height: 0.5rem;
          line-height: 0.5rem;
          text-align: center;
            &.active{
              background:#fff;
                span{
                  display:inline-block;
                  height:100%;
                  border-bottom:2px solid #df7b2d;
                }
            }
        }
      } 
    }
    >div:last-child{
      background: #fff;
      flex: 1;
      padding:0.3rem;
        >ul{
          display:flex;
          flex-wrap:wrap;
          align-content:flex-start;
          height:100%;
          overflow-y:scroll;
          >li{
            text-align:center;
            width:33.3333%;
            height:0.5rem;
            line-height:0.5rem;
          }
        }
    }
`