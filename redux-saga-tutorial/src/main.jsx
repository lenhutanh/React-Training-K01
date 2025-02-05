import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import axios from 'axios';
import reducers from './redux/reducers';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './redux/sagas/index';
import 'antd/dist/reset.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

axios.defaults.withCredentials = false;
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
// axios.get('users');
createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  // </StrictMode>,
)
