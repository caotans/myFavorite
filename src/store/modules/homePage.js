import { readJson } from "../../api/homePage";

const homePage = {
  state: {
    senderList: {
      list: [],
      page: {
        current: 1,
        pages: 1,
        size: 10
      },
      options: []
    }
  },
  mutations: {

  },
  actions: {
    // 页码切换
    async readJsonFile({ dispatch, commit }, activeName) {
      const res = await readJson(activeName);
      console.log(res);
      return res;
    }
  }
};

export default homePage;
