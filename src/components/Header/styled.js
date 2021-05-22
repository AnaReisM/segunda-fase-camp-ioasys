import styled from 'styled-components';

const mobileSize = '720px';

export const StyledHeader = styled.header`
  width: 100%;
  height: 100px;
  background-color: #fefefe;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 10%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: ${mobileSize}) {
    height: 60px;
  }
`;

export const Logo = styled.img`
  width: 200px;
`;
