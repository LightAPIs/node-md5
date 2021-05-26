const { resolve } = require('path');

module.exports = {
  entry: ['./md5.js'],
  target: 'web',
  output: {
    path: resolve('./dist'),
    filename: 'md5-bundle.js',
    libraryTarget: 'this',
    library: 'MD5',
  },
};
