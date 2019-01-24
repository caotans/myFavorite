import { getClientDropDownList, getTemplateDropDownList } from '../../api/common'

const common = {
  state: {
    clientList: []
  },
  mutations: {
    SET_CLIENTLIST: (state, data) => {
      state.clientList = data
    }
  },
  actions: {
    // 获取应用列表，下啦列表
    async getClientDropDownList({ commit }) {
      const resData = await getClientDropDownList()
      // console.log(resData)
      commit('SET_CLIENTLIST', resData.data.data)
    },
    async getTemplateList({ state }, param) {
      console.log('param', param)
      const resData = await getTemplateDropDownList(param)
      return resData
    }
  }
}

export default common
