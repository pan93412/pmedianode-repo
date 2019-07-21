const app = require('express')
const utils = require('../util')
const url = require('url')
const pug = require('pug')
var indexRouter = app.Router()

/**
 * index 首頁的 router。
 *
 * @return url.searchParam
 */
indexRouter.use(
    (req, res, next) => {
        utils.info(`${req.ip} 進入了 ${req.url}。`)
        next()
    }
)

indexRouter.get('/', (req, res) => {
        res.render('index', {
            brand: utils.brand
        })
    }
)

module.exports = {
    index: indexRouter
}
