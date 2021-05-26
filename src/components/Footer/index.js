import { Container, Informations, Links } from './styled';
import logo from '../Header/white.png';

const Footer = () => (
  <Container>
    <div>
      <img src={logo} alt="" width="190px" />
      <Informations>
        <p>contato@consult.com</p>
        <p>(31) 3344 - 5566</p>
        <p>Rua João da Silva, 48 - Belo Horizonte</p>
      </Informations>
    </div>
    <div>
      <Links>
        <li>
          <a href="#">Conteúdos Informativos</a>
        </li>
        <li>
          <a href="#">Política de Privacidade</a>
        </li>
        <li>
          <a href="#">Termos de Uso</a>
        </li>
      </Links>
    </div>
  </Container>
);

export default Footer;
