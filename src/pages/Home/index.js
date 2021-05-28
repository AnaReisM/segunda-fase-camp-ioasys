import {
  Hero,
  Title,
  HeroText,
  Text,
  Button,
  Content,
  SectionText,
  ContentWrapper,
  Description,
  Background,
  PhoneContainer,
  PhoneImg,
  StyledVector,
  PillMargin,
  StyledLink,
  Faq,
  Quest,
  TitleFaq,
  Answers,
} from './styled';
import Header from '../../components/Header';
import google from './googleplay.png';
import apple from './appstore.png';
import phone from './mockup phone.png';
import Pill from '../../components/Pill';
import Vector from '../../components/FormComponents/Vector.png';
import Footer from '../../components/Footer';
import { HeaderText } from '../../components/Header/styled';

const Home = () => (
  <Background>
    <Header>
      <PillMargin>
        <HeaderText>Para profissionais</HeaderText>
        <StyledLink to="/register">
          <Pill color="#6C8DFF">Cadastre-se</Pill>
        </StyledLink>
        <StyledLink to="/login">
          <Pill color="#A864FF" active>
            Login <StyledVector src={Vector} alt="" />
          </Pill>
        </StyledLink>
      </PillMargin>
    </Header>
    <Hero>
      <Content>
        <Title>Encontre profissionais que você pode confiar</Title>
        <HeroText>
          No aplicativo da consul.t estão listados os melhores profissionais
          para atender pessoas trans, pessoas que compactuam com os ideais de
          respeito, diversidade e dignidade para todos.{' '}
        </HeroText>
      </Content>
      <PhoneContainer>
        <PhoneImg src={phone} alt="" />
        <div>
          <a
            href="https://www.apple.com/br/app-store/"
            target="_blank"
            rel="noreferrer"
          >
            <Button src={apple}></Button>
          </a>
          <a href="https://play.google.com/" target="_blank" rel="noreferrer">
            <Button src={google}></Button>
          </a>
        </div>
      </PhoneContainer>
    </Hero>
    <SectionText>
      <ContentWrapper>
        <Text>
          <strong>Como a consul.t funciona?</strong>
        </Text>
        <Description>
          <p>
            Profissionais da área de psicologia podem se cadastrar no nosso
            site, o cadastro passará por uma análise e, se aprovado, estará
            listado no nosso aplicativo.
          </p>{' '}
          <p>
            Se você busca uma consulta psicológica, você encontrará no nosso app
            a lista de profissionais e lá você pode solicitar uma consulta.
            Depois é só aguardar que o profissional entrará em contato com você!
          </p>{' '}
          <p>
            Após a consulta você tem a opção de mandar um feedback pra gente,
            queremos sempre melhorar!
          </p>
        </Description>
      </ContentWrapper>
    </SectionText>
    <Faq>
      <TitleFaq>Perguntas Frequentes</TitleFaq>
      <Quest>Não tenho condições para me consultar, o que eu faço?</Quest>
      <Answers>
        Estamos estudando a melhor forma de oferecer consultas a preço social,
        depois de se cadastrar no aplicativo, mande um e-mail para
        <b> contato@consult.com</b> com seu nome, telefone e assunto “consulta
        social”.
      </Answers>
      <Quest>O profissional não entrou em contato comigo, como proceder?</Quest>
      <Answers>
        O profissional, após solicitado, tem o período de 1 dia útil para mudar
        o status da consulta, se não houver a mudança, a solicitação será
        cancelada.
      </Answers>
      <Quest>Quais profissionais encontro no app da consul.t?</Quest>
      <Answers>
        Por enquanto, estamos apenas aceitando cadastro de profissionais da área
        de psicologia. Em breve, expandiremos para todos os profissionais da
        área da saúde.
      </Answers>
    </Faq>
    <Footer></Footer>
  </Background>
);

export default Home;
