const Router = require('koa-router')
const router = new Router()
const music = require('../controller/music')
const video = require('../controller/video')
const picture = require('../controller/picture')

router.get('/music', music.getList)
router.get('/music/:id', music.getOne)
router.post('/music', music.createOne)
router.put('/music/:id', music.setOne)
router.delete('/music', music.delOne)

router.get('/video', video.getList)
router.get('/video/:id', video.getOne)
router.post('/video', video.createOne)
router.put('/video/:id', video.setOne)
router.delete('/video', video.delOne)

router.get('/picture', picture.getList)
router.get('/picture/:id', picture.getOne)
router.post('/picture', picture.createOne)
router.put('/picture/:id', picture.setOne)
router.delete('/picture', picture.delOne)

module.exports = {
  routes: router.routes(),
  allowedMethods: router.allowedMethods()
}
