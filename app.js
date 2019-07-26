const express = require('express')
var app = express()
const routers = require('./routes')
const options = require('./data/config.js')
const https = require('https')
const fs = require('fs')

// 預設使用可愛的 PUG 引擎。
app.set('view engine', 'pug')

// assets 的存放處
app.use('/assets', express.static('assets'))

// 使用者可自訂的 data 存放處
app.use('/assets/data', express.static('data'))

/*
 * Routers
 */

// Home 頁面
app.get('/', routers.index)

// About 頁面
app.get('/about', routers.about)

// Announce 頁面（需在 config.js 中啟用公告功能）
if (options.enableAnnounce) app.get('/announce', routers.announce)

// Search 頁面
app.get('/search', routers.search)

// Player 頁面
app.get(/\/player\/.+/, routers.player)

// 然後，搞個伺服器
if (options.isHttps) {
  const server = https.createServer({
    cert: options.httpsCert !== '' ? fs.readFileSync(options.httpsCert) : '',
    key: options.httpsKey !== '' ? fs.readFileSync(options.httpsKey) : ''
  }, app)
  server.listen(options.servPort)
} else {
  app.listen(options.servPort)
}
