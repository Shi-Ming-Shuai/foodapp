import React, { Component } from 'react'

// antd-mobile
import { Grid } from 'antd-mobile'

// 网络请求
import { getHotCategory } from 'network/cookbook'



export default class HotCategory extends Component {
  state = {
    hotList: []
  }
  // 声明周期函数 组件创建完后调用   组件没安装之前
  async componentDidMount() {
    // 发送网络请求
    let result = await getHotCategory()
    // 将请求结果赋值给这个组件的状态
    this.setState({
      hotList: result
    })
  }
  render() {
    return (
      <div>
        <Grid data={this.state.hotList}
          columnNum={3}
          hasLine={false}
          renderItem={dataItem => (
            <div style={{ padding: '12.5px' }}>
              <img src={dataItem.img} style={{ width: '70px', height: '70px' }} alt="" />
              <div style={{ color: '#888', fontSize: '14px', marginTop: '5px' }}>
                <span>{dataItem.title}</span>
              </div>
            </div>
          )}
        />
      </div>
    )
  }
}
