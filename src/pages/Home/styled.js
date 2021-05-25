import styled from 'styled-components';
import { Link } from 'react-router-dom';
import background from './rectangle.png';

const mobileSize = '720px';

export const Background = styled.div`
  background-image: url('/Rectangle 2.png');
  background-repeat: no-repeat;
  background-position: top right;
  background-size: 500px;
  min-height: 100vh;
`;

export const Header = styled.header`
  width: 100%;
  height: 100px;
  background-color: #fefefe;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 10%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: ${mobileSize}) {
    height: 60px;
  }
`;

export const StyledVector = styled.img`
  height: 14px;
  margin: 0 8px;
`;

export const PillMargin = styled.div`
  button:first-child {
    margin-right: 30px;
  }

  button {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
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
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  @media (max-width: ${mobileSize}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-size: 55px;
  font-weight: 400;

  @media (max-width: ${mobileSize}) {
    font-size: 42px;
  }
`;

export const HeroText = styled.p`
  font-size: 30px;
  margin-bottom: 20px;
  margin-top: 40px;
`;

export const Text = styled.p`
  font-size: 36px;
  margin-bottom: 20px;
  color: #2e2e2e;

  ${(props) => {
    if (props.centered === true) {
      return 'text-align: center;';
    }
  }}
`;

export const Content = styled.div`
  align-self: center;
  width: 50%;

  @media (max-width: ${mobileSize}) {
    width: 100%;
  }
`;

export const PhoneContainer = styled.div`
  width: 50%;
  text-align: center;

  @media (max-width: ${mobileSize}) {
    width: 100%;
  }
`;

export const PhoneImg = styled.img`
  margin-bottom: 40px;
`;

export const Button = styled.img`
  width: 200px;
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
  padding: 10%;
  background-image: url('${background}');
  background-size: cover;

  @media (max-width: 720px) {
    height: auto;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: 820px;

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
