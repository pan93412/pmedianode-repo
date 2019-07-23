const app = require('express')
const log = require('../utils/log.js')
const config = require('../data/config.js')
const fs = require('fs')
var searchRouter = app.Router()

const rawMediaData = fs.readFileSync('data/mediaList.json', {
  encoding: 'UTF-8'
})

const mediaData = JSON.parse(rawMediaData.toString()).reverse()

searchRouter.use(
  (req, res, next) => {
    log.info(`${req.ip} ${req.query.q == null ? '進入了搜尋頁面' : '搜尋了 ' + req.query.q}`) // TODO: i18n
    next()
  }
)

searchRouter.get('/search', (req, res) => {
  res.render('search', {
    brand: config.brand,
    userQuery: req.query.q,
    vidDat: mediaData,
    cardWidth: config.cardWidth
  })
})

module.exports = searchRouter
