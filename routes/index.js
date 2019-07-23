const app = require('express')
const log = require('../utils/log.js')
const config = require('../data/config.js')
const fs = require('fs')

// Routers
const aboutRouter = require('./about.js')
const annoRouter = require('./announce.js')
const searchRouter = require('./search.js')
var indexRouter = app.Router()

const rawVideoData = fs.readFileSync('data/mediaList.json', {
    encoding: 'UTF-8'
})

const videoData = JSON.parse(rawVideoData.toString()).reverse()

indexRouter.use(
    (req, res, next) => {
        log.info(`${req.ip} 進入首頁。`) // TODO: i18n
        next()
    }
)

indexRouter.get('/', (req, res) => {
        res.render('index', {
            brand: config.brand,
            userQuery: req.query.q ,
            vidDat: videoData,
            cardWidth: config.cardWidth
        })
    }
)

module.exports = {
    index: indexRouter,
    about: aboutRouter,
    announce: annoRouter,
    search: searchRouter
}
