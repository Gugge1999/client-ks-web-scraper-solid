/* @refresh reload */
import { createTheme, ThemeProvider } from "@suid/material";
import { render } from "solid-js/web";

import Card from "./components/card/Card";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

import "./index.scss";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error("Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?");
}

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#009688" },
    secondary: { main: "#90a4ae" },
  },
});

// const lightTheme = createTheme({
//   palette: {
//     mode: "dark",
//     primary: { main: "#009688" },
//     secondary: { main: "#90a4ae" },
//   },
// });

render(() => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Header />
      <Card />
      <Footer />
    </ThemeProvider>
  );
}, root!);
