import axios from 'axios';
import { useLocation, useHistory, Link } from 'react-router-dom';
import { useState } from 'react';
import Header from '../../components/Header';
import { HeaderText } from '../../components/Header/styled';
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
import { Label } from '../../components/Input/styled';
import Checkbox from '../../components/Checkbox';
import { CheckContainer, CheckDown, CheckUp } from './styled';
import Footer from '../../components/Footer';
import Pill from '../../components/Pill';
import { StyledVector } from '../Home/styled';
import Radio from '../../components/Radio';

const Login = () => {
  const [experience, setExperience] = useState('');
  const [biography, setBiography] = useState('');
  const [city, setCity] = useState('');
  const [cityRemote, setCityRemote] = useState(false);
  const [error, setError] = useState(false);

  const history = useHistory();
  const location = useLocation();

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
        city,
        crp: location.state.crp,
        remotely: cityRemote,
        experience,
        biography,
      })
      .then((response) => {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('id', response.data.storedProfessional.id);
        history.push('/dashboard');
      })
      .catch((error) => {
        setError(true);
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
        <Title>Um pouco mais sobre você</Title>
        <Form onSubmit={submit}>
          <Label>Onde você atende?</Label>
          <CheckContainer>
            <CheckUp>
              <Radio
                label="Belo Horizonte"
                checked={city === 'Belo Horizonte'}
                onClick={() =>
                  setCity(city === 'Belo Horizonte' ? '' : 'Belo Horizonte')
                }
              ></Radio>
              <Radio
                label="São Paulo"
                checked={city === 'São Paulo'}
                onClick={() => setCity(city === 'São Paulo' ? '' : 'São Paulo')}
              ></Radio>
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
      <Footer></Footer>
    </Background>
  );
};

export default Login;
