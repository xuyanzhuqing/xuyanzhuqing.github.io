const Koa = require("koa");
const app = new Koa();
const cors = require('@koa/cors');
const compose = require('koa-compose')
const port = 9528

require("./db")(app);

app.use(cors({
  origin: function (ctx) { //设置允许来自指定域名请求
    const whiteList = ['http://weipxiu.com', 'http://localhost:9527']; //可跨域白名单
    let url = ctx.header?.referer?.slice(0, ctx.header.referer.length - 1);
    if (whiteList.includes(url)) {
      return url
    }
    return 'http://localhost:' + port //默认允许本地请求3000端口可跨域
  },
  maxAge: 5, //指定本次预检请求的有效期，单位为秒。
  credentials: true, //是否允许发送Cookie
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], //设置所允许的HTTP请求方法
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'], //设置服务器支持的所有头信息字段
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'] //设置获取其他自定义字段
}))

app.use(compose([
  require('./utils/error-handle'),
]))

app.use(require("./routes"))

app.listen(port);
