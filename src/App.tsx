import React from "react";
import { ThemeProvider } from "styled-components";

import theme from "./styles/themes";

import { GlobalStyle } from "./styles/utilities/Global";

import GradientMesh from "./components/GradientMesh";

export default function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <GradientMesh />
      </ThemeProvider>
    </div>
  );
}
