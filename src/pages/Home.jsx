import styled from 'styled-components';
import About from './About';
import Contact from './Contact';
import Services from './Services';

export const Main = styled.main`
  margin-top: 50px;
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
  font-size: 54px;
  @media (max-width: 768px) {
    font-size: 34px;
  }
`;

export const H2 = styled.h2`
  padding-bottom: 20px;
  color: rgb(124, 16, 119);
`;

const Home = () => {
  return (
    <Main>
      <H1>CHIC - місце, де народжується краса</H1>

      <P>
        <br />
      </P>

      <Contact></Contact>
      <About></About>
      <Contact></Contact>
      <Services></Services>
    </Main>
  );
};
export default Home;
