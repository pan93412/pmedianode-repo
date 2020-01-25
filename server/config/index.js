/**
 * 設定檔讀取工具。
 */

// 檢查主設定檔
const fs = require('fs')
const process = require('process')
const path = require('path')
const modDir = fn => path.join(__dirname, fn)
const existModDir = fn => fs.existsSync(modDir(fn))

if (!existModDir('config.js')) {
  console.error([
    '\x1b[1m\x1b[31m',
    '您未設定 config.js。',
    '請參閱 README.md 設定。',
    '\x1b[0m'
  ].join(''))
  process.exit(1)
}

const conf = require(modDir('config.js'))

// 檢查公告及影片設定
if (!existModDir(conf.vidconf)) {
  console.error([
    '\x1b[1m\x1b[31m',
    `您未設定影片資訊 "${conf.vidconf}"\n`,
    '請參閱 README.md 設定。',
    '\x1b[0m'
  ].join(''))
  process.exit(1)
}

if (!existModDir(conf.annoconf)) {
  console.error([
    '\x1b[1m\x1b[31m',
    `您未設定公告列表 "${conf.annoconf}"\n`,
    '請參閱 README.md 設定。',
    '\x1b[0m'
  ].join(''))
  process.exit(1)
}

// module.exports
module.exports = {
  config: conf,
  video: require(modDir(conf.vidconf)),
  announce: require(modDir(conf.annoconf))
}
