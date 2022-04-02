import { ThemeProvider, createGlobalStyle } from "styled-components";

// Components
import Responsive from "./components/responsive/Responsive.jsx";

// Theming
import colors from './theming/colors.js';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${colors.bgColor};
  }
`

function App() {
  return (
    <>
      <GlobalStyle/>
      <ThemeProvider theme={colors}>
        <Responsive>
          <section className="container">medio</section>
        </Responsive>
      </ThemeProvider>
    </>
  );
}

export default App;