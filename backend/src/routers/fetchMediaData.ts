import * as fs from "fs"
import * as conf from "../config/config"
import * as arch from "../config/arch"

const mediaData: Array<arch.MediaMeta> = JSON.parse(
  fs.readFileSync(conf.mediaListPath, { encoding: 'UTF-8' })
    .toString()
).reverse()

export default function () {
  return JSON.stringify(mediaData)
}
