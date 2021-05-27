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
  disabled,
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
          disabled={disabled}
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
          disabled={disabled}
        />
      )}
    </Container>
  );
}

export default Input;
