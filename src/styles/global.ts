import { createGlobalStyle, DefaulTheme, ThemeProps } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props: ThemeProps<DefaulTheme>) => props.theme['green-500']};
  } 

  body {
    background: ${(props: ThemeProps<DefaulTheme>) => props.theme['gray-900']};
    color: ${(props: ThemeProps<DefaulTheme>) => props.theme['gray-300']};
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

`;