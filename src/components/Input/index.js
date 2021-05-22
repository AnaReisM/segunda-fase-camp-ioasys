import React from 'react';
import { Container, Label, InputField } from './styled';

function Input({ label, value, onChange, type, placeholder }) {
  return (
    <Container>
      <Label for={label}>{label}</Label>
      <InputField
        id={label}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </Container>
  );
}

export default Input;
