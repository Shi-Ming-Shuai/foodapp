
const { override, fixBabelImports, addWebpackAlias,addDecoratorsLegacy } = require('customize-cra');
// 给路径配置别名  addWebpackAlias 添加 path

const path = require('path');

// function resolve(dir) {
//   return path.join(__dirname, '.', dir)
// }

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),
  addWebpackAlias({
    // __dirname 以当前的名字 当做 参数二路径的别名
    assets: path.resolve(__dirname, 'src/assets'),
    pages: path.resolve(__dirname, './src/pages'),
    components:path.resolve(__dirname,'./src/components'),
    network:path.resolve(__dirname,'./src/network')
  }),
  
  // 使用装饰器
  addDecoratorsLegacy()
);