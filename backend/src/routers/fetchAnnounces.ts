import * as fs from "fs"
import * as conf from "../config/config"
import * as arch from "../config/arch"

const annoData: Array<arch.AnnoMeta> = JSON.parse(
  fs.readFileSync(conf.annoPath, { encoding: 'UTF-8' })
    .toString()
).reverse()

export default function () {
  return JSON.stringify(annoData)
}
