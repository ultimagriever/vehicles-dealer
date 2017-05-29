import Express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from './src/App';

const server = new Express();
server.use(Express.static(path.resolve(__dirname, 'build')));
server.set('views', path.resolve(__dirname, 'build'));
server.set('view engine', 'ejs');


server.get('/api/stores', function (req, res, next) {
  res.send([
    'Vergueiro',
    'São Bernardo do Campo',
    'Ibirapuera'
  ]);
});

server.get('*', function(req, res, next) {
  const html = renderToString(
    <StaticRouter location={req.url} context={{}}>
      <App />
    </StaticRouter>
  );

  res.render('index', { html });
});

server.listen(3333, () => console.log('Express listening on port 3333'));
