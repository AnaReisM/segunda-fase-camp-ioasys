import React from 'react';
import { Container, Label, InputField } from './styled';

function Input({
  label,
  value,
  onChange,
  type,
  placeholder,
  required,
  textarea,
}) {
  return (
    <Container>
      <Label htmlFor={label}>{label}</Label>
      {textarea ? (
        <textarea
          rows="5"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
        />
      ) : (
        <InputField
          id={label}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
        />
      )}
    </Container>
  );
}

export default Input;
