#!/usr/bin/env bash

# standard 路徑
# 將一個路徑的所有 js 格式化。
doStandard() {
    standard --fix "$1/*.js"
}

# 檢查是否標準
checkStd() {
    standard "$1/*.js"
}

for i in data routes utils
do
    doStandard $i
done

standard --fix app.js

for i in data routes utils
do
    checkStd $i
done

standard app.js