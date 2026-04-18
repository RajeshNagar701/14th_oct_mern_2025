import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <h1 class="bg-danger text-white p-5">Hello i am index.js</h1>
	<App/>
  </React.StrictMode>
);