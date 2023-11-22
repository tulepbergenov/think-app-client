"use client";

import { IChildren } from "@/shared/types";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./MUIProvider.theme";

export const MUIProvider = ({ children }: IChildren) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
