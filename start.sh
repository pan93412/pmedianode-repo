# yarn run start scripts.

checkFileExists() {
  if [ ! -f $1 ]
  then
    echo '[]' >> $1
  fi
}

checkFileExists 'data/announcements.json'
checkFileExists 'data/mediaList.json'

nodemon ./app.js # start!