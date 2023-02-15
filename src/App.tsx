import { ThemeProvider } from "styled-components";
import { Home } from "./pages/Home";
import { Router } from "./Router";
import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import { History } from "./pages/History";
import { DefaultLayout } from "./layouts/DefaultLayout";

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/history',
        element: <History />
      }
    ]
  },
]);

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <RouterProvider router={router} />
      <GlobalStyles />
    </ThemeProvider>
  )
}