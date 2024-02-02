import { createContext, useMemo, useState } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {

      grey: {
        700: "#331a00",
      },
      primary: {

        900: "#fafafa",
        800: "#f5f5f5",
        700: "#f0f0f0",
        600: "#dedede",
        500: "#c2c2c2",
        400: "#979797",
        300: "#000000",
        200: "#000000",
        100: "#ffffff"
      },

      red: {
        100: "#ffcccc",
        200: "#ff9999",
        300: "#ff6666",
        400: "#ff3333",
        500: "#ff0000",
        600: "#cc0000",
        700: "#990000",
        800: "#660000",
        900: "#330000"
      },
      blue: {
        100: "#cccced",
        200: "#9999da",
        300: "#6666c8",
        400: "#3333b5",
        500: "#0000a3",
        600: "#000082",
        700: "#000062",
        800: "#000041",
        900: "#000021"
      },
    }

    : {
      grey: {
        100: "#fafafa",
        200: "#f5f5f5",
        300: "#f0f0f0",
        400: "#dedede",
        500: "#c2c2c2",
        600: "#979797",
        700: "#000000",
        800: "#606060",
        900: "#ffffff"
      },

      primary: {
        100: "#d1d2d4",
        200: "#a2a6aa",
        300: "#74797f",
        400: "#454d55",
        500: "#17202a",
        600: "#121a22",
        700: "#0e1319",
        800: "#090d11",
        900: "#050608"
      },
      red: {
        100: "#ffcccc",
        200: "#ff9999",
        300: "#ff6666",
        400: "#ff3333",
        500: "#ff0000",
        600: "#cc0000",
        700: "#990000",
        800: "#660000",
        900: "#330000"
      },
      blue: {
        100: "#cccced",
        200: "#9999da",
        300: "#6666c8",
        400: "#3333b5",
        500: "#0000a3",
        600: "#000082",
        700: "#000062",
        800: "#000041",
        900: "#000021"
      },

    }),
});



export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
          // palette values for dark mode
          primary: {
            main: colors.primary[900],
          },
          secondary: {
            main: colors.primary[500],
          },
          neutral: {
            dark: colors.grey[700],
            main: colors.grey[500],
            light: colors.grey[100],
          },
          background: {
            default: colors.primary[300],
          },
        }
        : {
          primary: {
            main: colors.primary[100],
          },
          secondary: {
            main: colors.primary[500],
          },
          neutral: {
            dark: colors.grey[700],
            main: colors.primary[100],
            light: colors.grey[100],
          },
          background: {
            default: colors.primary[200],
          },
        }),
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

export const colorModeContext = createContext({
  toggleColorMode: () => { },
});
export const useMode = () => {
  const [mode, setMode] = useState("dark");
  console.log("mode is", mode)
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};
