import { StyledCheckbox } from './styled';

const Checkbox = ({ label }) => (
  <label>
    <StyledCheckbox type="checkbox" />
    <span>{label}</span>
  </label>
);

export default Checkbox;
