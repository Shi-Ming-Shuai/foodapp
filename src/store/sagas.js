// 导入saga/ effects 中的  方法     网络请求swpierList
import { takeEvery, put, all } from "redux-saga/effects"
import { fetchSwiperList } from "network/cookbook"

// 导入action types  行为状态
import { GET_LIST, ChANGE_LIST } from "./actionTypes"

//处理拿到的 action 
function* fetchList(action) {
  try {
    let res = yield fetchSwiperList()
    yield put({ type: ChANGE_LIST, res: res })
  } catch (e) {

  }
}


// 拿到组件发送的异步方法   传递处理完毕后的状态
function* watchList() {
  yield takeEvery(GET_LIST, fetchList)
}



// 将sagas导出
export default function* mySaga() {
  yield all([
    watchList()
  ])
}