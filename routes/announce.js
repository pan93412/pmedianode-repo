const app = require('express')
const mods = require('./mods.js')
const config = mods.conf
const fs = require('fs')
var annoRouter = app.Router()

const annoData = JSON.parse(
  fs.readFileSync('data/announcements.json', { encoding: 'UTF-8' })
    .toString()
).reverse()

annoRouter.get('/announce', (req, res) => {
  res.render('announce', Object.assign({
    userQuery: req.query.q,
    annoDat: annoData,
    strings: mods.getLang(req.cookies, config.lang)
  }, mods.stdRoutes)
  )
})

module.exports = annoRouter
