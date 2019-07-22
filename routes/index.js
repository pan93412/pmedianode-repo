const app = require('express')
const utils = require('../util')
const url = require('url')
const pug = require('pug')
const set = require('../data/settings.js')
const fs = require('fs')
const proc = require('process')
var indexRouter = app.Router()

const rawVideoData = fs.readFileSync('data/mediaList.json', {
    encoding: 'UTF-8'
})

const videoData = JSON.parse(rawVideoData.toString())

indexRouter.use(
    (req, res, next) => {
        utils.info(`${req.ip} 進入了 ${req.url}。`) // TODO: i18n
        next()
    }
)

indexRouter.get('/', (req, res) => {
        utils.warn(videoData)
        res.render('index', {
            brand: utils.brand,
            userQuery: req.query.q == null ? '' : req.query.q,
            vidDat: videoData,
            cardWidth: set.cardWidth
        })
    }
)

module.exports = {
    index: indexRouter
}
