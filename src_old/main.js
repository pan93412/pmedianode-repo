require('bootstrap') // Bootstrap JS
const utils = require('../utils/index.webpack.js') // Utils
const Cookie = require('js-cookie') // JS Cookie

// 建立 click 活動
for (const langTags of document.querySelectorAll('.dropdown-menu > .changeLang')) {
  langTags.addEventListener('click', function () {
    Cookie.set('userLang', this.dataset.lang, {
      expires: 1
    })
    location.reload()
  })
}

/**
 * 嵌入 iconData 圖示至 elementId
 * @param {string} elements 元素 ID 或 Class
 * @param {Object} iconData 圖示 ID
 * @param {Object} options 轉換選項，預設為 {}
 * @return 如果正常運作則回傳 null，發生錯誤則回傳錯誤傾印。
 */
function embedIcons (elements, iconData, options = {}) {
  try {
    for (const element of document.querySelectorAll(elements)) {
      element.insertAdjacentHTML('beforeend', iconData.toSVG(options))
    }
  } catch (e) {
    return e
  } // 分網域過於麻煩，直接忽略就好了 orz。
}

embedIcons('#optIcon', utils.getOpticons('gear'))
embedIcons('#searchIcon', utils.getOpticons('search'), { fill: 'green' })
embedIcons('#prevIconOnOptionsPage', utils.getOpticons('arrow-left'))
embedIcons('.playBtnOnIndex', utils.getOpticons('play'))
embedIcons('#globeIconOnOptions', utils.getOpticons('globe'))
