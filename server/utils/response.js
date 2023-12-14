const statusMap = require('../enums/status-map')

class ResponseHandler {
  constructor(ctx, content, code = 200, msg = '', bizCode = '') {
    this.code = bizCode || code
    ctx.response.status = code
    this.msg = msg || statusMap.get(code)
    this.content = content
  }

  toString() {
    return {
      code: this.code,
      msg: this.msg,
      content: this.content
    }
  }
}

module.exports = ResponseHandler

