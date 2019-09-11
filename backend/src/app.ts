import express from "express"
import api from "routers/api"
import * as conf from "config/config"

const app = express()

// 使用者可自訂的 data 存放處
app.use('/data', express.static('data'))

// API
app.use('/api', api)

// pMediaNode 的 UI 位置
app.use('/', express.static('dist'))

// 開始監聽主機
app.listen(conf.servPort)
