import React, { Suspense } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import ReactDOM from 'react-dom';
import { Provider, useDispatch } from 'react-redux';
import App from './App';
import store from './redux/store';
import {history} from './redux/store';


ReactDOM.render(
  <Provider store={store}>
      <ConnectedRouter history={history}>
      <Suspense fallback={<div>Загрузка</div>}>
          <App />
      </Suspense>
      </ConnectedRouter></Provider>,
  document.getElementById('root')
);

