/**
 * 取得目前的媒體資料。
 * 
 * @param {object} fullMediaData 
 * @param {string} mediaID 
 * @return {object} 結果
 */
function getCurrentMediaData (fullMediaData, mediaID) {
    for (media in fullMediaData) {
        if (media.id === mediaID) {
            return media
        }
    }
}

module.exports = {
    getCurrentMediaData: getCurrentMediaData
}