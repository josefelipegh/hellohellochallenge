import { ThemeProvider, createGlobalStyle } from "styled-components";

// Components
import Responsive from "./components/responsive/Responsive.jsx";
import ContactUs from "./pages/contactUs/ContactUs.jsx";

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
          <ContactUs/>
        </Responsive>
      </ThemeProvider>
    </>
  );
}

export default App;