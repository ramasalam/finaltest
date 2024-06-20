import React from 'react';
import { createRoot } from 'react-dom/client'; // Import `createRoot` dari `react-dom/client`
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import './styles/index.css';

const container = document.getElementById('root');
const root = createRoot(container); // Buat root baru menggunakan `createRoot`

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
