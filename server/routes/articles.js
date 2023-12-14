const { koaBody } = require("koa-body");
const Router = require("koa-router");
const ResponseHandler = require('../utils/response')

module.exports = function (router) {
  router.get("/", async (ctx, next) => {
    const users = await ctx.db.data;
    ctx.body = new ResponseHandler(ctx, users);
  });

  // // curl http://localhost:3000/users
  // router.get("/users", async (ctx) => {
  //   const users = ctx.state.users;
  //   ctx.body = new ResponseHandler(ctx, users);
  // });

  // // curl http://localhost:3000/user/1
  // router.get("/:id", async (ctx) => {
  //   const id = ctx.params.id;
  //   const user = await ctx.db.user.findById(id);

  //   if (!user) {
  //     ctx.body = new ResponseHandler(ctx, null, 404)
  //     return
  //   }

  //   ctx.body = new ResponseHandler(ctx, user);
  // });

  // // curl http://localhost:3000/user -d "name=\"michael\"&&age=18&&role=father&&salary=100000"
  // router.post("/", koaBody(), async (ctx, next) => {
  //   if (ctx.request.body.age < 18) {
  //     throw new Error("teenager is not allowed");
  //   }
  //   await next();
  // });

  // router.post("/", async (ctx) => {
  //   console.info(ctx.request.body);
  //   const row = await ctx.db.user.insert(ctx.request.body);
  //   ctx.body = new ResponseHandler(ctx, row);
  // });

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