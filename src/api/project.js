import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/project/list',
    method: 'post',
    data: params == null ? {} : params
  })
}

export function getListByPage(params) {
  return request({
    url: '/project/listByPage',
    method: 'post',
    data: params == null ? {} : params
  })
}
