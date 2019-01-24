import request from "@/utils/request";
import { FOSUNAPI } from "./config";

/**
 * 获取场景列表
 * @param {
 *  current: 页码
 *  size: 数量
 * }
 */
export function getSenderList(param) {
  console.log(`src/api/sender.js.getSenderList(`, param, `)`);
  FOSUNAPI.SENDER.GetList.data = param;
  return request(FOSUNAPI.SENDER.GetList);
}

/**
 * 更新场景
 * @param { homePage: 场景对象 }
 * @todo no success
 */
export function editSender(sender) {
  FOSUNAPI.SENDER.EditSender.data = sender;
  return request(FOSUNAPI.SENDER.EditSender);
}

/**
 * 新增场景
 * @param { homePage: 场景对象 }
 * @todo no success
 */
export function addSender(sender) {
  FOSUNAPI.SENDER.AddSender.data = sender;
  return request(FOSUNAPI.SENDER.AddSender);
}

/**
 * 启用场景
 * @param { homePage: 场景对象 }
 * @todo no success
 */
export function startSender(id) {
  return request({
    method: "put",
    url: `${FOSUNAPI.SENDER.StartSender.url}/${id}`
  });
}

/**
 * 停用场景
 * @param { homePage: 场景对象 }
 * @todo no success
 */
export function stopSender(id) {
  return request({
    method: "get",
    url: `${FOSUNAPI.SENDER.StopSender.url}/${id}`
  });
}

/**
 * 删除场景
 * @param { homePage: 场景对象 }
 * @todo no success
 */
export function deleteSender(id) {
  return request({
    method: "delete",
    url: `${FOSUNAPI.SENDER.DeleteSender.url}/${id}`
  });
}
