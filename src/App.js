// 全局css
import 'assets/style/reset.css'

import React from 'react';
import Layout from './pages/Layout'

// 导入react-redux
import { Provider } from 'react-redux'
import store from './store'

// 导入react-router
import {BrowserRouter as Router} from "react-router-dom"
function App() {
  return (
    // 将reducers 挂载到全局  使用Router
    <Provider store={store}>
      <Router>
        <div className="App">
          <Layout />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
