// 相關設定

/**
 * 卡片的長度 (cardWidth)
 *
 * @default 12.5em
 * @format CSS 尺寸單位
 */
const cardWidth = '12.5em'

/**
 * 此實體的名稱。
 *
 * @default pMediaNode
 * @format string
 */
const brand = 'pMediaNode'

/**
 * 是否使用 https？
 *
 * 如果要使用其他伺服器反向代理，請
 * 將此項設定成 false。如果要直接使用此
 * 伺服器，請將此項設定成 true。
 *
 * @default false
 * @format bool
 */
const isHttps = false

/**
 * https 的 key 檔案位置
 *
 * @default ''
 * @format string
 */
const httpsKey = ''

/**
 * https 的 cert 檔案位置
 *
 * @default ''
 * @format string
 */
const httpsCert = ''

/**
 * 伺服器的 port
 *
 * @default 3000
 * @format int
 */
const servPort = 3000

/**
 * 是否啟用公告功能？
 * 注意：將此項設定成 false 以後，
 * navbar 仍然會出現「公告」。
 * 如果想完全隱藏「公告」，請將 data/navBarEntries.pug
 * 中 announce 的 hide 項設成 false。
 *
 * @default true
 * @format bool
 */
const enableAnnounce = true

/**
 * 是否在關於頁面顯示作者群
 * （我自己是建議不用開，
 * 能省下開啟關於頁面的時間）
 *
 * @default false
 * @format bool
 */
const showAuthors = false

/**
 * 是否顯示更詳細的瀏覽訊息？
 *
 * @default false
 * @format bool
 */
const verbose = false

/**
 * pMedia 的語言
 *
 * @default zh_TW
 * @format string
 */
const lang = 'zh_TW'

module.exports = {
  cardWidth: cardWidth,
  brand: brand,
  isHttps: isHttps,
  httpsKey: httpsKey,
  httpsCert: httpsCert,
  servPort: servPort,
  enableAnnounce: enableAnnounce,
  showAuthors: showAuthors,
  verbose: verbose,
  lang: lang
}
