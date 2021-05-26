const { resolve } = require('path');

module.exports = {
  entry: ['./md5.js'],
  output: {
    path: resolve('./dist'),
    filename: 'md5-bundle.js',
    libraryTarget: 'commonjs',
    library: 'MD5',
  },
};
