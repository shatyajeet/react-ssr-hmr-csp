import express from 'express';

const env = process.env.NODE_ENV;
const app = express();

app.listen(3000, '0.0.0.0', (err, a, b, c) => {
  if (err) {
    console.error(err.message);
  } else {
    console.info('Listening in at http://localhost:3000');
  }
});
