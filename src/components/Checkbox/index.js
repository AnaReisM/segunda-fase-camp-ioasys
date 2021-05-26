import { StyledCheckbox, Label } from './styled';

const Checkbox = ({ label, checked, onChange }) => (
  <Label>
    <StyledCheckbox type="checkbox" checked={checked} onChange={onChange} />
    <span>{label}</span>
  </Label>
);

export default Checkbox;
