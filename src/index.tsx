import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 이 영역이 추가됩니다. ------
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from './reducers';
const store = createStore(rootReducer);
// ----------------------------

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>  {/* Provider로 감싸고, 만든 store을 적용 */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

reportWebVitals();
