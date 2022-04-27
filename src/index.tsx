import * as React from "react";
import { render } from "react-dom";

import "./styles/reset.css";

import App from "./App";

const rootElement = document.getElementById("root");
render(<App />, rootElement);
