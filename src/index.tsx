/* @refresh reload */
import { Button, createPalette, createTheme, ThemeProvider } from "@suid/material";
import { createMemo, createSignal } from "solid-js";
import { render } from "solid-js/web";
import Card from "./components/card/Card";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import "./index.scss";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error("Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?");
}

const [themeMode, setThemeMode] = createSignal<"light" | "dark">("dark");

const palette = createMemo(() =>
  createPalette({
    mode: themeMode(),
    primary: { main: themeMode() === "dark" ? "#009688" : "#ffffff" },
    secondary: {
      main: themeMode() === "dark" ? "#90a4ae" : "#90a4ae",
    },
  })
);

const theme = createTheme({ palette: palette });

function onClick() {
  setThemeMode((prev) => (prev === "light" ? "dark" : "light"));
}

render(() => {
  return (
    <ThemeProvider theme={theme}>
      <Button onClick={onClick} variant="contained">
        Byt tema
      </Button>

      <Header />
      <Card />
      <Footer />
    </ThemeProvider>
  );
}, root!);
