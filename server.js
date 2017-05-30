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
import cors from 'cors';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

// If debug is true, log all requests
process.on('unhandledRejection', (reason) => {
  console.error(reason);
});


const server = new Express();
server.use(Express.static(path.resolve(__dirname, 'build')));
server.set('views', path.resolve(__dirname, 'build'));
server.set('view engine', 'ejs');
server.use(cors());

server.get('/api/stores', function (req, res, next) {
  res.send([
    'Vergueiro',
    'São Bernardo do Campo',
    'Ibirapuera'
  ]);
});

server.get('/api/others', function (req, res, next) {
  res.send([
    'Fogo',
    'Gelo',
    'Terra'
  ]);
});

server.get('*', async function(req, res, next) {
  // const response = await axios.get('http://localhost:3333/api/stores');

  // const store = createStore(reducers, {
  //   stores: {
  //     all: response.data,
  //     loading: false
  //   }
  // }, applyMiddleware(ReduxThunk));

  const store = createStore(reducers, applyMiddleware(ReduxThunk));

  const reactApp = <Provider store={store}>
      <StaticRouter location={req.url} context={{}}>
        <App />
      </StaticRouter>
    </Provider>;

  const waited = [];
  function waitInitialLoad(interval) {
    setTimeout(async () => {
      const state = store.getState();

      const pendingKeys = Object.keys(state.called)
        .filter(key => !waited[key]);

      console.log({ pending: pendingKeys.length });

      if (pendingKeys.length) {
        await Promise.all(Object.values(state.called));
        Object.keys(state.called)
          .forEach(key => waited[key] = true);
        console.log('LAYER LOADED');
        renderToString(reactApp);
        waitInitialLoad(10);
        return;
      }
      console.log('ALL LOADED');
      const html = renderToString(reactApp);
      res.render('index', { html });
    }, interval);
  }

  renderToString(reactApp);
  waitInitialLoad(10);
});

server.listen(3333, () => console.log('Express listening on port 3333'));
