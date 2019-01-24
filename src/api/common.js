import request from '@/utils/request'
import { FOSUNAPI } from './config'

export function getClientDropDownList() {
  return request(FOSUNAPI.common.ClientDropDownList)
}

export function getTemplateDropDownList(param) {
  return request({
    method: FOSUNAPI.common.TemplateDropDownList.method,
    url: `${FOSUNAPI.common.TemplateDropDownList.url}/${param.clientId}`,
    params: { type: param.type }
  })
}
