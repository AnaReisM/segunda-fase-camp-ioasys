import styled from 'styled-components';

const mobileSize = '720px';

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

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 400;
  margin-bottom: 20px;
`;

export const Background = styled.div`
  background-image: url('/Rectangle 2.png');
  background-repeat: no-repeat;
  background-position: top right;
  background-size: 500px;
  min-height: 100vh;
`;

export const Container = styled.div`
  padding: 50px 5%;

  @media (min-width: 720px) {
    ${(props) =>
      props.big
        ? `width: 80%;
    margin: 0 auto;`
        : `width: 600px;
    margin-left: 100px;`}
  } ;
`;

export const Form = styled.form`
  background: #f6e29d;
  box-shadow: 8px 8px 4px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
  padding: 40px 30px;
`;

export const Button = styled.button`
  background: #a864ff;
  border-radius: 32px;
  color: white;
  padding: 6px 40px;
  margin: 0 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  border: none;

  img {
    margin-left: 10px;
  }
`;
export const Error = styled.p`
  text-align: right;
  color: red;
  font-weight: bold;
  padding-bottom: 20px;
`;
