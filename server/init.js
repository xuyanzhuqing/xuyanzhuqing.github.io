const path = require('path');

async function init() {
  const { JSONPreset } = await import('lowdb/node')
  const db = await JSONPreset(
    path.join(__dirname, '../../public/data/article.json'),
    { data: [] })

  // Edit db.json content using plain JavaScript
  db.data
    .data
    .push({ id: 1, title: 'lowdb is awesome' })

  // Save to file
  db.write()
}

init()