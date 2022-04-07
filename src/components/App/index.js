import { ThemeProvider } from 'styled-components';
import { Container } from './styles';

// importação de componentes e estilos
import GlobalStyles from '../../assets/styles/Global';
import defaultTheme from '../../assets/styles/themes/default';
import Header from '../Header';
import TableCars from '../TableCars';
import Footer from '../Footer';

// Renderização de cada componente dentro de um arquivo
function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Container>
        <Header />
        <TableCars />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
