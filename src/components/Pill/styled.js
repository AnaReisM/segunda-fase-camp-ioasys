import styled from 'styled-components';

export const ButtonMenu = styled.button`
  cursor: pointer;
  border: 1px solid ${(props) => props.color};
  height: 36px;
  min-width: 160px;
  font-size: 16px;
  border-radius: 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.active ? '#fefefe' : props.color)};
  background-color: ${(props) => (props.active ? props.color : '#FEFEFE')};
  filter: ${(props) =>
    !props.active ? 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))' : ''};
`;
