import { Container, Image } from './styled';
import empty from './empty.png';

const Empty = () => (
  <Container>
    <Image src={empty} alt="Nenhum item encontrado"></Image>
    <h2>Parece que não há nada aqui....</h2>
    <p>
      Assim que suas primeiras consultas começarem a acontecer, vamos
      adicioná-las aqui
    </p>
  </Container>
);

export default Empty;
