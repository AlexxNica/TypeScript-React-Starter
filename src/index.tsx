import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import { enthusiasm } from './reducers/index';
import { StoreState } from './types/index';

import Hello from './containers/Hello';
import Test from './containers/Test';

import './index.css';

const store = createStore<StoreState>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <switch>
        <Route exact={true} path="/" component={Hello} />
        <Route exact={true} path="/test/:title" component={Test} />
      </switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
