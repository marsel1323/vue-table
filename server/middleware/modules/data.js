const router = require('koa-router')();
const { data: dataService } = require('../../services/');

router.get('/big', async (ctx) => {
  try {
    const { data } = await dataService.listOfBigData();
    ctx.status = 200;
    ctx.body = { data };
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error };
  }
});

router.get('/small', async (ctx) => {
  try {
    const { data } = await dataService.listOfSmallData();
    ctx.status = 200;
    ctx.body = { data };
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error };
  }
});

router.get('/', async (ctx) => {
  try {
    const { rows, delay } = ctx.query;
    console.log(rows);
    const { data } = await dataService.list(rows, delay);
    ctx.status = 200;
    ctx.body = { data };
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error };
  }
});

module.exports = router;
