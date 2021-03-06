import styled from 'styled-components';

export const Container = styled.div``;

export const Label = styled.label`
  font-size: 18px;
  color: #2e2e2e;
  margin-bottom: 10px;
  display: block;
  padding-left: 10px;
`;

export const InputField = styled.input`
  width: 100%;
  height: 65px;
  border: none;
  color: #2e2e2e;
  padding: 0 20px;
  font-size: 18px;
  background: #e1e1e1;
  border-radius: 16px;
  margin-bottom: 60px;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    -moz-appearance: textfield;
    margin: 0;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  background: #e1e1e1;
  border-radius: 16px;
  margin-bottom: 60px;
  color: #2e2e2e;
  border: none;
  padding: 20px;
  font-size: 18px;
`;
