// 导入reducers 组合器
import { combineReducers } from "redux"
// 导入要组合的reducers
import { reducers as home } from "pages/home/store"

// 导出一个对象  key = 哪个文件的reducers（home） 
// value = 导入的reducers别名
export default combineReducers({
  home : home
})
