import React from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Provider } from 'react-redux';
import NavBar from './NavBar/NavBar';
import store from '../app/store';
import Footer from './Footer/Footer';

function App() {
  const theme = createTheme({
    // Override or create new styles, colors, palettes...
  });

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div className="flex h-[100%]">
          <NavBar />
          <main className="flex-grow p-10 sm:ml-[240px]">
            <div className="h-[70px]" />
            <Outlet />
            <Footer />
          </main>
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
