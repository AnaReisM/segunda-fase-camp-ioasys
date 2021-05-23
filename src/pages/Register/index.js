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

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [crp, setCrp] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [error, setError] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setError(false);
    setErrorPassword(false);

    if (password !== password2) {
      setErrorPassword(true);
      return;
    }

    axios
      .post('https://apicamp.herokuapp.com/api/v1/auth/signup', {
        email,
        name,
        password,
      })
      .then((response) => {
        console.log(response);
        // localStorage.setItem('token', response.headers.authorization);
        // history.push('/books');
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
        <Title>Crie sua conta</Title>
        <Form onSubmit={submit}>
          <Input
            label="Nome e Sobrenome"
            placeholder="Digite aqui seu nome e sobrenome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          ></Input>
          <Input
            type="email"
            label="E-mail"
            placeholder="Digite aqui seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          ></Input>
          <Input
            label="CRP"
            placeholder="Digite aqui seu CRP"
            value={crp}
            onChange={(e) => setCrp(e.target.value)}
            required
            type="number"
          ></Input>
          <Input
            label="Crie uma Senha"
            placeholder="Digite aqui sua senha (min. 8 caracteres)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
          ></Input>
          <Input
            label="Confirme sua Senha"
            placeholder="Digite novamente sua senha (min. 8 caracteres)"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
            required
            type="password"
          ></Input>
          {errorPassword ? (
            <Error>Confirmação de senha incorreta.</Error>
          ) : null}
          {error ? <Error>Email e/ou senha incorretos.</Error> : null}
          <Button type="submit">
            Próximo <img src={icon} alt="" />
          </Button>
        </Form>
      </Container>
    </Background>
  );
};

export default Register;
