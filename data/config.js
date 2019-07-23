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
 * 
 * @default true
 * @format bool
 */
const enableAnnounce = true

module.exports = {
  cardWidth: cardWidth,
  brand: brand,
  isHttps: isHttps,
  httpsKey: httpsKey,
  httpsCert: httpsCert,
  servPort: servPort,
  enableAnnounce: enableAnnounce
}
