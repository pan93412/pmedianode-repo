const express = require('express')
var app = express()
const routers = require('./routes')
const config = require('./data/config.js')
const log = require('./utils/log.js')
const proc = require('process')
app.use(require('cookie-parser')())

// 檢查預設字串檔是否存在
try {
  require(`./data/strings/${config.lang}/page.js`)
  var consoleStr = require(`./data/strings/${config.lang}/console.js`)
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

// 顯示進入詳細訊息
if (config.verbose) app.use((req, _, next) => {
  console.log(consoleStr.app_userWentInto, req.ip, req.originalUrl)
  next()
})

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

// Options 頁面
app.get('/options', routers.options)

// Broadcast 頁面
app.post('/api/broadcast', routers.broadcast)

// 然後，搞個伺服器
if (config.isHttps) {
  const https = require('https')
  const server = https.createServer(config.httpsOptions, app)
  server.listen(config.servPort)
} else {
  app.listen(config.servPort)
}
