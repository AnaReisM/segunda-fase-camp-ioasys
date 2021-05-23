import React from 'react';
import { Container, Label, InputField } from './styled';

function Input({ label, value, onChange, type, placeholder, required }) {
  return (
    <Container>
      <Label htmlFor={label}>{label}</Label>
      <InputField
        id={label}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    </Container>
  );
}

export default Input;
