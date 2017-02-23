import React from 'react';
import {renderToString} from 'react-dom/server';
import {match, RouterContext} from 'react-router';

import routes from '../src/routes';
import indexTemplate from '../index-template';

const env = process.env.NODE_ENV;

export default (req, res) => {
  match({routes, location: req.url}, (err, redirectLocation, renderProps) => {
    if (err) {
      res.status(500).send(err.message);
    } else if (redirectLocation) {
      res.status(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      const appString = renderToString(<RouterContext {...renderProps} />);
      res.status(200).send(indexTemplate(env, appString));
    } else {
      res.status(404).send('Not found');
    }
  });
};
