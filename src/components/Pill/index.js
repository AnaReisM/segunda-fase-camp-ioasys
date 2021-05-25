import { ButtonMenu } from './styled';

const Pill = ({ children, color }) => (
  <ButtonMenu color={color}>{children}</ButtonMenu>
);

export default Pill;
