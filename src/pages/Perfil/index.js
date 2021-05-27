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
import {
  PillContainer,
  HeaderButton,
  HeaderButtonText,
  HeaderButtonContainer,
} from './styled';
import { CheckContainer, CheckUp, CheckDown } from '../Register2/styled';
import Checkbox from '../../components/Checkbox';
import Footer from '../../components/Footer';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';

const Perfil = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [crp, setCrp] = useState('');
  const [biography, setBiography] = useState('');
  const [cityBH, setCityBH] = useState(false);
  const [citySP, setCitySP] = useState(false);
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
        toast.success('Alterações salvas com sucesso', {
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
        console.log(error);
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
        console.log(error);
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
              <HeaderButtonText>Notificações</HeaderButtonText>
            </HeaderButton>
            <HeaderButton active to="/perfil">
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
              disabled={blocked}
              label="CRP"
              placeholder="Digite aqui seu CRP"
              value={crp}
              onChange={(e) => setCrp(e.target.value)}
              required
              type="number"
            ></Input>
            <Input
              disabled={blocked}
              textarea
              label="Biografia"
              placeholder="Fale um pouco sobre você, sua biografia ficará visível para os pacientes."
              value={biography}
              onChange={(e) => setBiography(e.target.value)}
              required
            ></Input>
            <CheckContainer>
              <CheckUp>
                <Checkbox
                  disabled={blocked}
                  label="Belo Horizonte"
                  checked={cityBH}
                  onChange={(e) => setCityBH(e.target.checked)}
                ></Checkbox>
                <Checkbox
                  disabled={blocked}
                  label="São Paulo"
                  checked={citySP}
                  onChange={(e) => setCitySP(e.target.checked)}
                ></Checkbox>
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
                        title: 'Você deseja mesmo excluir sua conta?',
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
                    Salvar Alterações
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

export default Perfil;
