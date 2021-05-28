import { Name, Strong, BackgroundCard, Content } from './styled';

const Card = ({ name, lastName, phone, email, date, buttons }) => (
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
    {buttons}
  </BackgroundCard>
);

export default Card;
