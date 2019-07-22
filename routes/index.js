const app = require('express')
const utils = require('../util')
const set = require('../data/settings.js')
const fs = require('fs')
const aboutRouter = require('./about.js')
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
        res.render('index', {
            brand: utils.brand,
            userQuery: req.query.q == null ? '' : req.query.q,
            vidDat: videoData,
            cardWidth: set.cardWidth
        })
    }
)

module.exports = {
    index: indexRouter,
    about: aboutRouter
}
