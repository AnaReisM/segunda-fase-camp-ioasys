import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import Header from '../../components/Header';
import Input from '../../components/Input';
import {
  Title,
  Container,
  Form,
  Button,
  Background,
  Error,
} from '../../components/FormComponents/styled';
import icon from '../../components/FormComponents/Vector.png';
import Footer from '../../components/Footer';
import Pill from '../../components/Pill';
import { HeaderText } from '../../components/Header/styled';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const history = useHistory();

  const submit = (e) => {
    e.preventDefault();

    setError(false);

    axios
      .post('https://apicamp.herokuapp.com/api/v1/auth/signinpro', {
        email,
        password,
      })
      .then((response) => {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('id', response.data.professional.id);
        history.push('/dashboard');
      })
      .catch((error) => {
        setError(true);
      });
  };

  return (
    <>
      <Background>
        <Header>
          <HeaderText>Ainda não tem uma conta?</HeaderText>
          <Link to="/register">
            <Pill color="#6C8DFF">Cadastre-se</Pill>
          </Link>
        </Header>
        <Container>
          <Title>Faça seu Login</Title>
          <Form onSubmit={submit}>
            <Input
              type="email"
              label="E-mail"
              placeholder="Digite aqui seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            ></Input>
            <Input
              label="Senha"
              placeholder="Digite aqui sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required
            ></Input>
            {error ? <Error>Email e/ou senha incorretos.</Error> : null}
            <Button type="submit">
              Entrar <img src={icon} alt="" />
            </Button>
          </Form>
        </Container>
      </Background>
      <Footer></Footer>
    </>
  );
};

export default Login;
