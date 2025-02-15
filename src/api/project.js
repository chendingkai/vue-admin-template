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

export function deleteById(params) {
  return request({
    url: '/project/deleteById',
    method: 'post',
    data: params == null ? {} : params
  })
}

export function ymlDetailById(params) {
  return request({
    url: '/project/ymlDetailById',
    method: 'post',
    data: params == null ? {} : params
  })
}

export function ymlEdit(params) {
  return request({
    url: '/project/ymlEdit',
    method: 'post',
    data: params == null ? {} : params
  })
}
