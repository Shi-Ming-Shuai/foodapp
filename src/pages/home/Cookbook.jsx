import React, { Component } from 'react'

// 组件
import Header from './childCpn/Header'
import Swiper from './childCpn/Swiper'
import Search from 'components/content/Search'
import HotCategoty from './childCpn/HotCategory'
import HotList from './childCpn/HotList'



export default class Cookbook extends Component {
  render() {
    return (
      <div>
        <Header />
        <Swiper />
        <Search />
        <HotCategoty />
        <HotList />
      </div>
    )
  }
}
