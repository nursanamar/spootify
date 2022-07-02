import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import CoreLayout from './common/layouts/CoreLayout';
import './styles/_main.scss';
import { store, persistor } from "./store/index";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} >
        <CoreLayout>
          <Routes />
        </CoreLayout>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
