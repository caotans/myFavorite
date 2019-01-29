export const FOSUNAPI = {
  // mock: window.APP_CONF.MOCK,
  // domain: window.APP_CONF.API_DOMAIN,
  // proxy: {
  //   default: window.APP_CONF.PROXY_ADVISOR || '/api',
  //   auth: window.APP_CONF.PROXY_AUTH || '/api'
  // },
  common: {
    // 获取应用列表，下拉框用
    ClientDropDownList: {
      method: 'get',
      url: '/client/dropDownList'
    },
    // 获取模版列表
    TemplateDropDownList: {
      method: 'get',
      url: '/template/dropDownList'
    }
  },
  SCENE: {
    // /scene/{id} 根据ID获取场景信息
    GetSceneById: {
      method: 'get',
      url: '/scene'
    },
    // 获取场景列表
    GetList: {
      method: 'post',
      url: '/scene/list'
    },
    // 新增场景
    AddScene: {
      method: 'post',
      url: '/scene/add'
    },
    // 修改场景
    EditScene: {
      method: 'post',
      url: '/scene/edit'
    },
    // 更新场景状态
    UpdateScene: {
      method: 'post',
      url: '/scene/updateStatus'
    }
  },
  HOMEPAGE: {
    // 读取json文件
    GetJson: {
      method: 'get',
      url: '../../static/json/myFavorite.json'
    }
  }
}
