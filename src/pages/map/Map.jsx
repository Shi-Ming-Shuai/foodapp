import React, { Component } from "react";

export default class Map extends Component {
  render() {
    return (
      <div style={{width:'100%',height:'100%'}}>
     {/* iframe 标签 内容展示 百度地图html */}
     <iframe src="/map.html" frameBorder="0" title="map"  style={{width:'100%',height:'100%'}}></iframe>
      </div>
    );
  }
}
