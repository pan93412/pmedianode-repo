const app = require('express')
const utils = require('../util')
const set = require('../data/settings.js')
const fs = require('fs')
const aboutRouter = require('./about.js')
const annoRouter = require('./announce.js')
var searchRouter = app.Router()

const rawVideoData = fs.readFileSync('data/mediaList.json', {
    encoding: 'UTF-8'
})

const videoData = JSON.parse(rawVideoData.toString()).reverse()

searchRouter.use(
    (req, res, next) => {
        utils.info(`${req.ip} ${req.query.q == null ? '進入了搜尋頁面' : '搜尋了 ' + req.query.q}`) // TODO: i18n
        next()
    }
)

searchRouter.get('/search', (req, res) => {
        res.render('search', {
            brand: utils.brand,
            userQuery: req.query.q ,
            vidDat: videoData,
            cardWidth: set.cardWidth
        })
    }
)

module.exports = searchRouter
