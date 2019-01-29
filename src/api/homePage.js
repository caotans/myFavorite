import request from "@/utils/request";
import { FOSUNAPI } from "./config";

/**
 * 获取场景列表
 * @param {
 *  current: 页码
 *  size: 数量
 * }
 */
export function readJson(type) {
  console.log(`src/api/homePage.js.readJson(`, type, `)`);
  FOSUNAPI.HOMEPAGE.GetJson.data = type;
  return request(FOSUNAPI.HOMEPAGE.GetJson);
}
