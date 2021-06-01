import styled from 'styled-components';
import { Link } from 'react-router-dom';
import background from './rectangle.png';
import backgroundMobile from './backgroundMobile.png';
import { mobileSize } from '../../screenSizes';
import backgroundMobile2 from './backgroundMobile2.png';

export const Background = styled.div`
  background-image: url('/Rectangle 2.png');
  background-repeat: no-repeat;
  background-position: top right;
  background-size: 500px;
  min-height: 100vh;

  @media (max-width: ${mobileSize}) {
    background-image: url('${backgroundMobile2}');
    background-position: 40% 7%;
    background-size: 450px;
  }
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
  button {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    @media (max-width: ${mobileSize}) {
      margin: 0 20px;
    }
  }

  @media (max-width: ${mobileSize}) {
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  margin-left: 30px;
  @media (max-width: ${mobileSize}) {
    margin-top: 10px;
    margin-left: 0px;
  }
`;

export const Hero = styled.section`
  width: 100%;
  min-height: 90vh;
  padding: 96px 10%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  @media (max-width: ${mobileSize}) {
    align-items: center;
    padding: 40px 10px;
  }
`;

export const Title = styled.h1`
  font-size: 55px;
  font-weight: 400;

  @media (max-width: ${mobileSize}) {
    font-size: 20px;
    font-weight: bold;
    color: #fefefe;
  }
`;

export const HeroText = styled.p`
  font-size: 30px;
  margin-bottom: 20px;
  margin-top: 40px;

  @media (max-width: ${mobileSize}) {
    font-size: 18px;
    color: #fefefe;
  }
`;

export const Text = styled.p`
  font-size: 36px;
  margin-bottom: 25px;
  color: #2e2e2e;

  ${(props) => {
    if (props.centered === true) {
      return 'text-align: center;';
    }
  }}

  @media (max-width: ${mobileSize}) {
    color: #fefefe;
  }
`;

export const Content = styled.div`
  align-self: center;
  width: 50%;

  @media (max-width: ${mobileSize}) {
    width: 100%;
    margin-right: 10px;
  }
`;

export const PhoneContainer = styled.div`
  width: 50%;
  text-align: center;

  @media (max-width: ${mobileSize}) {
    width: 70%;
  }
`;

export const PhoneImg = styled.img`
  margin-bottom: 40px;
  max-width: 100%;

  @media (max-width: ${mobileSize}) {
    margin-bottom: 20px;
  }
`;

export const Button = styled.img`
  max-width: 100%;
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
  background-image: url('${background}');
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 720px) {
    height: auto;
    background-image: url('${backgroundMobile}');
    margin-top: 140px;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  background: #fefefe;
  box-shadow: 0px 8px 4px rgba(0, 0, 0, 0.5);
  border-radius: 0px 170px;
  padding: 48px 5%;

  @media (max-width: ${mobileSize}) {
    width: 100%;
    background: none;
    box-shadow: none;
    color: #fefefe;
  }
`;

export const ContentCenter = styled.div`
  width: 500px;
  margin: 0 auto;
  max-width: 100%;
  padding: 40px 0;

  @media (min-width: ${mobileSize}) {
    width: 700px;
    padding: 0;
  }
`;

export const Description = styled.div`
  width: 100%;
  font-size: 20px;

  p {
    margin-bottom: 25px;
  }
`;

export const Faq = styled.section`
  width: 100%;
  padding: 60px 5%;
`;

export const TitleFaq = styled.h2`
  font-size: 36px;
  color: #2e2e2e;
  margin: 20px;
  padding: 10px;
`;

export const Quest = styled.p`
  border: 1.5px solid #a864ff;
  margin: 22px;
  border-radius: 10px;
  padding: 15px;
  font-size: 20px;
  font-weight: bold;
  color: #2e2e2e;
`;

export const Answers = styled.p`
  font-size: 20px;
  margin: 0 40px;
  color: #2e2e2e;
`;
