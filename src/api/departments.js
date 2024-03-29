import request from '@/utils/request'

export function getDepartments() {
  return request({
    url: '/company/department'
  })
}

// 删除
export function delDepartments(id) {
  return request(
    { url: `/company/department/${id}`,
      method: 'delete' })
}

// 新增
export function addDepartments(data) {
  return request({
    url: '/company/department',
    method: 'post',
    data
  })
}

/** *
 * 获取部门详情
 * ***/
export function getDepartDetail(id) {
  return request({
    url: `/company/department/${id}`
  })
}

export function updateDepartments(data) {
  return request({
    url: `/company/department/${data.id}`,
    method: 'put',
    data
  })
}
