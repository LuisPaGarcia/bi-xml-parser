import * as React from "react";
import { render } from "react-dom";
import { App } from "./components/App";

const el = document.querySelector("#app");

el && render(<App />, el);
