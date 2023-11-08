import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import { GlobalStyles } from "../styles/global";

const Layout = () => {
  return (
    
    <ThemeProvider theme={theme}>
  <GlobalStyles/>
    </ThemeProvider>
  );
};

export default Layout;
