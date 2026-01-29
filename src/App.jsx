import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Qualification from "./components/Qualification";
import Contact from "./components/Contact";
import ProjectDetails from "./components/ProjectDetails";

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

const HomePage = () => (
  <>
    <Header />
    <About />
    <Skills />
    <Projects />
    <Qualification />
    <Contact />
  </>
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* 👇 THIS FIXES GITHUB PAGES ROUTING */}
      <Router basename="/Portfolio">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
