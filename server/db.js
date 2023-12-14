const path = require('path');

const requireContext = require('require-context');

module.exports = async (app) => {
  const { JSONPreset } = await import('lowdb/node')
  const dbDir = '../public/api/v1'
  const baseurl = path.join(__dirname, dbDir)
  const dbs = requireContext(baseurl, false, /\.json$/)
    .keys()
    .map(p => {
      return [p.replace(/\.json$/, ''), path.resolve(baseurl, p)]
    })

  app.context.db = {}
  dbs.forEach(async db => {
    app.context.db[db[0]] = await JSONPreset(db[1], { data: [] })
  })
};
