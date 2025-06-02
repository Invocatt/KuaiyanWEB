import service from '@/api/request'

import {取url根入口路径} from "@/utils/utils";
const url=取url根入口路径() +"/LogRMBPayOrder/"
// 分页获取Ka信息列表
//{ "Page": 0,"Size": 10 }
// @Success 200 {string} json "{"success":true,"data":{},"msg":"获取成功"}"
export const GetLogRMBPayOrderList = (data) => {
  return service({
    url: url+'GetList',
    method: 'post',
    data: data
  })
}

//  Del批量删除Ka
//{ "id": [ 5 ]}
// @Success 200 {string} json "{"code": 0, "data": {},"msg": "注销成功"}"
export const Del批量删除LogRMBPayOrder = (data) => {
  return service({
    url: url+'Delete',
    method: 'post',
    data: data
  })
}

//  Del批量删除Ka
//{ "id": [ 5 ]}
// @Success 200 {string} json "{"code": 0, "data": {},"msg": "注销成功"}"
export const NewRMBPayOrder = (data) => {
  return service({
    url: url+'New',
    method: 'post',
    data: data
  })
}
//  退款
export const OutRMBPayOrder = (data) => {
  return service({
    url: url+'Out',
    method: 'post',
    data: data
  })
}

//  SetAdminNote
//...
// @Success 200 {string} json "{"code": 0, "data": {},"msg": "修改成"}"
export const SetPayOrderNote = (data) => {
  return service({
    url: url+'SetPayOrderNote',
    method: 'post',
    data: data
  })
}
