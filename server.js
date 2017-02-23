import {resolve} from 'path';
import ip from 'ip';
import express from 'express';
import minimist from 'minimist';

import devMiddleware from './middlewares';
import renderMiddleware from './middlewares/render-middleware';

const env = process.env.NODE_ENV;
const argv = minimist(process.argv.slice(2));

const customHost = argv.host || process.env.HOST;
const host = customHost || null;
const prettyHost = customHost || 'localhost';

const port = argv.port || process.env.PORT || 3000;

const app = express();

app.use('/assets', express.static(resolve(__dirname, 'dist')));
app.use(devMiddleware);

app.get('*', renderMiddleware);

app.listen(port, host, (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.info(`Listening at
      Localhost: http://${prettyHost}:${port}
      LAN: http://${ip.address()}:${port}
    `);
  }
});
