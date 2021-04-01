// 导入axios
import axios from "axios"

export const get = ({url}) => {
  return axios({
    method: "get",
    url
  }).then(res => {
    return res.data
  })
}