import React from 'react';
import MainLayout from './components/Layout';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <MainLayout />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
