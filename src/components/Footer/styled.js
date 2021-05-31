import styled from 'styled-components';
import { mobileSize } from '../../screenSizes';

export const Container = styled.div`
  width: 100%;
  background-color: #8d33ff;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 26px 5%;

  a,
  p {
    display: block;
    margin-top: 10px;
    color: #e1e1e1;
  }
  @media (max-width: ${mobileSize}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Informations = styled.div`
  color: #e1e1e1;
`;

export const Links = styled.ul`
  list-style: none;
`;
