import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PillContainer = styled.div`
  button {
    margin-right: 32px;
  }
`;

export const HeaderButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderButton = styled(Link)`
  width: 160px;
  height: 100px;
  background: ${(props) => (props.active ? '#8d33ff' : 'transparent')};
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-decoration: none;
`;

export const HeaderButtonText = styled.p`
  color: #fefefe;
`;
