import styled from 'styled-components';
import { Link } from 'react-router-dom';

const mobileSize = '720px';

export const HeaderButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderButton = styled.div`
  width: 160px;
  height: 100px;
  background: ${(props) => (props.active ? '#8d33ff' : 'transparent')};
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Container = styled.div`
  width: 90%;
  margin: 70px auto;
  border-radius: 24px;
  min-height: 70vh;
  background-color: #d1dbff;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
  padding: 24px;
`;

export const PillContainer = styled.div`
  button {
    margin-right: 32px;
  }
`;

export const HeaderButtonText = styled.p`
  color: #fefefe;
`;
