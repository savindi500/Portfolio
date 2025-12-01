import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Qualification from "./components/Qualification";
import Contact from "./components/Contact";

const theme = createTheme({
  palette: {
    background: {
      default: "#F8FAFF",
      paper: "#FFFFFF",
    },
    primary: {
      main: "#4C1D95",
    },
    secondary: {
      main: "#0EA5E9",
    },
  },
  typography: {
    fontFamily: "Poppins, Roboto, Arial",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Qualification />
      <Contact />
    </ThemeProvider>
  );
}

export default App;
