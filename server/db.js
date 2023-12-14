const path = require('path');

module.exports = async (app) => {
  const { JSONPreset } = await import('lowdb/node')
  const db = await JSONPreset(
    path.join(__dirname, '../public/api/v1/articles.json'),
    { data: [] })

  app.context.db = db
};
