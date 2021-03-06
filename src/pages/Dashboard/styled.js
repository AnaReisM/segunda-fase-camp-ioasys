import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { mobileSize } from '../../screenSizes';

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

  @media (max-width: ${mobileSize}) {
    width: 90px;
  }
`;

export const Container = styled.div`
  width: 90%;
  margin: 70px auto;
  border-radius: 24px;
  min-height: 70vh;
  background-color: #d1dbff;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
  padding: 24px;

  @media (max-width: ${mobileSize}) {
  }
`;

export const PillContainer = styled.div`
  button {
    margin-right: 32px;
  }
`;

export const HeaderButtonText = styled.p`
  color: #fefefe;
`;

export const Message = styled.div`
  background: #b7f0c4;
  border: 1px solid #62df7e;
  border-radius: 8px;
  padding: 24px;
  margin-left: 24px;
  margin-right: 73px;
  margin-top: 40px;

  @media (max-width: ${mobileSize}) {
    margin: 5px;
  }
`;

export const Title = styled.h3`
  margin-bottom: 10px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Button = styled.button`
  background: ${(props) => props.color};
  border: 2px solid ${(props) => props.color};
  border-radius: 24px;
  font-size: 18px;
  padding: 5px 25px;
  color: #fefefe;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
