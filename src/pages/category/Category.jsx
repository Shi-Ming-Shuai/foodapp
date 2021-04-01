import React, { Component } from "react";

// 当前页面内容组件
import Header from "./child/Header";
import Search from "components/content/Search";
import CategoryList from "./child/CategoryList";

// 超出屏幕内容 隐藏 （左侧 y轴 触发滚动条）
import { CateWrap } from "./styledCategory";

// 导入路由
import { Route, Switch, Redirect } from "react-router-dom";

export default class Categoty extends Component {
  render() {
    return (
      <CateWrap>
        <Header />
        <Search />
        {/* 组件唯一路径 */}
        <Switch>
          <Route path="/category" render={()=>(<CategoryList currentItem="热门" type="category"/>)} />
          {/* 如果路径等于material  分类列表请求material数据 */}
          <Route path="/material" render={()=>(<CategoryList currentItem="肉类" type="material"/>)} />
          <Redirect from="/" to="/category" />
        </Switch>
      </CateWrap>
    );
  }
}
