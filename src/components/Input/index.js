import React from 'react';
import { Container, Label, InputField, TextArea } from './styled';

function Input({
  label,
  value,
  onChange,
  type,
  placeholder,
  required,
  textarea,
  minLength,
}) {
  return (
    <Container>
      <Label htmlFor={label}>{label}</Label>
      {textarea ? (
        <TextArea
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
          minLength={minLength}
        />
      )}
    </Container>
  );
}

export default Input;
