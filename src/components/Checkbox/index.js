import { StyledCheckbox, Label } from './styled';

const Checkbox = ({ label, checked, onChange, disabled }) => (
  <Label>
    <StyledCheckbox
      type="checkbox"
      checked={checked}
      onChange={onChange}
      disabled={disabled}
    />
    <span>{label}</span>
  </Label>
);

export default Checkbox;
