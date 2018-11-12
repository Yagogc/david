import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import theme from "../styles/theme";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New";
  }
`;

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      {children}
    </>
  </ThemeProvider>
);

export default Theme;

Theme.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
