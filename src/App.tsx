import { ThemeProvider } from "styled-components";
import { Home } from "./pages/Home";
import { Router } from "./Router";
import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import { History } from "./pages/History";

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/history', element: <History /> }
]);

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <RouterProvider router={router} />
      <GlobalStyles />
    </ThemeProvider>
  )
}