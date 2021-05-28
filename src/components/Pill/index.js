import { ButtonMenu, Count } from './styled';

const Pill = ({ children, color, active, onClick, type, count }) => (
  <ButtonMenu type={type} color={color} active={active} onClick={onClick}>
    {children}
    {count ? (
      <Count active={active} color={color}>
        {count}
      </Count>
    ) : null}
  </ButtonMenu>
);

export default Pill;
