const config = require('config');
const app = require('./app');


const init = async () => {
  app.listen(config.port, () => {
    console.log(`Start listen on ${config.port} port`);
  });
};

init();
