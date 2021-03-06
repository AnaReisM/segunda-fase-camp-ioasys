/* eslint-disable react-hooks/exhaustive-deps */
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Pill from '../../components/Pill';
import Input from '../../components/Input';
import {
  Title,
  Container,
  Form,
  Background,
} from '../../components/FormComponents/styled';
import notification from '../Dashboard/notification.png';
import people from '../Dashboard/people.png';
import { PillContainer, Warning } from './styled';
import {
  HeaderButton,
  HeaderButtonText,
  HeaderButtonContainer,
} from '../Dashboard/styled';
import { CheckContainer, CheckUp, CheckDown } from '../Register2/styled';
import Checkbox from '../../components/Checkbox';
import Radio from '../../components/Radio';
import Footer from '../../components/Footer';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';

const Profile = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [crp, setCrp] = useState('');
  const [biography, setBiography] = useState('');
  const [city, setCity] = useState('');
  const [cityRemote, setCityRemote] = useState(false);
  const [blocked, setBlocked] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const id = localStorage.getItem('id');
    const token = localStorage.getItem('token');

    axios
      .get(`https://apicamp.herokuapp.com/api/v1/professionals/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setName(response.data.professional.firstName);
        setLastName(response.data.professional.lastName);
        setEmail(response.data.professional.email);
        setCrp(response.data.professional.crp);
        setBiography(response.data.professional.biography);
        setCityRemote(response.data.professional.remotely);
        setCity(response.data.professional.city);
      })
      .catch(() => {
        logout();
      });
  }, []);

  const submit = (e) => {
    e.preventDefault();

    const id = localStorage.getItem('id');
    const token = localStorage.getItem('token');

    axios
      .patch(
        `https://apicamp.herokuapp.com/api/v1/professionals/${id}`,
        {
          professional: {
            firstName: name,
            lastName,
            email,
            remotely: cityRemote,
            biography,
            city,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then((response) => {
        setBlocked(true);
        toast.success('Altera????es salvas com sucesso', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const deleteAccount = () => {
    const id = localStorage.getItem('id');
    const token = localStorage.getItem('token');
    axios
      .delete(`https://apicamp.herokuapp.com/api/v1/professionals/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        logout();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    history.push('/login');
  };

  return (
    <>
      <Background>
        <Header secondary>
          <HeaderButtonContainer>
            <HeaderButton to="/dashboard">
              <img src={notification} alt="" />
              <HeaderButtonText>Notifica????es</HeaderButtonText>
            </HeaderButton>
            <HeaderButton active="true" to="/profile">
              <img src={people} alt="" />
              <HeaderButtonText>Perfil</HeaderButtonText>
            </HeaderButton>
            <Pill color="#6C8DFF" onClick={logout}>
              Sair
            </Pill>
          </HeaderButtonContainer>
        </Header>
        <Container big>
          <Form onSubmit={submit}>
            <Title>Seu Perfil</Title>
            <Input
              disabled={blocked}
              label="Nome"
              placeholder="Digite aqui seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            ></Input>
            <Input
              disabled={blocked}
              label="Sobrenome"
              placeholder="Digite aqui seu sobrenome"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            ></Input>
            <Input
              disabled={blocked}
              type="email"
              label="E-mail"
              placeholder="Digite aqui seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            ></Input>
            <Input
              disabled
              label="CRP"
              afterLabel={
                <Warning>*o CRP ?? uma informa????o n??o edit??vel</Warning>
              }
              placeholder="Digite aqui seu CRP"
              value={crp}
              required
              type="number"
            ></Input>
            <Input
              disabled={blocked}
              textarea
              label="Biografia"
              placeholder="Fale um pouco sobre voc??, sua biografia ficar?? vis??vel para os pacientes."
              value={biography}
              onChange={(e) => setBiography(e.target.value)}
              required
            ></Input>
            <CheckContainer>
              <CheckUp>
                <Radio
                  disabled={blocked}
                  label="Belo Horizonte"
                  checked={city === 'Belo Horizonte'}
                  onClick={() =>
                    setCity(city === 'Belo Horizonte' ? '' : 'Belo Horizonte')
                  }
                ></Radio>
                <Radio
                  disabled={blocked}
                  label="S??o Paulo"
                  checked={city === 'S??o Paulo'}
                  onClick={() =>
                    setCity(city === 'S??o Paulo' ? '' : 'S??o Paulo')
                  }
                ></Radio>
              </CheckUp>
              <CheckDown>
                <Checkbox
                  disabled={blocked}
                  label="Atendo remotamente"
                  checked={cityRemote}
                  onChange={(e) => setCityRemote(e.target.checked)}
                ></Checkbox>
              </CheckDown>
            </CheckContainer>
            <PillContainer>
              {blocked ? (
                <>
                  <Pill
                    type="button"
                    color="#E46016"
                    onClick={() =>
                      confirmAlert({
                        title: 'Voc?? deseja mesmo excluir sua conta?',
                        buttons: [
                          {
                            label: 'Excluir',
                            onClick: () => deleteAccount(),
                          },
                          {
                            label: 'Cancelar',
                          },
                        ],
                      })
                    }
                  >
                    Excluir Conta
                  </Pill>
                  <Pill
                    type="button"
                    color="#6C8DFF"
                    onClick={(e) => {
                      e.preventDefault();
                      setBlocked(false);
                    }}
                  >
                    Editar Perfil
                  </Pill>
                </>
              ) : (
                <>
                  <Pill
                    type="button"
                    color="#E46016"
                    onClick={() => setBlocked(true)}
                  >
                    Cancelar
                  </Pill>
                  <Pill type="submit" color="#1C8C35">
                    Salvar Altera????es
                  </Pill>
                </>
              )}
            </PillContainer>
          </Form>
        </Container>
        <Footer></Footer>
      </Background>
      <ToastContainer />
    </>
  );
};

export default Profile;
