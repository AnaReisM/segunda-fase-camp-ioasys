import {
  Header,
  StyledLink,
  Hero,
  Title,
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
} from './styled';

const Home = () => (
  <div>
    <Header>
      <StyledLink to="/login">Entrar</StyledLink>
      <StyledLink to="/register">Cadastrar</StyledLink>
    </Header>
    <Hero>
      <Content>
        <Title>
          Headline 1 <br /> linha 2
        </Title>
        <Text>texto akdkfkadjkfa</Text>
      </Content>
      <div>
        <Button>Download</Button>
        <Button>Download</Button>
      </div>
    </Hero>
    <SectionText>
      <ContentWrapper>
        <Text>Como Funciona</Text>
        <Description>
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
        </Description>
      </ContentWrapper>
    </SectionText>
    <SectionComments>
      <Text centered>O que estão dizendo por aí</Text>
      <PositionCard>
        <CardComments></CardComments>
        <CardComments></CardComments>
        <CardComments></CardComments>
        <CardComments></CardComments>
      </PositionCard>
    </SectionComments>
    <Footer></Footer>
  </div>
);

export default Home;
