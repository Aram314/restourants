import React from 'react';
import MainLayout from './components/Layout';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
    </div>
  );
}

export default App;
