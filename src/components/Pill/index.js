import { ButtonMenu } from './styled';

const Pill = ({ children, color, active, onClick, type }) => (
  <ButtonMenu type={type} color={color} active={active} onClick={onClick}>
    {children}
  </ButtonMenu>
);

export default Pill;
