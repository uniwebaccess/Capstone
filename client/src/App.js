import './style/App.css';
import React from 'react';
import Routes from './routes';
import Footer from './components/Footer';
import NavBar from './components/Navbar';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#aadfe2',
      // dark: will be calculated from palette.primary.main,
      contrastText: '#0097a7',
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#e0e0e0',
      main: '#1D3557',
      // dark: will be calculated from palette.secondary.main,
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div className="main">
          <NavBar />
          <Routes />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
