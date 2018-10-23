const api = require('koa-router')({ prefix: '/api/v1' });

const data = require('./data');

api.use('/data', data.routes());

module.exports = {
  routes() { return api.routes(); },
};
