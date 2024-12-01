import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store.js';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import { PersistGate } from 'redux-persist/integration/react';
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HelmetProvider>
          <StrictMode>
            <App />
          </StrictMode>
        </HelmetProvider>
      </PersistGate>
    </Provider>
    
  </BrowserRouter>,
)