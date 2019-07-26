const app = require('express')
const log = require('../utils/log.js')
const utils = require('../utils')
const config = require('../data/config.js')
const fs = require('fs')
const url = require('url')
var playerRouter = app.Router()

const rawMediaData = fs.readFileSync('data/mediaList.json', {
  encoding: 'UTF-8'
})

const mediaData = JSON.parse(rawMediaData.toString()).reverse()

playerRouter.use(
  (req, res, next) => {
    if (config.verbose) log.info(`${req.ip} 正在看存放在 ${req.url} 的影片。`) // TODO: i18n
    next()
  }
)

playerRouter.get('/player/:id', (req, res) => {
  const vidData = utils.getCurrentMediaData(mediaData, req.params.id)
  res.render('player', {
    brand: config.brand,
    userQuery: req.query.q,
    vidData: vidData,
    vidID: req.params.id,
    vidTags: utils.tagsParser(vidData.tags, true),
    cardWidth: config.cardWidth,
    url: url // URL Module
  })
})

module.exports = playerRouter
