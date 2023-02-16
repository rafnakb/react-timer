import { ThemeProvider } from "styled-components";
import { Home } from "./pages/Home";
import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import { History } from "./pages/History";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { CyclesContextProvider } from "./contexts/CyclesContext";
import { Router } from "./Router";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CyclesContextProvider>
        <Router />
      </CyclesContextProvider>
      <GlobalStyles />
    </ThemeProvider>
  )
}