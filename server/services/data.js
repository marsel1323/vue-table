const axios = require('axios');
const config = require('config');

const { dataUrl, bigDataUrl, smallDataUrl } = config;

const list = (rows, delay) => axios.get(dataUrl, {
  params: {
    rows: rows || 100,
    delay: delay || 5,
  },
});

const listOfBigData = () => axios.get(bigDataUrl);

const listOfSmallData = () => axios.get(smallDataUrl);

module.exports = {
  list,
  listOfBigData,
  listOfSmallData,
};
