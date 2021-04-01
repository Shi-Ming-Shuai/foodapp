import React, { Component } from 'react'

// 导入样式
import { SearchWrap } from './styledSearch'
export default class Search extends Component {
  render() {
    return (
      <SearchWrap>
        <div>
          <img src={require('assets/img/search.png')} alt="" />
          <span>想吃什么，就搜索什么</span>
        </div>
      </SearchWrap>
    )
  }
}
