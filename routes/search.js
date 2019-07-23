const app = require('express')
const log = require('../utils/log.js')
const config = require('../data/config.js')
const fs = require('fs')
var searchRouter = app.Router()

const rawVideoData = fs.readFileSync('data/mediaList.json', {
    encoding: 'UTF-8'
})

const videoData = JSON.parse(rawVideoData.toString()).reverse()

searchRouter.use(
    (req, res, next) => {
        log.info(`${req.ip} ${req.query.q == null ? '進入了搜尋頁面' : '搜尋了 ' + req.query.q}`) // TODO: i18n
        next()
    }
)

searchRouter.get('/search', (req, res) => {
        res.render('search', {
            brand: config.brand,
            userQuery: req.query.q ,
            vidDat: videoData,
            cardWidth: config.cardWidth
        })
    }
)

module.exports = searchRouter
