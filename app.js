const express = require('express')
var app = express()
const routers = require('./routes')
const utils = require('./util')
const http = require('http')
const fs = require('fs')
const proc = require('process')

// 預設使用可愛的 PUG 引擎。
app.set('view engine', 'pug')

// GET 請求
app.get('/', routers.index)

// 然後，搞個 HTTP 伺服器
// HTTPS 未來會支援。
app.listen(3000)
