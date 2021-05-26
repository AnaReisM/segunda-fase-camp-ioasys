import { ButtonMenu } from './styled';

const Pill = ({ children, color, active, onClick }) => (
  <ButtonMenu color={color} active={active} onClick={onClick}>
    {children}
  </ButtonMenu>
);

export default Pill;
