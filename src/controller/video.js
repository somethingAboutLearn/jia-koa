exports.getList = (ctx, next) => {
  let time = ctx.params.time,
    limit = ctx.params.limit
  ctx.body = {
    code: 0,
    msg: '查询成功',
    data: {
      list: [
        {
          id: 1, //    id
          pic: '/v/01.jpg', //   封面图
          src: '/v/刘昊霖 - 儿时.mp4', //   源
          describe: '分享', //   描述
          duration: 165, //  时长
          hots: '30000', //  播放量
          upload_time: '2019/04/16 12:24:01', //  上传时间
          userInfo: {
            avatar: '/imgs/avatar_120*120.jpg', //  上传用户头像
            author: '无名氏', //    上传用户名字
            abstract: '这个人很懒，除了分享内容，什么都没有留下。' //  上传用户签名
          }
        },
        {
          id: 2, //    id
          pic: '/v/02.jpg', //   封面图
          src: '/v/卢冠廷 - 一生所爱.mp4', //   源
          describe: '经典', //   描述
          duration: 165, //  时长
          hots: '30000', //  播放量
          upload_time: '2019/04/16 12:27:01', //  上传时间
          userInfo: {
            avatar: '/imgs/avatar_120*120.jpg', //  上传用户头像
            author: '卢冠廷', //    上传用户名字
            abstract: '一生所爱' //  上传用户签名
          }
        },
        {
          id: 3, //    id
          pic: '/v/03.jpg', //   封面图
          src: '/v/吴亦凡 - JULY 特别版.mp4', //   源
          describe: '', //   描述
          duration: 334, //  时长
          hots: '30000', //  播放量
          upload_time: '2019/04/16 12:47:01', //  上传时间
          userInfo: {
            avatar: '/imgs/avatar_120*120.jpg', //  上传用户头像
            author: '吴亦凡', //    上传用户名字
            abstract: 'JULY' //  上传用户签名
          }
        },
        {
          id: 4, //    id
          pic: '/v/04.jpg', //   封面图
          src: '/v/我的天空 - 南征北战.mp4', //   源
          describe: '青春派', //   描述
          duration: 234, //  时长
          hots: '30000', //  播放量
          upload_time: '2019/04/16 12:57:01', //  上传时间
          userInfo: {
            avatar: '/imgs/avatar_120*120.jpg', //  上传用户头像
            author: '为空', //    上传用户名字
            abstract: '没有什么好说的了。' //  上传用户签名
          }
        }
      ]
    }
  }
}

exports.getOne = (ctx, next) => {
  let id = ctx.params.id
  ctx.body = {
    code: 0,
    msg: '查询成功',
    data: {
      id
    }
  }
}

exports.createOne = (ctx, next) => {
  let item = ctx.body.item
  ctx.body = {
    code: 0,
    msg: '创建成功',
    data: {
      item
    }
  }
}

exports.setOne = (ctx, next) => {
  let id = ctx.params.id,
    item = ctx.body.item
  ctx.body = {
    code: 0,
    msg: '修改成功',
    data: {
      item
    }
  }
}

exports.delOne = (ctx, next) => {
  let id = ctx.body.id
  ctx.body = {
    code: 0,
    msg: '删除成功',
    data: {
      id
    }
  }
}
