import React, { createContext, useState, useMemo, useContext } from "react";
import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

// Create the context to share the theme state
const ThemeContext = createContext();

// Create a custom hook to use the theme context
export const useThemeContext = () => {
  return useContext(ThemeContext);
};

const ThemeProvider = ({ children }) => {
  // State for the theme: either 'light' or 'dark'
  const [themeMode, setThemeMode] = useState("dark");

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  };

  // Define both dark and light themes using MUI's theme creation function
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeMode,
          ...(themeMode === "dark"
            ? {
                background: {
                  default: "#1b1b1b",
                  paper: "#2c2c2c",
                },
                text: {
                  primary: "#fff",
                  secondary: "#aaa",
                },
              }
            : {
                background: {
                  default: "#f5f5f5",
                  paper: "#fff",
                },
                text: {
                  primary: "#000",
                  secondary: "#333",
                },
              }),
        },
      }),
    [themeMode]
  );

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
