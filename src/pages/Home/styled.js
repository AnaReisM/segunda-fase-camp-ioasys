import styled from 'styled-components';
import { Link } from 'react-router-dom';

const mobileSize = "720px"

export const Header = styled.header`
  width: 100%;
  height: 100px;
  background-color: #c4c4c4;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 10%;

  @media (max-width: ${mobileSize}) {
    height: 60px;
  }
`;

export const StyledLink = styled(Link)`
  margin-left: 24px;
  color: #000000;
  text-decoration: none;
`;

export const Hero = styled.section`
  width: 100%;
  min-height: 90vh;
  padding: 96px 10%;
  background-color: #e5e5e5;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  @media (max-width: ${mobileSize}) {
    flex-direction: column;
    align-items: center;
  } 
`;

export const Title = styled.h1`
  font-size: 72px;
  font-weight: 400;

  @media (max-width: ${mobileSize}) {
    font-size: 42px;
  }   
`;

export const Text = styled.p`
  font-size: 36px;
  margin-bottom: 20px;
  ${(props) => {
    if (props.centered === true) {
      return 'text-align: center;';
    }
  }}
`;

export const Content = styled.div`
  align-self: center;
`;

export const Button = styled.button`
  width: 230px;
  height: 70px;
  border: none;
  font-size: 36px;
  background-color: #c4c4c4;
  border-radius: 24px;
  margin-left: 12px;

  @media (max-width: ${mobileSize}) {
    display: block;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const SectionText = styled.section`
  width: 100%;
  height: 602px;
  background-color: #c4c4c4;
  padding: 10%;

  @media (max-width: 720px) {
    height: auto;
  }
`;

export const ContentWrapper = styled.div`
  width: 40%;

  @media (max-width: ${mobileSize}) {
    width: 100%;
  } 
`;

export const Description = styled.p`
  margin-bottom: 20px;
`;

export const SectionComments = styled.section`
  width: 100%;
  height: 1000px;
  background-color: #e5e5e5;
  padding: 120px 10%;

  @media (max-width: ${mobileSize}) {
    height: auto;
    width: 100%;
  }
`;

export const CardComments = styled.div`
  width: 360px;
  height: 240px;
  background-color: #c4c4c4;
  border-radius: 12px;
  margin-bottom: 20px;
`;

export const PositionCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 740px;
  margin: 120px auto;

  @media (max-width: ${mobileSize}) {
    width: 100%;
  }
`;

export const Footer = styled.footer`
  width: 100%;
  height: 250px;
  background-color: #c4c4c4;
`;
