const express = require('express')
var app = express()
const routers = require('./routes')

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

// Announce 頁面
app.get('/announce', routers.announce)

// Search 頁面
app.get('/search', routers.search)

// Player 頁面
app.get(/\/player\/.+/, routers.player)

// 然後，搞個 HTTP 伺服器
// TODO: HTTPS 未來會支援。
app.listen(3000)
