import React from "react";
import { render } from "react-dom";
import Form from "./Form";
import styles from "./styles/style.css";

const App = () => (
  <div style={styles}>
    <Form />
  </div>
);

render(<App />, document.getElementById("root"));
