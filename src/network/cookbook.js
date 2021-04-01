import axios from 'axios'

// 轮播图数据
export async function fetchSwiperList() {
   let res = await axios.get("/api/list").then(res => res.data).catch(err => err.message)
   return res.data
}

// 热门类别数据 一定要添加async
export async function getHotCategory() {
   let res = await axios.get("/api/hotcategory").then(res => res.data).catch(err => err.message)
   return res
}

