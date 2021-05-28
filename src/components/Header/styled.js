import styled from 'styled-components';

const mobileSize = '720px';

export const StyledHeader = styled.header`
  width: 100%;
  height: 100px;
  background-color: ${(props) => (props.secondary ? '#A864FF' : '#fefefe')};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  a {
    text-decoration: none;
  }

  @media (max-width: ${mobileSize}) {
    height: auto;
    flex-direction: column;
    padding: 10px 10%;
  }
`;

export const Logo = styled.img`
  width: 300px;
`;

export const HeaderText = styled.span`
  font-weight: bold;
  margin-right: 30px;
  color: #2e2e2e;
`;
