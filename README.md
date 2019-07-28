# <img src='https://github.com/pan93412/pmedianode-repo/blob/stable/Banner.svg' alt='pMediaNode - 簡易、便捷、優雅的媒體管理平台'>
這系統的前身是 PMedia，是因為我想上傳自己的實況影片，但又怕音樂等相關版權問題（畢竟原本是只想給幾個朋友看的…… 上傳到 YouTube 還要面對版權相關的麻煩事），因此決定自己弄出一個影片管理平台。pMediaNode 是後來在 PMedia 開發完成之後，改用 Node.js 改寫的版本。

pMediaNode 是個 self-hosting 自建媒體寄存平台，可以上傳影片和音樂（video.js 支援什麼格式，你就可以上傳什麼格式）。

介面使用 Bootstrap 及 Node.js 撰寫，並使用 webpack 管理資源。

未來這管理平台可能也會出現「上傳 / 管理媒體」及「建立 / 管理公告」的功能。

## 目前支援格式
經過測試的有：
- m3u8 (hls 直播)
- mp4
- mp3
- HTML video 屬性原生支援的所有格式

確定無法播放的有：
- flac（暫未考慮支援）

### ⚠️ 注意！
- 若要進行 HLS 直播，可選擇放在這台 Node 伺服器內。
  請參考 [這個連結](#host-inside) 得知如何存放。
- 如果 HLS 直播放在外部，請確保存放該直播的伺服器有設定 CORS，
  相關資訊請參考 [Video.js 關於 HLS 的 FAQ](https://docs.videojs.com/tutorial-faq.html#q%3A-does-video.js-support-hls-(http-live-streaming)-video%3F)
- 其他資訊可以去看看 [Video.js 的 FAQ](https://docs.videojs.com/tutorial-faq.html)

## 準備
- Node.js
- yarn

1. 首先先輸入 `yarn` 下載所有依賴。
2. 接著依下方的可設定項目進行設定
3. 輸入 `yarn run start` 即可使用。

## 設定
### 重要設定：媒體中介資料
這設定放在 `data/mediaList.json`。格式如下：

```json
[
    {
        "id": "媒體 ID",
        "url": "媒體存放位址",
        "title": "媒體標題",
        "desc": "媒體描述，用 <br> 換行",
        "author": "媒體作者",
        "tags": ["媒體標籤"]
    }
]
```

如果你想把媒體寄存在這伺服器底下，可以放在 `data`
資料夾的任一資料夾內（個人建議 `media`），媒體存放位置則直接寫：
`/assets/data/[該資料夾名稱]`

範例：

```json
[
    {
        "id": "hello-world",
        "url": "/assets/data/media/hello_world.mp4",
        "title": "Hello, World!",
        "desc": "這是我第一部寄存在 PMedia 的影片。",
        "author": "pan93412",
        "tags": ["Hello", "World", "PMedia", "First", "第一"]
    },
    {
        "id": "hello-world-2",
        "url": "/assets/data/media/hello_world_2.mp4",
        "title": "Hello, World 2!",
        "desc": "這是我第二部寄存在 PMedia 的影片。",
        "author": "pan93412",
        "tags": ["Hello", "World", "PMedia", "First", "第二"]
    }
]
```

### 重要設定：公告資料
這設定放在 `data/announcements.json`。格式如下：

```json
[
    {
        "title": "公告標題",
        "content": "公告內容",
        "author": "公告作者",
        "date": "公告日期 (任意格式)"
    }
]
```

如果用不到公告功能，也可以選擇在 `config.js` 把 `enableAnnounce` 設成 `false`。

範例：

```json
[
    {
        "title": "第一則公告！",
        "content": "PMusic 的第一則公告！",
        "author": "pan93412",
        "date": "2019/07/23"
    },
    {
        "title": "第二則公告！",
        "content": "PMusic 的第二則公告！",
        "author": "pan93412",
        "date": "2019/07/23"
    }
]
```

### 個人化設定：`config.js`
這設定放在 `data/config.js`。
可以設定比如是否使用 HTTPS
或是否詳細化記錄之類的東西。

### 個人化設定：`about.pug`
就是「關於」頁面。放在 `views/about.pug`

如果你不希望我們幾個開發者出現在關於頁面，
那可以在 `data/config.js` 把 showAuthors 關閉。

> v2.1.0: 預設 showAuthors 為 false

### 個人化設定：`style.scss`
**注意**：在提交之前，請用稍候提到的 webpack
來封裝成 CSS 檔案。

用於所有頁面的全域 CSS。

### 相關指令：`yarn run start`
依 `data/config.js` 的設定啟動伺服器。這伺服器有個特點，
當你變動檔案時，伺服器也會自動重新啟動而無須手動干涉。

### 相關指令：`yarn run build`
**注意：在提交變更前，請先使用這個指令產生出封裝過的 JS 檔。**

將 `src` 目錄下的所有檔案透過 webpack
封裝成方便使用的 JS 檔。 

### 相關指令：`yarn run build-dev`
與 `yarn run build` 功能類似，不過加了 `--mode=developement`
方便偵錯。

### 如何翻譯 pMediaNode？
進入 `data/strings`，然後仿照 `zh_TW` 或 `en_US` 的格式建立出您自己的語言。

翻完之後可選是否 Pull Request，但個人希望能 PR 上來，
讓更多的人能夠使用你的成果！ :)

此外，每次字串有變動，我都會將變動的字串合併至所有語系的字串檔，
所以也不必擔心「以後是否要自己合併字串檔」的問題。

### <a id="host-inside">其他說明：怎麼將檔案寄存在這個 Node 伺服器？</a>
目前有兩個目錄被設定成 static 位置（就是可以讓你放東西的地方）：

- assets：會對應到 `伺服器/assets` （因為是 webpack 的 dist 目錄，
  因此不建議放在這裡。）
- data：會對應到 `伺服器/assets/data`

假設你把一個檔案（假設 `video.mp4`）放在 data 的 media 目錄中，
那這個檔案的遠端路徑將會是 `伺服器/assets/data/media/video.mp4`。

## 一些 TODO
- 新增黑色佈景

## 作者
pan93412, 2019.

歡迎開 Issues 來回報及詢問問題，或者是開 Pull Request
讓這個程式變得更好！