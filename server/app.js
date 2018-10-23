const Koa = require('koa');
const morgan = require('koa-morgan');
const bodyParser = require('koa-bodyparser');
const router = require('./middleware/modules');

const app = new Koa();

app.use(morgan('combined'));
app.use(bodyParser());
app.use(router.routes());

module.exports = app;
