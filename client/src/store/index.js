import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  strict: debug,
  state: {
    data: null,
    bigData: null,
    smallData: null,

    selectedRow: null,
  },
  mutations: {
    setData(state, data) {
      state.data = data;
    },
    setBigData(state, data) {
      state.bigData = data;
    },
    setSmallData(state, data) {
      state.smallData = data;
    },
    setSelectedRow(state, row) {
      state.selectedRow = row;
    },
  },
  actions: {
    LOAD_DATA: async ({ commit }, rows, delay) => {
      try {
        const { data } = await axios.get('/api/v1/data', { params: { rows, delay } });
        console.log(data);
        commit('setData', data.data);
      } catch (error) {
        console.error(error);
      }
    },
    LOAD_BIG_DATA: ({ commit }) => new Promise((resolve) => {
      axios.get('/api/v1/data/big', {params: {cache: true}})
        .then(response => {
          const { data } = response.data;
          commit('setData', data);
          resolve(data);
        })
        .catch(error => {
          console.error(error);
        });
    }),
    LOAD_SMALL_DATA: ({ commit }) => new Promise((resolve) => {
      axios.get('/api/v1/data/small',  {params: {cache: true}})
        .then(response => {
          const { data } = response.data;
          commit('setData', data);
          resolve(data);
        })
        .catch(error => {
          console.error(error);
        });
    }),
    SELECT_ROW: ({ commit }, row) => {
      commit('setSelectedRow', row);
    },
    SORT_DATA: ({ commit, state }, { key, sortDirection }) => {
      const data = [...state.data];
      data.sort((a, b) => {
        if (a[key] > b[key]) return sortDirection ? -1 : 1;
        else if (a[key] < b[key]) return sortDirection ? 1 : -1;
        return 0;
      });
      commit('setData', data);
    },
  },
});
