
// 导入仓库创建 redux 创建中间件
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import mySaga from './sagas'

// 导入 创建saga中间件    
import createSagaMiddleware from 'redux-saga'
const sagaMiddleware = createSagaMiddleware()

// 创建仓库
const store = createStore(reducers,
  applyMiddleware(sagaMiddleware))


sagaMiddleware.run(mySaga)

// 导出仓库
export default store