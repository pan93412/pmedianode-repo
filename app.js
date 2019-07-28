const express = require('express')
var app = express()
const routers = require('./routes')
const config = require('./data/config.js')
const log = require('./utils/log.js')
const https = require('https')
const proc = require('process')

// 檢查字串檔是否存在
try {
  require(`./data/strings/${config.lang}/page.js`)
} catch (e) {
  log.err("We can't load strings file: " + e.message)
  proc.exit(1)
}

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
if (config.enableAnnounce) app.get('/announce', routers.announce)

// Search 頁面
app.get('/search', routers.search)

// Player 頁面
app.get(/\/player\/.+/, routers.player)

// 然後，搞個伺服器
if (config.isHttps) {
  const server = https.createServer(config.httpsOptions, app)
  server.listen(config.servPort)
} else {
  app.listen(config.servPort)
}
