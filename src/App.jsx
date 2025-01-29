import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './Header';
import Home from './components/Home';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    background: {
      default: '#f4f6f8',
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
