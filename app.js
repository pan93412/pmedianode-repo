const express = require('express')
var app = express()
const routers = require('./routes')
const config = require('./data/config.js')

// 使用者可自訂的 data 存放處
app.use('/data', express.static('data'))

// API
app.use('/api', routers.api)

// pMediaNode 的 UI 位置
app.use('/', express.static('dist'))

// 設定伺服器
if (config.isHttps) {
  const https = require('https')
  const server = https.createServer(config.httpsOptions, app)
  server.listen(config.servPort)
} else {
  app.listen(config.servPort)
}
