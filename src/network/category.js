import axios from 'axios'

// category 组件 数据

export  async function fetchCategoryList(){
  let res = await  axios.get("/api/category").then(res => res.data)
  return res
}

