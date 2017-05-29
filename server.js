import Express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import axios from 'axios';
import reducers from './src/reducers';
import App from './src/App';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

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

server.get('*', async function(req, res, next) {
  const response = await axios.get('http://localhost:3333/api/stores');

  const store = createStore(reducers, {
    stores: {
      all: response.data,
      loading: false
    }
  }, applyMiddleware(ReduxThunk));

  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={{}}>
        <App />
      </StaticRouter>
    </Provider>
  );

  res.render('index', { html });
});

server.listen(3333, () => console.log('Express listening on port 3333'));
