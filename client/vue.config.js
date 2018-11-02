module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8881',
        ws: true,
        changeOrigin: true,
      },
    },
  },
};
