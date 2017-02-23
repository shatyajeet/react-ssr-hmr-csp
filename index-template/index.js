export default (env, appString) => `
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <title>React Super Combo Boilerplate</title>
    </head>
    <body>
      <div id="app">${appString}</div>
      <script src="/assets/bundle.js"></script>
    </body>
  </html>
`;
