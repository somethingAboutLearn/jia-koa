exports.getList = (ctx, next) => {
  let time = ctx.params.time,
    limit = ctx.params.limit
  ctx.body = {
    code: 0,
    msg: '查询成功',
    data: {
      list: [
        {
          id: 1, //  图片 id
          pic: 'p/01.gif', //  图片源
          describe:
            '照片，是在光和影的陪衬下，被禁锢在时间的框架里，成为陈旧的光景。', //  描述
          hots: '30000', //  浏览量
          upload_time: '2019/04/05 10:21:34', //  上传时间
          userInfo: {
            avatar: '/imgs/avatar_120*120.jpg', //  上传用户头像
            author: '大开发', //    上传用户名字
            abstract: '这个人很懒，除了分享内容，什么都没有留下。' //  上传用户签名
          }
        },
        {
          id: 2, //  图片 id
          pic: 'p/02.gif', //  图片源
          describe: '没有什么可说的。', //  描述
          hots: '30000', //  浏览量
          upload_time: '2019/04/05 10:21:34', //  上传时间
          userInfo: {
            avatar: '/imgs/avatar_120*120.jpg', //  上传用户头像
            author: '饿哦平', //    上传用户名字
            abstract: '' //  上传用户签名
          }
        },
        {
          id: 3, //  图片 id
          pic: 'p/03.gif', //  图片源
          describe: '卡卡卡', //  描述
          hots: '30000', //  浏览量
          upload_time: '2019/04/05 10:21:34', //  上传时间
          userInfo: {
            avatar: '/imgs/avatar_120*120.jpg', //  上传用户头像
            author: '哔哔币', //    上传用户名字
            abstract: '这个人很懒，除了分享内容，什么都没有留下。' //  上传用户签名
          }
        },
        {
          id: 4, //  图片 id
          pic: 'p/04.gif', //  图片源
          describe: '好。', //  描述
          hots: '30000', //  浏览量
          upload_time: '2019/04/05 10:21:34', //  上传时间
          userInfo: {
            avatar: '/imgs/avatar_120*120.jpg', //  上传用户头像
            author: '大开发', //    上传用户名字
            abstract: '' //  上传用户签名
          }
        },
        {
          id: 5, //  图片 id
          pic: 'p/05.gif', //  图片源
          describe:
            '照片，是在光和影的陪衬下，被禁锢在时间的框架里，成为陈旧的光景。', //  描述
          hots: '30000', //  浏览量
          upload_time: '2019/04/05 10:21:34', //  上传时间
          userInfo: {
            avatar: '/imgs/avatar_120*120.jpg', //  上传用户头像
            author: '没人', //    上传用户名字
            abstract: '恩' //  上传用户签名
          }
        },
        {
          id: 6, //  图片 id
          pic: 'p/06.gif', //  图片源
          describe: '照片，', //  描述
          hots: '30000', //  浏览量
          upload_time: '2019/04/05 10:21:34', //  上传时间
          userInfo: {
            avatar: '/imgs/avatar_120*120.jpg', //  上传用户头像
            author: '来到', //    上传用户名字
            abstract: '艾斯德斯' //  上传用户签名
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
