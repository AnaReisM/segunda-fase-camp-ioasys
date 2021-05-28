import styled from 'styled-components';

export const Name = styled.p`
  font-weight: 800;
  margin-bottom: 10px;
  font-size: 18px;
`;

export const Strong = styled.strong`
  font-weight: 700;
`;

export const BackgroundCard = styled.div`
  width: 315px;
  padding: 20px;
  background: #fefefe;
  border: 1px solid #7000ff;
  border-radius: 30px;
  margin: 30px;
`;

export const Content = styled.p`
  margin-bottom: 10px;
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
