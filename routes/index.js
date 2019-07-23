const app = require('express')
const log = require('../utils/log.js')
const config = require('../data/config.js')
const fs = require('fs')

// Routers
const aboutRouter = require('./about.js')
const annoRouter = require('./announce.js')
const searchRouter = require('./search.js')
const playerRouter = require('./player.js')
var indexRouter = app.Router()

const rawMediaData = fs.readFileSync('data/mediaList.json', {
  encoding: 'UTF-8'
})

const mediaData = JSON.parse(rawMediaData.toString()).reverse()

indexRouter.use(
  (req, res, next) => {
    log.info(`${req.ip} 進入首頁。`) // TODO: i18n
    next()
  }
)

indexRouter.get('/', (req, res) => {
  res.render('index', {
    brand: config.brand,
    userQuery: req.query.q,
    vidDat: mediaData,
    cardWidth: config.cardWidth
  })
})

module.exports = {
  index: indexRouter,
  about: aboutRouter,
  announce: annoRouter,
  search: searchRouter,
  player: playerRouter
}
