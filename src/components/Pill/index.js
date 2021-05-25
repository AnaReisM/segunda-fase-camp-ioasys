import { ButtonMenu } from './styled';

const Pill = ({ children, color, active }) => (
  <ButtonMenu color={color} active={active}>
    {children}
  </ButtonMenu>
);

export default Pill;
