import {resolve} from 'path';
import webpack from 'webpack';

const env = process.env.NODE_ENV;
const currentDir = resolve(__dirname, '..');

export default {
  entry: resolve(currentDir, 'src/index.js'),
  output: {
    path: resolve(currentDir, 'dist'),
    publicPath: '/assets',
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      include: /src/,
      use: {
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        }
      }
    }]
  }
};
