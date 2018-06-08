import React from "react";
import { render } from "react-dom";
import styles from "./styles/style.css";
import headerStyles from "./styles/header_style.css";

//Components
import Form from "./Form";
import Header from "./Header";
const App = () => (
  <div>
    <Header style={headerStyles} />
    <Form style={styles} />
  </div>
);

render(<App />, document.getElementById("root"));
