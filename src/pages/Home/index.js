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
  Footer,
  Background,
  PhoneContainer,
  PhoneImg,
} from './styled';
import Header from '../../components/Header';
import google from './googleplay.png';
import apple from './appstore.png';
import phone from './mockup phone.png';

const Home = () => (
  <Background>
    <Header>
      <StyledLink to="/login">Entrar</StyledLink>
      <StyledLink to="/register">Cadastrar</StyledLink>
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
        {/* <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
          euismod ultrices felis mattis. Ac pellentesque eu purus duis turpis
          adipiscing dolor ac fermentum leo vitae in. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Viverra euismod ultrices felis
          mattis. Ac pellentesque eu purus duis turpis adipiscing dolor ac
          fermentum leo vitae in.
        </Description>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
          euismod ultrices felis mattis. Ac pellentesque eu purus duis turpis
          adipiscing dolor ac fermentum leo vitae in. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Viverra euismod ultrices felis
          mattis. Ac pellentesque eu purus duis turpis adipiscing dolor ac
          fermentum leo vitae in.
        </Description> */}
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
    <Footer></Footer>
  </Background>
);

export default Home;
