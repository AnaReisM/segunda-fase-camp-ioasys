import { StyledHeader, Logo } from './styled';
import logo from './Vector.png';

const Header = () => (
  <StyledHeader>
    <Logo src={logo} alt="Logo do consul.t" />
  </StyledHeader>
);

export default Header;
