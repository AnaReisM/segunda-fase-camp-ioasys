import { useHistory } from 'react-router-dom';
import Pill from '../../components/Pill';
import Header from '../../components/Header';
import { Background } from '../../components/FormComponents/styled';
import {
  HeaderButton,
  HeaderButtonContainer,
  Container,
  PillContainer,
  HeaderButtonText,
} from './styled';
import notification from './notification.png';
import people from './people.png';

const Dashboard = () => {
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem('token');
    history.push('/login');
  };

  return (
    <Background>
      <Header secondary>
        <HeaderButtonContainer>
          <HeaderButton active>
            <img src={notification} alt="" />
            <HeaderButtonText>Notificações</HeaderButtonText>
          </HeaderButton>
          <HeaderButton>
            <img src={people} alt="" />
            <HeaderButtonText>Perfil</HeaderButtonText>
          </HeaderButton>
          <Pill color="#6C8DFF" onClick={logout}>
            Sair
          </Pill>
        </HeaderButtonContainer>
      </Header>
      <Container>
        <PillContainer>
          <Pill color="#6C8DFF">Pendentes</Pill>
          <Pill color="#8DE8A1">Confirmadas</Pill>
          <Pill color="#E4B716">Rejeitadas</Pill>
          <Pill color="#E46016">Canceladas</Pill>
        </PillContainer>
      </Container>
    </Background>
  );
};

export default Dashboard;
