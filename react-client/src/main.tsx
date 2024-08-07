import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createClient, cacheExchange, fetchExchange, Provider } from 'urql';

const client = createClient({
  url: 'http://localhost:4000/graphql',
  suspense: false, // Aktifkan mode suspense jika menggunakan React Suspense
  exchanges: [
    cacheExchange,
    fetchExchange
  ],
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider value={client}>
      <App />
    </Provider>
  </React.StrictMode>
)