import {
  Name,
  Strong,
  BackgroundCard,
  Content,
  Button,
  ButtonContainer,
} from './styled';

const Card = ({ name, lastName, phone, email, type, date }) => (
  <BackgroundCard>
    <Name>
      {name} {lastName}
    </Name>
    <Content>
      Telefone: <Strong>{phone}</Strong>
    </Content>
    <Content>
      E-mail: <Strong>{email}</Strong>
    </Content>
    <Content>
      Data: <Strong>{date}</Strong>
    </Content>
    {type === 'pending' && (
      <ButtonContainer>
        <Button color="#e4b716">Rejeitar</Button>
        <Button color="#62DF7E">Confirmar</Button>
      </ButtonContainer>
    )}
    {type === 'confirmed' && (
      <ButtonContainer>
        <Button color="#E46016">Cancelar</Button>
        <Button color="#62DF7E">Realizada</Button>
      </ButtonContainer>
    )}
  </BackgroundCard>
);

export default Card;
