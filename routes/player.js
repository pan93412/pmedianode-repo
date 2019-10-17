const app = require('express')
const mods = require('./mods.js')
const utils = require('../utils')
const config = mods.conf
const fs = require('fs')
const url = require('url')

var playerRouter = app.Router()

const mediaData = JSON.parse(
  fs.readFileSync('data/mediaList.json', { encoding: 'UTF-8' })
    .toString()
).reverse()

playerRouter.get('/player/:id', (req, res) => {
  const vidData = utils.getCurrentMediaData(mediaData, req.params.id)
  const toRender = {
    userQuery: req.query.q,
    vidData: null,
    vidID: null,
    vidTags: null,
    strings: mods.getLang(req.cookies, config.lang),
    url: url // URL Module, which is used to fix m3u8 issues.
  }
  
  if (vidData) {
    toRender.vidData = vidData
    toRender.vidID = req.params.id
    toRender.vidTags = utils.tagsParser(vidData.tags, true)
  }

  res.render('player', Object.assign(toRender, mods.stdRoutes))
})

module.exports = playerRouter
