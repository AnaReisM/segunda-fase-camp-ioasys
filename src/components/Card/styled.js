import styled from 'styled-components';
import { mobileSize } from '../../screenSizes';

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

  @media (max-width: ${mobileSize}) {
    margin: 20px 0 0 0;
    width: 100%;
  }
`;

export const Content = styled.p`
  margin-bottom: 10px;
`;
