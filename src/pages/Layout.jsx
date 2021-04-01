import { TabBar } from "antd-mobile";
import React from "react";

// 每一项Item tabbar 展示的组件
import { Cookbook } from "pages/home/store";
import Category from "pages/category/Category";
import Map from "pages/map/Map";
import More from "pages/more/More";

// 使用装饰器 将store state映射到 这个组件中
import { connect } from "react-redux";

// 将reducers 中的state 映射到当前组件 props 中
const setStateToProps = (state) => {
  return {
    isShow: state.home.isShow,
  };
};

@connect(setStateToProps)
class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "category",
      hidden: false,
      fullScreen: true,
    };
  }

  render() {
    console.log(this.props);
    return (
      <div
        style={
          this.state.fullScreen
            ? { position: "fixed", height: "100%", width: "100%", top: 0 }
            : { height: 400 }
        }
      >
        <TabBar
          unselectedTintColor="#666"
          tintColor="#000"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          {/* 菜谱  首页 */}
          <TabBar.Item
            title="菜谱大全"
            key="cookbook"
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background: `url(${require("assets/img/cookbook.png")}) center center /  21px 21px no-repeat`,
                  // https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background: `url(${require("assets/img/cookbook-active.png")}) center center /  21px 21px no-repeat`,
                }}
              />
            }
            selected={this.state.selectedTab === "cookbook"}
            onPress={() => {
              this.setState({
                selectedTab: "cookbook",
              });
            }}
            data-seed="logId"
          >
            {/* 主页  美食大全组件 */}
            <Cookbook />
          </TabBar.Item>
          {/* 菜单  分类 */}
          <TabBar.Item
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background: `url(${require("assets/img/menu.png")}) center center /  21px 21px no-repeat`,
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background: `url(${require("assets/img/menu-active.png")}) center center /  21px 21px no-repeat`,
                }}
              />
            }
            title="菜单"
            key="category"
            selected={this.state.selectedTab === "category"}
            onPress={() => {
              this.setState({
                selectedTab: "category",
              });
            }}
            data-seed="logId1"
          >
            {/* 分类组件 */}
            <Category />
          </TabBar.Item>
          {/* 判断Switch是否为打开状态 显示 美食地图 */}

          <TabBar.Item
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background: `url(${require("assets/img/location.png")}) center center /  21px 21px no-repeat`,
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background: `url(${require("assets/img/location-active.png")}) center center /  21px 21px no-repeat`,
                }}
              />
            }
            title="美食地图"
            key="location"
            selected={this.state.selectedTab === "location"}
            onPress={() => {
              this.setState({
                selectedTab: "location",
              });
            }}
          >
            <Map />
          </TabBar.Item>

          {/* 更多 */}
          <TabBar.Item
            icon={{ uri: require("assets/img/more.png") }}
            selectedIcon={{ uri: require("assets/img/more-active.png") }}
            title="更多"
            key="more"
            selected={this.state.selectedTab === "more"}
            onPress={() => {
              this.setState({
                selectedTab: "more",
              });
            }}
          >
            <More />
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default Tab;
