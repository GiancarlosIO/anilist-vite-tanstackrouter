import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const App = () => <h1 className="text-blue-300">hi</h1>;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
