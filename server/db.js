const path = require('path');

module.exports = async (app) => {
  const { JSONPreset } = await import('lowdb/node')
  const db = await JSONPreset(
    path.join(__dirname, '../public/data/article.json'),
    { data: [] })

  app.context.db = db
};
