import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import axios from 'axios';
import reducers from './reducers';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/index';
import 'bootstrap/dist/css/bootstrap.min.css';

axios.defaults.withCredentials = false;
axios.defaults.baseURL = 'http://localhost:3000';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
// axios.get('users');
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
