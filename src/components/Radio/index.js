import { StyledRadio, Label } from './styled';

const Radio = ({ label, checked, onClick, disabled }) => (
  <Label>
    <StyledRadio
      type="radio"
      checked={checked}
      onClick={onClick}
      disabled={disabled}
    />
    <span>{label}</span>
  </Label>
);

export default Radio;
