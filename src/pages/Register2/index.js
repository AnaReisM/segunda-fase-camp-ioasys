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
import { Label } from '../../components/Input/styled';
import Checkbox from '../../components/Checkbox';
import { CheckContainer, CheckUp } from './styled';

const Login = () => {
  const [experience, setExperience] = useState('');
  const [biografia, setBiografia] = useState('');
  const [error, setError] = useState(false);

  const submit = (e) => {
    e.preventDefault();

    setError(false);
    axios
      .post('https://apicamp.herokuapp.com/api/v1/auth/signin', {
        email: experience,
        password: biografia,
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
        <Title>Um pouco mais sobre você</Title>
        <Form onSubmit={submit}>
          <Label>Onde você atende?</Label>
          <CheckContainer>
            <CheckUp>
              <Checkbox label="Belo Horizonte"></Checkbox>
              <Checkbox label="São Paulo"></Checkbox>
            </CheckUp>
            <Checkbox label="Atendo remotamente"></Checkbox>
          </CheckContainer>
          <Input
            textarea
            label="Experiência"
            placeholder="Conte - nos mais sobre sua experiência trabalhando com pessoas trans e porque você quer ser parceiro da consul.t"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            required
          ></Input>
          <Input
            textarea
            label="Biografia"
            placeholder="Fale um pouco sobre você, sua biografia ficará visível para os pacientes."
            value={biografia}
            onChange={(e) => setBiografia(e.target.value)}
            required
          ></Input>
          {error ? <Error>Email e/ou senha incorretos.</Error> : null}
          <Button type="submit">Criar</Button>
        </Form>
      </Container>
    </Background>
  );
};

export default Login;
