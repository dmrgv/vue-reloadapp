const { resolve } = require('path');

module.exports = function nuxtVueReloadApp(options) {
  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'vue-reloadapp.js',
    options,
    ssr: false,
  });
};

module.exports.meta = require('../package.json');
