import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/GlobalStyle';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

const theme = {
  colors: {
    greyTxt: '#828282',
    mainBorder: 'rgba(153,153,153,0.3)',
    active: '#19cf68',
    error: '#de1d1d',
  },
  spacing: value => `${value * 4}px`,
  animation: '250ms cubic-bezier(0.4, 0, 0.2, 1);',
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-08-phonebook">
      <ThemeProvider theme={theme}>
        <PersistGate loading={null} persistor={persistor}>
          <Provider store={store}>
            <App />
            <GlobalStyle />
          </Provider>
        </PersistGate>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
