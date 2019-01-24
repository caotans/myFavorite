import { getSenderList, deleteSender, addSender, editSender, startSender, stopSender } from "../../api/sender";
import omit from "lodash/omit";

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
    "SET_SENDERLIST": (state, data) => {
      state.senderList.list = data;
    },
    "SET_SENDERPAGE": (state, page) => {
      state.senderList.page = page;
    },
    "SET_SENDER_PARAMs": (state, { current, size, sendAccount, endTime, startTime }) => {
      state.senderList.page.current = current;
      state.senderList.page.size = size;
      state.senderList.page.sendAccount = sendAccount;
      state.senderList.page.endTime = endTime;
      state.senderList.page.startTime = startTime;
    },
    "DELETE_SENDERLIST": (state, data) => {
      // delete
    },
    "UPDATE_SENDERLIST": (state, sender) => {
      state.senderList.list = state.senderList.list.map(sen => {
        if (sen.id === sender.id) sen = sender;
        else return sen;
        return sen;
      });
    },
    "SET_OPTIONS": (state, datas) => {
      const options = [];
      datas.forEach(data => {
        options.push({
          value: data.id,
          label: data.sendAccount
        });
      });
      state.senderList.options = options;
    }
  },
  actions: {
    // 获取tableList 数据
    async getSenderList({ commit, state }, query = {
      current: state.senderList.page.current,
      size: state.senderList.page.size
    }) {
      console.log(`getSenderList(query)`, query);
      console.log(`getSenderList(state.senderList.page)`, omit(state.senderList.page, ["total"]));
      const resData = await getSenderList(omit(state.senderList.page, ["total", "pages"]));
      // records
      commit("SET_SENDERLIST", resData.data.data.records);
      delete resData.data.data.records;
      commit("SET_SENDERPAGE", resData.data.data);
    },
    // 搜索账户
    async searchSender({ dispatch, state }, account) {
      dispatch("getSenderList", {
        current: state.senderList.page.current,
        size: state.senderList.page.size,
        userDefined: {
          sendAccount: account + ""
        }
      });
    },
    // 搜索账户
    async searchSenderAccount({ commit, state }, account) {
      const query = {
        current: state.senderList.page.current,
        size: state.senderList.page.size,
        userDefined: {
          sendAccount: account + ""
        }
      };
      const res = await getSenderList(query);
      commit("SET_OPTIONS", res.data.data.records);
    },
    // 新增发件人
    async addSender({ commit, dispatch }, sender) {
      const res = await addSender(sender);
      if (res) {
        dispatch("getSenderList");
        return true;
      } else return false;
    },
    // 修改发件人
    async updateSender({ commit }, sender) {
      const res = await editSender(sender);
      if (res) {
        commit("UPDATE_SENDERLIST", sender);
        return true;
      } else return false;
    },
    // 删除发件人
    async deleteSender({ dispatch }, sender) {
      const res = await deleteSender(sender.id);
      if (res) {
        dispatch("getSenderList");
        return true;
      } else return false;
    },
    // 启用发件人
    async startSender({ commit }, sender) {
      const res = await startSender(sender.id);
      if (res) sender.status = 1;
    },
    // 停用发件人
    async stopSender({ commit }, sender) {
      const res = await stopSender(sender.id);
      if (res) sender.status = 0;
    },
    // 页码切换
    async pageSenderChange({ dispatch, commit }, params) {
      console.log(`async pageSenderChange`, params);
      commit("SET_SENDER_PARAMs", params);
      await dispatch("getSenderList");
    }
  }
};

export default homePage;
