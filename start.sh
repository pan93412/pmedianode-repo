# yarn run start scripts.

checkConfigExists() {
  if [ ! -f data/config.js ]
  then
    cp data/config.example.js data/config.js
  fi
}

checkFileExists() {
  if [ ! -f $1 ]
  then
    echo '[]' >> $1
  fi
}

checkConfigExists
checkFileExists 'data/announcements.json'
checkFileExists 'data/mediaList.json'

nodemon ./app.js # start!
