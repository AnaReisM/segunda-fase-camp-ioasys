import { useHistory, Link } from 'react-router-dom';
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
import { HeaderText } from '../../components/Header/styled';
import Pill from '../../components/Pill';
import { StyledVector } from '../Home/styled';

const Register = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [crp, setCrp] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [errorPassword, setErrorPassword] = useState(false);

  const history = useHistory();

  const submit = (e) => {
    e.preventDefault();
    setErrorPassword(false);

    if (password !== password2) {
      setErrorPassword(true);
      return;
    }
    history.push('/register2', {
      name,
      lastName,
      email,
      crp,
      password,
    });
  };

  return (
    <Background>
      <Header>
        <HeaderText>Já tem uma conta?</HeaderText>
        <Link to="/login">
          <Pill color="#A864FF" active>
            Login
            <StyledVector src={icon} alt="" />
          </Pill>
        </Link>
      </Header>
      <Container>
        <Title>Crie sua conta</Title>
        <Form onSubmit={submit}>
          <Input
            label="Nome"
            placeholder="Digite aqui seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          ></Input>
          <Input
            label="Sobrenome"
            placeholder="Digite aqui seu sobrenome"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
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
            minLength="8"
          ></Input>
          <Input
            label="Confirme sua Senha"
            placeholder="Digite novamente sua senha (min. 8 caracteres)"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
            required
            type="password"
            errorPassword
            minLength="8"
          ></Input>
          {errorPassword ? (
            <Error>Confirmação de senha incorreta.</Error>
          ) : null}
          <Button type="submit">
            Próximo <img src={icon} alt="" />
          </Button>
        </Form>
      </Container>
      <Footer></Footer>
    </Background>
  );
};

export default Register;
