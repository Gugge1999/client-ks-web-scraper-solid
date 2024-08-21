import { Button } from "@suid/material";
import type { Component } from "solid-js";

import styles from "./App.module.scss";
import logo from "./logo.svg";

const App: Component = () => {
  return (
    <div class={styles.App}>
      <Button variant="contained">Hello world</Button>
      <header class={styles.header} role="banner">
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a class={styles.link} href="https://github.com/solidjs/solid" target="_blank" rel="noopener noreferrer">
          Learn Solid
        </a>
      </header>
    </div>
  );
};

export default App;
