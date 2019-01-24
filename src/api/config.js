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
  SENDER: {
    // 收件人列表
    GetList: {
      method: 'post',
      url: '/getAllSenderInfo'
    },
    // 新增发件人
    AddSender: {
      method: 'post',
      url: '/insertSender'
    },
    // 修改发件人
    EditSender: {
      method: 'put',
      url: '/updateSender'
    },
    // 删除发件人
    DeleteSender: {
      method: 'delete',
      url: '/deleteSender'
    },
    // 启用发件人
    StartSender: {
      method: 'put',
      url: '/startSender'
    },
    // 停用发件人
    StopSender: {
      method: 'get',
      url: '/stopSender'
    }
  },
  MAIL: {
    // 查找名
    SearchName: {
      method: 'get',
      url: '/homePage/dropDownList'
    },
    // 查询邮件模版
    GetList: {
      method: 'post',
      url: '/getAllTemplateMail'
    },
    // 新增邮件模版
    AddMail: {
      method: 'post',
      url: '/insertTemplateMail'
    },
    // 修改邮件模版
    EditMail: {
      method: 'put',
      url: '/updateTemplateMail'
    },
    // 删除邮件模版
    DeleteMail: {
      method: 'delete',
      url: '/deleteTemplateMail'
    },
    // 启用邮件模版
    StartMail: {
      method: 'put',
      url: '/startTemplateMail'
    },
    StopMail: {
      method: 'get',
      url: '/stopTemplateMail'
    }
  },
  // 复星通消息
  FOSUNMESS: {
    // 查找名
    SearchName: {
      method: 'get',
      url: '/getTemplateMsg'
    },
    // 新增消息模版
    AddMail: {
      method: 'post',
      url: '/insertTemplateMsg'
    },
    // 修改消息模版
    EditMail: {
      method: 'put',
      url: '/updateTemplateMsg'
    },
    // 删除邮件模版
    DeleteMail: {
      method: 'delete',
      url: '/deleteTemplateMsg'
    },
    GetList: {
      method: 'post',
      url: '/getAllTemplateMsg'
    },
    // 启用邮件模版
    StartMail: {
      method: 'put',
      url: '/startTemplateMsg'
    },
    StopMail: {
      method: 'get',
      url: '/stopTemplateMsg'
    },
    SendMESS: {
      method: 'post',
      url: '/send-mail-log/again-send'
    }
  },
  // 发送邮件记录
  SENDMAIL: {
    GetList: {
      method: 'post',
      url: '/send-mail-log/list'
    },
    SendMail: {
      method: 'post',
      url: '/send-mail-log/again-send'
    }
  },
  // 发送消息记录
  SENDMES: {
    GetList: {
      method: 'post',
      url: '/send-msg-log/list'
    },
    SendMail: {
      method: 'post',
      url: '/send-msg-log/again-send'
    },
    SendResult: {
      method: 'get',
      url: '/send-msg-log/send-result'
    }
  },
  // 钉钉消息管理
  DingTalk: {
    // 查找名
    SearchName: {
      method: 'post',
      url: '/ddmedia/list'
    },
    SearchCon: {
      method: 'get',
      url: '/ddmedia'
    },
    AddMedia: {
      method: 'post',
      url: '/ddmedia/add'
    }
  }
}
