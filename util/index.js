module.exports = {
    brand: "pMediaNode",
    info: text => { console.info(`[I] ${text}`) },
    warn: text => { console.warn(`[W] ${text}`) },
    err: text => { console.error(`[E] ${text}`) }
}
