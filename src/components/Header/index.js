import { StyledHeader, Logo } from './styled';
import { Link } from 'react-router-dom';
import logo from './Vector.png';
import logoWhite from './white.png';

const Header = ({ children, secondary }) => (
  <StyledHeader secondary={secondary}>
    {secondary ? (
      <Link to="/dashboard">
        <Logo src={logoWhite} alt="Logo do consul.t" />
      </Link>
    ) : (
      <Link to="/">
        <Logo src={logo} alt="Logo do consul.t" />
      </Link>
    )}
    <div>{children}</div>
  </StyledHeader>
);

export default Header;
