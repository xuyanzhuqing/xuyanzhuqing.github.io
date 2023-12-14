const compose = require('koa-compose')
const Router = require('koa-router')
const fse = require('fs-extra')
const requireContext = require('require-context');

const baseurl = '/api/v1'

const routes = requireContext(__dirname, false, /[^index]\.js$/)
  .keys()
  .map(name => name.replace('.js', ''))
  .map(name => {
    const router = new Router({ prefix: `${baseurl}/${name}` })
    return require('./' + name)(router).routes()
  })

module.exports = compose(routes)