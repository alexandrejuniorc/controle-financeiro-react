import { DefaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/themes/global';
import { ThemeProvider } from 'styled-components';

import { Router } from './Router';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    /* tema padrão */
    <ThemeProvider theme={DefaultTheme}>
      {/* rotas */}
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      {/* estilo global */}
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
