import React, { Component } from "react";

// 导入Switch组件   // 导入装饰器
import { Switch } from "antd-mobile";
import { connect } from "react-redux";

// 导入派遣类型
import { SET_SHOW } from "../../store/actionTypes";

// 将全局state 映射到组件的Props中
const mapStateToProps = (state) => {
  return {
    isShow: state.home.isShow,
  };
};
// 在props中添加一个 dispatch的方法
const mapDispatchToProps = (dispatch) => {
  return {
    changeShow(checked) {
      dispatch({
        // type 必填 （发送的类型名称）
        type: SET_SHOW,
        data: checked,
      });
    },
  };
};
// 使用装饰器   获取state 和 派遣action
@connect(mapStateToProps, mapDispatchToProps)
class More extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        是否在标签栏显示美食地图：
        <Switch
          checked={this.props.isShow}
          onClick={() => {
            // 点击Switch按钮  修改全局状态（控制标签栏 美食地图是否显示）
            this.props.changeShow(!this.props.isShow);
          }}
        />
      </div>
    );
  }
}
export default More;
