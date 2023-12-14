const { koaBody } = require("koa-body");
const Router = require("koa-router");
const ResponseHandler = require('../utils/response')

module.exports = function (router) {
  router.get("/", (ctx, next) => {
    const users = ctx.db.articles.data;
    ctx.body = new ResponseHandler(ctx, users);
  });

  router.post("/", koaBody(), async (ctx) => {
    const row = ctx.request.body
    const articles = ctx.db.articles;
    const typeArticles = ctx.db[row.type]

    const { desc, content, ...rest } = row

    const createTime = new Date().toUTCString()
    const draft = Object.assign({}, rest, {
      content,
      id: typeArticles.data.data.length + 1,
      createTime
    })
    typeArticles.data.data.push(draft)

    articles.data.data.push(Object.assign({}, rest, {
      desc,
      id: articles.data.data.length + 1,
      articleId: draft.id,
      createTime
    }))

    articles.write()
    typeArticles.write()

    ctx.body = new ResponseHandler(ctx, draft);
  });

  // // curl -X PATCH http://localhost:3000/user/3 -d "name=cungen"
  // router.patch("/:id", koaBody(), async (ctx) => {
  //   const id = ctx.params.id;
  //   const { col, value } = ctx.request.body;
  //   const row = await ctx.db.user.patchById(id, col, value);
  //   ctx.body = new ResponseHandler(ctx, row);
  // });

  // // curl -X DELETE http://localhost:3000/user/2
  // router.delete("/:id", async (ctx) => {
  //   const id = ctx.params.id;
  //   const user = await ctx.db.user.findById(parseInt(id));

  //   if (!user) {
  //     ctx.body = new ResponseHandler(ctx, null, 404)
  //     return
  //   }
  //   const row = await ctx.db.user.deleteById(id);
  //   ctx.body = new ResponseHandler(ctx, row);
  // });

  return router
}