import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';

import webpackConfig from '../webpack/webpack.base.config.babel';

const compiler = webpack(webpackConfig);
const devMiddleware = webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
  stats: true
});

export default devMiddleware;
