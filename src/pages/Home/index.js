import {
  StyledLink,
  Hero,
  Title,
  HeroText,
  Text,
  Button,
  Content,
  SectionText,
  ContentWrapper,
  Description,
  SectionComments,
  CardComments,
  PositionCard,
  Background,
  PhoneContainer,
  PhoneImg,
  StyledVector,
  PillMargin,
} from './styled';
import Header from '../../components/Header';
import google from './googleplay.png';
import apple from './appstore.png';
import phone from './mockup phone.png';
import Pill from '../../components/Pill';
import Vector from '../../components/FormComponents/Vector.png';

const Home = () => (
  <Background>
    <Header>
      <PillMargin>
        <Pill color="#6C8DFF">Cadastre-se</Pill>
        <Pill color="#A864FF" active>
          Login <StyledVector src={Vector} alt="" />
        </Pill>
      </PillMargin>
    </Header>
    <Hero>
      <Content>
        <Title>Encontre profissionais que você pode confiar</Title>
        <HeroText>
          A consul.t foi desenvolvida pensando em todas as pessoas que sentem
          algum tipo de receio quando precisam agendar uma consulta, aqui você
          pode ter certeza que terá sua identidade respeitada{' '}
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
        <Text>Como a consul.t funciona?</Text>
        <Description>
          Profissionais da área de psicologia podem se cadastrar no nosso site,
          o cadastro passará por uma análise e, se aprovado, estará listado no
          nosso aplicativo. <br /> Se você busca uma consulta psicológica, você
          encontrará no nosso app a lista de profissionais e lá você pode
          solicitar uma consulta. Depois é só aguardar que o profissional
          entrará em contato com você! <br /> Após a consulta você tem a opção
          de mandar um feedback pra gente, queremos sempre melhorar!
        </Description>
      </ContentWrapper>
    </SectionText>
    {/* <SectionComments>
      <Text centered>O que estão dizendo por aí</Text>
      <PositionCard>
        <CardComments></CardComments>
        <CardComments></CardComments>
        <CardComments></CardComments>
        <CardComments></CardComments>
      </PositionCard>
    </SectionComments> */}
  </Background>
);

export default Home;
