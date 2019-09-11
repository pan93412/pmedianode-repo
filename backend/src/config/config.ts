/* 實際編譯完成的目錄架構
 * - server_dist (這是起點目錄！)
 *  - routers
 *   - fetchMediaData.ts
 *   - fetchAnnounces.ts
 * - data
 *  - mediaList.json
 *  - announcements.json
 * 前進方向： .. -> .. -> data -> [檔案]
 */

/**
 * mediaList.json 的位置。
 * 
 * @default '../../data/mediaList.json'
 */
export const mediaListPath: string = '../data/mediaList.json'

/**
 * announcements.json 的位置。
 * 
 * @default '../../data/announcements.json'
 */
export const annoPath: string = '../data/announcements.json'

/**
 * 伺服器的 port
 *
 * @default 3000
 */
export const servPort: Number = 3000