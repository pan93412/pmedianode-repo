const app = require('express')
const mods = require('./mods.js')
const config = mods.conf
const fs = require('fs')

var searchRouter = app.Router()

const mediaData = JSON.parse(
  fs.readFileSync('data/mediaList.json', { encoding: 'UTF-8' })
    .toString()
).reverse()

searchRouter.get('/search', (req, res) => {
  res.render('search', Object.assign({
    userQuery: req.query.q,
    vidDat: mediaData,
    strings: mods.getLang(req.cookies, config.lang),
    sprintf: mods.sprintf // sprintf module, which is used to render '%s 的結果'
  }, mods.stdRoutes))
})

module.exports = searchRouter
