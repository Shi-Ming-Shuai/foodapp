import React, { Component } from 'react'

// 导入carousel走马灯（轮播图）
import { Carousel } from 'antd-mobile'
// styled-componpet  (css)
import { SwiperWrap } from './styledCookbook'

// 导入共享的state
import { connect } from 'react-redux'

// 导入action-types   需要saga异步请求
import { GET_LIST } from "../../../store/actionTypes"


// connect  数据注入
const mapState = state => {
  return {
    list: state.home.list
  }
}
// connect  saga 异步请求  加载数据
const mapDispatch = dispatch => {
  return {
    loadData() {
      dispatch({
        type: GET_LIST
      })
    }
  }
}

// 使用装饰器 将组件连接state
@connect(mapState, mapDispatch)

class Swiper extends Component {

  componentDidMount() {
    // 页面一开始 请求数据
    this.props.loadData()
  }
  render() {
    return (
      <SwiperWrap>
        {/* </SwiperWrap>  css设置里图片的样式 */}
        {this.props.list.length && (
          <Carousel
            autoplay={true}
            autoplayInterval={2000}
            infinite
          >
            {
              this.props.list.slice(0, 5).map((item, i) => {
                return <img src={item.img} alt="" key={i} />
              })
            }
          </Carousel>
        )}
      </SwiperWrap >
    )
  }
}

export default Swiper