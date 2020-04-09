// TODO: become documented.
const app = require('express')
const mods = require('./mods.js')
const config = mods.conf
const str = require(`../data/strings/${config.lang}/console.js`)

var bcRouter = app.Router()

bcRouter.use(app.json())

/** # Copied from broadcast_sender.js
 * 建立廣播。
 * 
 * @param {string} body 要傳送的任意 Object。格式請參考以下：
 * `{"鍵1": "值1", "鍵2": "值2"...}`。
 * 不要在值裡面又放物件，會出事。
 * @return 伺服器返回之 JSON 內文的 `result'，預期是 boolean，
 * 但在 api 無法存取的情況下可能會導致發生例外。
 */
bcRouter.use((req, res) => {
  console.log(str.bc_gotData)
  for (const userPost in req.body) console.log(`${userPost}: ${req.body[userPost]}`)
  res.json({result: true, data: req.body})
})

module.exports = bcRouter
