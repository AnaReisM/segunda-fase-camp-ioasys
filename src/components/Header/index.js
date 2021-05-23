import { StyledHeader, Logo } from './styled';
import { Link } from 'react-router-dom';
import logo from './Vector.png';

const Header = ({ children }) => (
  <StyledHeader>
    <Link to="/">
      <Logo src={logo} alt="Logo do consul.t" />
    </Link>
    <div>{children}</div>
  </StyledHeader>
);

export default Header;
