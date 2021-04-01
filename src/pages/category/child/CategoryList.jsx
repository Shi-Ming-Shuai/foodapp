import React, { Component } from "react";

// styled-components 样式
import { CategoryListWrap } from "../styledCategory";

// network请求
import { fetchCategoryList } from "network/category";

export default class CategoryList extends Component {
  state = {
    // 来自props 请求的数据 默认请求分类
    type: "category",
    datasource: null,
    // 对应的index 添加active类名 默认为0
    currentItem: "菜式",
  };

  // 生命周期函数  props发生改变  更新state
  static getDerivedStateFromProps(props, state) {
    // 当props传入的type发生变化的时候，更新state
    if (props.type !== state.type) {
      return {
        // 如果切换类别  则将state中的数据替换
        type: props.type,
        currentItem: props.currentItem,
      };
    }
    return null;
  }
  //生命周期函数 组件Dom渲染然 请求数据 分类 食材
  async componentDidMount() {
    let res = await fetchCategoryList();
    this.setState({
      datasource: res.data,
    });
  }

  // 点击类别的Item 修改当前组件 currentItem
  handleItems = (item) => {
    return () => {
      this.setState({
        currentItem: item,
      });
    };
  };
  render() {
    // 类别数据 返回对象key值数组 三元判断 数据是否存在
    let category = this.state.datasource
      ? Object.keys(this.state.datasource[this.state.type])
      : [];
    let categoryContents = this.state.datasource
      ? this.state.datasource[this.state.type][this.state.currentItem]
      : [];

    return (
      <CategoryListWrap>
        <div>
          <ul>
            {category.map((item) => {
              return this.state.currentItem === item ? (
                <li key={item} className="active">
                  <span>{item}</span>
                </li>
              ) : (
                <li key={item} onClick={this.handleItems(item)}>
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <ul>
            {categoryContents.map((item, i) => {
              return <li key={i}>{item}</li>;
            })}
          </ul>
        </div>
      </CategoryListWrap>
    );
  }
}
