import "./style/App.css";
import React from "react";
import Routes from "./routes";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";

// import { createMuiTheme } from "@material-ui/core/styles";
// import { ThemeProvider } from '@material-ui/styles';

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       // light: will be calculated from palette.primary.main,
//       main: '#44ff00',
//       // dark: will be calculated from palette.primary.main,
//       // contrastText: will be calculated to contrast with palette.primary.main
//     },
//     secondary: {
//       light: '#66ffff',
//       main: '#0044ff',
//       // dark: will be calculated from palette.secondary.main,
//     },
//     // Used by `getContrastText()` to maximize the contrast between
//     // the background and the text.
//     contrastThreshold: 3,
//     // Used by the functions below to shift a color's luminance by approximately
//     // two indexes within its tonal palette.
//     // E.g., shift from Red 500 to Red 300 or Red 700.
//     tonalOffset: 0.2,
//   },
// });

function App() {
  return (
    //<ThemeProvider theme={theme}>
    <div className="App">
      <div className="main">
        <NavBar />
        <Routes />
      </div>
      <Footer />
    </div>
    //</ThemeProvider>
  );
}

export default App;
