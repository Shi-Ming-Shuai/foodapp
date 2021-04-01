// 导入 sagas 封装的action-types
import { ChANGE_LIST,SET_SHOW } from "../../../store/actionTypes"
// 配置默认状态
let defaultState = {
  list: [],
  isShow:true
}
// 导出状态 和action
export default (state = defaultState, action) => {
  switch (action.type) {
    case ChANGE_LIST:
      return {
        ...state,
        list: action.res
      }
      break;
      case SET_SHOW:
        return {
          ...state,
          isShow:action.data
        }
        break;
    default:
      return state;
      break;
  }
}
