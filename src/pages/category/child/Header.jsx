import React, { Component } from "react";
// 导入配置的css
import { HeaderWrap } from "pages/category/styledCategory";

// 导入包裹组件的路由 withRouter
import {withRouter} from "react-router-dom"

class Header extends Component {
  state = {
    dir: "category",
  };
  handleClick = (dir) => {
    return ()=>{
      this.setState({
          dir
      })
      this.props.history.push(`/${dir}`)
  }
  };

  render() {
    return (
      <HeaderWrap>
        <ul>
          <li
            className={this.state.dir == "category" ? "active" : ""}
            onClick={this.handleClick("category")}
          >
            分类
          </li>
          <li
            className={this.state.dir == "material" ? "active" : ""}
            onClick={this.handleClick("material")}
          >
            食材
          </li>
          <li
            className={`slider ${this.state.dir == "material" ? "right" : ""}`}
          ></li>
        </ul>
      </HeaderWrap>
    );
  }
}
// // 包裹withRouter的作用就是, 如果我们某个东
// 西不是一个Router, 但是我们要依靠它去跳转一个页面,
// 比如点击页面的logo, 返回首页, 这时候就可以使用withRouter来做.
export default withRouter(Header)
