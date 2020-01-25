// requires
const Koa = require('koa')
const Router = require('koa-router')

// app & router
const app = Koa()
const router = Router()

router.get('/api/get/video', async ctx => {
  ctx.set({
    'Content-Type': 'application/json'
  })
  ctx.body = JSON.stringify({
    result: true,
    data: {
      vid: [

      ]
    }
  })
})
