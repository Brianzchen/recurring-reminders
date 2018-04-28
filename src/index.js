import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import App from 'App';
import reducers from 'reducers';
import service from 'service';

const history = createHistory();

const middleware = [
  thunk.withExtraArgument({
    service,
  }),
  routerMiddleware(history),
];

const store = createStore(
  reducers,
  applyMiddleware(...middleware),
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
