// 将要使用的模拟数据导入
const hotcategory = require('./cookbook-hotcate.json')
const list = require('./cookbook-list.json')
const category = require('./cookbook-category.json')

// 将要使用的模拟数据导出
module.exports = () =>{
  // return 必须导出对象  数据必须是对象
  return {
    hotcategory,
    list,
    category
  }
}