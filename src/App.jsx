import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import MainPage from './pages/MainPage/MainPage';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
}

export default App;
