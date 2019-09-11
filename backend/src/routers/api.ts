import * as express from "express"
import annofetch from "./fetchAnnounces"
import mediafetch from "./fetchMediaData"

const apiRoute = express.Router()

apiRoute.use((_, res, next) => {
  res.header({'Content-Type': 'application/json'})
  next()
})

apiRoute.get('/mediaMeta', (_, res) => {
  res.send(mediafetch())
})

apiRoute.get('/annoMeta', (_, res) => {
  res.send(annofetch())
})

export default apiRoute