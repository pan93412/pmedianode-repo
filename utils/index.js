/**
 * 取得目前的媒體資料。
 *
 * @param {object} fullMediaData
 * @param {string} mediaID
 * @return {object} 結果
 */
function getCurrentMediaData (fullMediaData, mediaID) {
  for (const media of fullMediaData) {
    if (media.id === mediaID) {
      return media
    }
  }
}

/**
 * 將 taglist 解析成人類易讀格式
 *
 * @param {Array} taglist Tag 列表
 * @param {bool} isCode 是否要加入 <code> 標籤
 * @param {string} delimiter 分隔符號
 * @return {string} 結果
 */
function tagsParser (taglist, isCode = false, delimiter = ', ') {
  let tagResult = ''

  if (isCode) {
    tagResult += '<code>'
  }

  tagResult += taglist.join(delimiter)

  if (isCode) {
    tagResult += '</code>'
  }

  return tagResult
}

/**
 * 用來載入檔案的函式。
 *
 * @param {string} filename 檔案名稱
 * @return {Buffer} 含有檔案內容的 Buffer
 */
function loadFile (filename) {
  const fs = require('fs')
  return fs.readFileSync(filename)
}

module.exports = {
  getCurrentMediaData: getCurrentMediaData,
  tagsParser: tagsParser,
  loadFile: loadFile
}
