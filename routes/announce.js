const app = require('express')
const utils = require('../util')
const set = require('../data/settings.js')
const fs = require('fs')
var annoRouter = app.Router()

const rawAnnoData = fs.readFileSync('data/announcements.json', {
    encoding: 'UTF-8'
})

const annoData = JSON.parse(rawAnnoData.toString()).reverse()

annoRouter.use(
    (req, res, next) => {
        utils.info(`${req.ip} 在看公告。`) // TODO: i18n
        next()
    }
)

annoRouter.get('/announce', (req, res) => {
        res.render('announce', {
            brand: utils.brand,
            userQuery: req.query.q ,
            annoDat: annoData,
            cardWidth: set.cardWidth
        })
    }
)

module.exports = annoRouter
