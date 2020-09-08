import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import 'components/style/index.less';
import 'modules/example/style/example.less';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

import * as reducers from './reducers';
import routes from './routes';

const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-b" changePositionKey="ctrl-q" defaultIsVisible={false}>
    <LogMonitor theme="tomorrow" preserveScrollTop={false} />
  </DockMonitor>
);
const reducer = combineReducers({
  ...reducers, // eslint-disable-line
  routing: routerReducer,
});
let store = null;
store = createStore(reducer, DevTools.instrument());

const history = syncHistoryWithStore(browserHistory, store);
ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router routes={routes} history={history} />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('app')
);
