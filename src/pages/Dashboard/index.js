/* eslint-disable react-hooks/exhaustive-deps */
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
  Message,
  Title,
  CardContainer,
} from './styled';
import notification from './notification.png';
import people from './people.png';
import Card from '../../components/Card';
import Footer from '../../components/Footer';
import { useState, useEffect } from 'react';
import axios from 'axios';
import format from 'date-fns/format';
import Empty from '../../components/Empty';

const Dashboard = () => {
  const [status, setStatus] = useState('pending');
  const [items, setItems] = useState([]);
  const history = useHistory();

  const filteredItems = items.filter((item) => item.status === status);
  const pendingItems = items.filter((item) => item.status === 'pending').length;

  useEffect(() => {
    const id = localStorage.getItem('id');
    const token = localStorage.getItem('token');

    axios
      .get(
        `https://apicamp.herokuapp.com/api/v1/professionals/${id}/consultations`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then((response) => {
        setItems(response.data.data);
      })
      .catch(() => {
        logout();
      });
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    history.push('/login');
  };

  return (
    <Background>
      <Header secondary>
        <HeaderButtonContainer>
          <HeaderButton active="true" to="/dashboard">
            <img src={notification} alt="" />
            <HeaderButtonText>Notificações</HeaderButtonText>
          </HeaderButton>
          <HeaderButton to="/profile">
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
          <Pill
            color="#A864FF"
            onClick={() => setStatus('pending')}
            active={status === 'pending'}
            count={pendingItems}
          >
            Pendentes
          </Pill>
          <Pill
            color="#8DE8A1"
            onClick={() => setStatus('confirmed')}
            active={status === 'confirmed'}
          >
            Confirmadas
          </Pill>
          <Pill
            color="#E4B716"
            onClick={() => setStatus('recused')}
            active={status === 'recused'}
          >
            Rejeitadas
          </Pill>
          <Pill
            color="#E46016"
            onClick={() => setStatus('canceled')}
            active={status === 'canceled'}
          >
            Canceladas
          </Pill>
          <Pill
            color="#3864FF"
            onClick={() => setStatus('concluded')}
            active={status === 'concluded'}
          >
            Concluídas
          </Pill>
        </PillContainer>
        {items.some((item) => item.status === 'pending') && (
          <Message>
            <Title>Você tem solicitações pendentes</Title>
            <p>
              Por favor, confirme ou rejeite as solicitações pendentes o mais
              rápido possível. Não se esqueça de entrar em contato com os
              pacientes que já confirmaram a consulta!
            </p>
          </Message>
        )}
        <CardContainer>
          {filteredItems.length === 0 ? (
            <Empty></Empty>
          ) : (
            filteredItems.map((item) => (
              <Card
                key={item.id}
                name={item.user.firstName}
                lastName={item.user.lastName}
                phone={item.user.telephone}
                email={item.user.email}
                date={format(new Date(item.createdAt), 'dd/MM/yyyy')}
                type={item.status}
              ></Card>
            ))
          )}
        </CardContainer>
      </Container>
      <Footer></Footer>
    </Background>
  );
};

export default Dashboard;
