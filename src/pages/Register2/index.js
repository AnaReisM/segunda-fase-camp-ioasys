import axios from 'axios';
import { useLocation } from 'react-router-dom';
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
import { CheckContainer, CheckDown, CheckUp } from './styled';

const Login = () => {
  const [experience, setExperience] = useState('');
  const [biography, setBiography] = useState('');
  const [cityBH, setCityBH] = useState(false);
  const [citySP, setCitySP] = useState(false);
  const [cityRemote, setCityRemote] = useState(false);
  const [error, setError] = useState(false);

  const location = useLocation();
  console.log(location);

  const submit = (e) => {
    e.preventDefault();
    setError(false);

    axios
      .post('https://apicamp.herokuapp.com/api/v1/auth/signuppro', {
        firstName: location.state.name,
        lastName: location.state.lastName,
        email: location.state.email,
        professionalField: 'Cardiologist',
        password: location.state.password,
        city: 'São Paulo',
        crp: location.state.crp,
        remotely: cityRemote,
        experience,
        biography,
      })
      .then((response) => {
        localStorage.setItem('token', response.data.token);
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
              <Checkbox
                label="Belo Horizonte"
                checked={cityBH}
                onChange={(e) => setCityBH(e.target.checked)}
              ></Checkbox>
              <Checkbox
                label="São Paulo"
                checked={citySP}
                onChange={(e) => setCitySP(e.target.checked)}
              ></Checkbox>
            </CheckUp>
            <CheckDown>
              <Checkbox
                label="Atendo remotamente"
                checked={cityRemote}
                onChange={(e) => setCityRemote(e.target.checked)}
              ></Checkbox>
            </CheckDown>
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
            value={biography}
            onChange={(e) => setBiography(e.target.value)}
            required
          ></Input>
          {error ? (
            <Error>
              Ocorreu um erro no cadastro. Tente novamente mais tarde.
            </Error>
          ) : null}
          <Button type="submit">Criar</Button>
        </Form>
      </Container>
    </Background>
  );
};

export default Login;
