// Importação de estilos
import { Container, Overlay } from './styles';

// Exportação do componente Footer
export default function Footer() {
  return (
    <Container>
      <Overlay>
        <span>Mustang</span>
        <p>
          O Ford Mustang é um automóvel desportivo produzido pela
          Ford Motor Company. O carro foi apresentado ao público em
          17 de abril de 1964 durante a New York Worlds Fair. O
          Mustang, apesar de ter sofrido grandes alterações ao longo
          dos anos é a mais antiga linha de automóveis da Ford.
        </p>
        <button type="button">Ver carros</button>
      </Overlay>
    </Container>
  );
}
