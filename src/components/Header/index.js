import { StyledHeader, Logo } from './styled';
import { Link } from 'react-router-dom';
import logo from './Vector.png';
import logoWhite from './white.png';

const Header = ({ children, secondary }) => (
  <StyledHeader secondary={secondary}>
    <Link to="/">
      <Logo src={secondary ? logoWhite : logo} alt="Logo do consul.t" />
    </Link>
    <div>{children}</div>
  </StyledHeader>
);

export default Header;
