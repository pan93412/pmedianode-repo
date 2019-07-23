const app = require('express')
const utils = require('../util')
const set = require('../data/settings.js')
const md5 = require('blueimp-md5')
var aboutRouter = app.Router()

aboutRouter.use(
    (req, res, next) => {
        utils.info(`${req.ip} 正在看關於介面。`) // TODO: i18n
        next()
    }
)

aboutRouter.get('/about', (req, res) => {
        res.render('about', {
            brand: utils.brand,
            userQuery: req.query.q ,
            md5: md5
        })
    }
)

module.exports = aboutRouter
