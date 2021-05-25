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

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const submit = (e) => {
    e.preventDefault();

    setError(false);

    axios
      .post('https://apicamp.herokuapp.com/api/v1/auth/signinpro', {
        email,
        password,
      })
      .then((response) => {
        console.log(response.data.token);
        localStorage.setItem('token', response.data.token);
        // history.push('/dashboard');
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  };

  return (
    <Background>
      <Header></Header>
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
  );
};

export default Login;
