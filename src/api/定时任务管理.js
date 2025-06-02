import service from '@/api/request'

import {取url根入口路径} from "@/utils/utils";
const url=取url根入口路径() +"/Cron/"

// 列表
export const GetList = (data) => {
  return service({
    url: url+'GetList',
    method: 'post',
    data: data
  })
}

//  添加
export const Create = (data) => {
  return service({
    url: url+'Create',
    method: 'post',
    data: data
  })
}
//  Del批量删除
export const DeleteInfo = (data) => {
  return service({
    url: url+'Delete',
    method: 'post',
    data: data
  })
}

//  Del批量删除
export const Update = (data) => {
  return service({
    url: url+'Update',
    method: 'post',
    data: data
  })
}
//  查询
export const Info = (data) => {
  return service({
    url: url+'Info',
    method: 'post',
    data: data
  })
}

//  批量维护删除
export const DeleteBatch = (data) => {
  return service({
    url: url+'DeleteBatch',
    method: 'post',
    data: data
  })
}

//  更新状态
export const UpdateStatus = (data) => {
  return service({
    url: url+'UpdateStatus',
    method: 'post',
    data: data
  })
}

//  测试执行
export const TestRunId = (data) => {
  return service({
    url: url+'TestRunId',
    method: 'post',
    data: data
  })
}
