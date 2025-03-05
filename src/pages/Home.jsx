import styled from 'styled-components';
import About from './About';
import Contact from './Contact';
import Services from './Services';

export const Main = styled.main`
  margin-top: 50px;
  width: 100vw;
`;

export const P = styled.p`
  color: rgb(124, 16, 119);
  padding-bottom: 50px;
  font-size: 20px;
  @media (max-width: 425px) {
    font-size: 16px;
  }
`;

export const H1 = styled.h1`
  padding-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(124, 16, 119);
  padding-bottom: 50px;
  font-size: 58px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const H2 = styled.h2`
  padding-bottom: 20px;
  color: rgb(124, 16, 119);
`;

const Home = () => {
  return (
    <Main>
      <H1 id="about">CHIC - місце, де народжується краса</H1>

      <P>
        <br />
      </P>

      <About></About>
      <Services></Services>
      <Contact></Contact>
    </Main>
  );
};
export default Home;
