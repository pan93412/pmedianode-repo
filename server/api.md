# pMediaNode API 使用說明
## 啟動
```bash
$ bash ./start.sh # 也能用任何你喜歡的 SH
```

## API Reference
### [GET] `/api/get/video`: 取得所有影片
#### Request
```
GET /api/get/video
```

#### Response
```json
{
  "result": true,
  "data": {
    "vid": [
      {
        "title":    "影片標題",
        "desc":     "影片描述，如沒有則空白",
        "tag":      ["影片標籤，如沒有則是空陣列"],
        "playurl":  "影片網址"
      }
    ]
  }
}
```

### [GET]: `api/get/announce`: 取得所有公告
#### Request
```
GET /api/get/announce
```

#### Response
```json
{
  "result": true,
  "data": {
    "anno": [
      {
        "title":    "公告標題",
        "desc":     "公告描述，如沒有則空白",
        "entries":  [ // 如果沒有則是空的！
          {
            "entry": "外部連結簡述",
            "url":   "外部連結"
          }
        ]
      }
    ]
  }
}
```

### [GET]: `api/comment`: 從伺服器取得訊息
只會提供最近 _x_ 則訊息。_x_ 預設是 5，實際值依伺服器管理員在 `config/config.js` 設的值而定。

#### Request
```
GET api/comment
```

#### Response
```json
{
  "result": true,
  "data": {
    "com": [
      { // 即使用者在 `api/comment/post` 傳入的內容
        "user":    "使用者名稱",
        "content": "訊息內容",
        "fwd2term": true
      }
    ]
  }
}
```

### [POST]: `api/comment/post`: 傳送留言至伺服器
#### Request
```
POST api/comment/post
Content-Type: application/json

{"user":"使用者名稱","content":"訊息內容","fwd2term":true}
```

- `fwd2term`: 是否轉寄副本至伺服器？伺服器會收到下述訊息：
  ```
  COMMENT usr=使用者名稱 cont=訊息內容
  ```

#### Response
```json
{
  "result": true,
  "data": { // 即使用者丟進來的東西
    "user":     "使用者名稱",
    "content":  "訊息內容",
    "fwd2term": true
  }
}
```