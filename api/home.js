import request from "@/utils/request.js"

export const getXXXAPI = () => {
  return request.get('/home/swiperdata')
}
/**
 * 获取分类数据
 * */
export const getNavList = () => {
  return request.get('/home/catitems')
}
/**
 * 获取楼层数据
 * */
export const getFloorList = () => {
  return request.get('/home/floordata')
}

export const getGoodsDetail = (id) => request.get('/goods/detail', {
  goods_id: id
})
