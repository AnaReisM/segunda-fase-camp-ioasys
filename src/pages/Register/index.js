import axios from 'axios';
import { useState } from 'react';
import Header from '../../components/Header';
import Input from '../../components/Input';
import { Title, Container, Form, Button, Background, Error } from './styled';
import icon from './Vector.png';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [crp, setCrp] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [error, setError] = useState(false);

  const submit = () => {
    setError(false);
    axios
      .post('https://apicamp.herokuapp.com/api/v1/auth/signin', {
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
        <Form>
          <Input
            label="Nome e Sobrenome"
            placeholder="Digite aqui seu nome e sobrenome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Input>
          <Input
            label="E-mail"
            placeholder="Digite aqui seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Input>
          <Input
            label="CRP"
            placeholder="Digite aqui seu CRP"
            value={crp}
            onChange={(e) => setCrp(e.target.value)}
            type="number"
          ></Input>
          <Input
            label="Crie uma Senha"
            placeholder="Digite aqui sua senha (min. 8 caracteres)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          ></Input>
          <Input
            label="Confirme sua Senha"
            placeholder="Digite novamente sua senha (min. 8 caracteres)"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
            type="password"
          ></Input>
          {error ? <Error>Email e/ou senha incorretos.</Error> : null}
          <Button onClick={submit}>
            Próximo <img src={icon} alt="" />
          </Button>
        </Form>
      </Container>
    </Background>
  );
};

export default Register;
