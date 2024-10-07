"use client";

import theme from "@/styles/theme";
import { ThemeProvider } from "styled-components";
import StyledComponentsRegistry from "./registry";

import GlobalStyles from "@/styles/global";

const Providers = (props: React.PropsWithChildren) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {props.children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default Providers;
