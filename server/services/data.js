const axios = require('axios');
const config = require('config');
const {cache} = require('../database');

const {dataUrl, bigDataUrl, smallDataUrl} = config;

const helper = async ({key, url, params}) => {
  const value = await cache.get(key);
  if (value) {
    return JSON.parse(value);
  }
  const {data} = await axios.get(url, params);
  await cache.set(key, JSON.stringify(data));
  return data;
};

const list = (rows, delay) => axios.get(dataUrl, {
  params: {
    rows: rows || 100,
    delay: delay || 5,
  },
});

const listOfBigData = async ({cache}) => {
  const url = bigDataUrl;
  if (cache) {
    return helper({key: 'bigdata', url})
  }
  // const bigData = await cache.get('bigdata');
  // if (bigData) {
  //   return JSON.parse(bigData);
  // }
  const {data} = await axios.get(url);
  // cache.set('bigdata', JSON.stringify(data));
  //
  return data;
};

const listOfSmallData = async ({cache}) => {
  const url = smallDataUrl;
  if (cache) {
    return helper({key: 'smalldata', url});
  }
  const {data} = await axios.get(url);
  return data;
};

module.exports = {
  list,
  listOfBigData,
  listOfSmallData,
};
