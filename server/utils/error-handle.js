const ResponseHandler = require('../utils/response')

module.exports = (ctx, next) => {
  return next().catch((err) => {
    if (401 == err.status) {
      ctx.body = new ResponseHandler(ctx, null, 401)
    } else {
      const status = err.status || 500

      ctx.status = err.status || 500

      ctx.body = new ResponseHandler(ctx, {
        msg: err.message,
        ...process.env.NODE_ENV === 'development'
          ? { stack: err.stack }
          : {}
      }, status)
      console.log(err.stack);
    }
  });
};
