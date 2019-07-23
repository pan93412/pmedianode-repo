const app = require('express')
const log = require('../utils/log.js')
const config = require('../data/config.js')
const fs = require('fs')
var annoRouter = app.Router()

const rawAnnoData = fs.readFileSync('data/announcements.json', {
  encoding: 'UTF-8'
})

const annoData = JSON.parse(rawAnnoData.toString()).reverse()

annoRouter.use(
  (req, res, next) => {
    log.info(`${req.ip} 在看公告。`) // TODO: i18n
    next()
  }
)

annoRouter.get('/announce', (req, res) => {
  res.render('announce', {
    brand: config.brand,
    userQuery: req.query.q,
    annoDat: annoData,
    cardWidth: config.cardWidth
  })
}
)

module.exports = annoRouter
