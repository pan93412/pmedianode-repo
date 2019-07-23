const app = require('express')
const log = require('../utils/log.js')
const utils = require('../utils')
const config = require('../data/config.js')
const fs = require('fs')
var playerRouter = app.Router()

const rawVideoData = fs.readFileSync('data/mediaList.json', {
    encoding: 'UTF-8'
})

const videoData = JSON.parse(rawVideoData.toString()).reverse()

playerRouter.use(
    (req, res, next) => {
        log.info(`${req.ip} 進入首頁。`) // TODO: i18n
        next()
    }
)

playerRouter.get('/player/:id', (req, res) => {
        res.render('player', {
            brand: config.brand,
            userQuery: req.query.q,
            vidData: utils.getCurrentMedia(videoData, req.params.id),
            vidID: req.params.id,
            cardWidth: config.cardWidth
        })
    }
)

module.exports = playerRouter
