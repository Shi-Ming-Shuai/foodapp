import React, { Component } from 'react'
import { connect } from 'react-redux';
import { HotListWrap } from './styledCookbook'


// 使用connect 将state数据 放到这个组件中
@connect((state) => ({
  hotList: state.home.list
}))

class HotList extends Component {
  render() {
    return (
      <HotListWrap>
        {/* 此组件使用的都是HTML5 新增的标签 */}
        <header>精品好菜</header>
        {/* figure  主流内容   figcaption 标题*/}
        <div>
          {this.props.hotList.slice(0, 20).map((item, i) => {
            return (<figure key={i}>
              <img src={item.img} alt="" />
              <figcaption>
                <h3>{item.name}</h3>
                <p>{item.all_click}浏览&nbsp;&nbsp;{item.favorites}收藏</p>
              </figcaption>
            </figure>)
          })}
        </div>
      </HotListWrap>
    )
  }
}
export default HotList