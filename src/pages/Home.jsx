import styled from 'styled-components';
import { TourMap } from '../pages/feauters/Map';

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
  color: rgb(124, 16, 119);
  padding-bottom: 50px;
`;

export const H2 = styled.h2`
  padding-bottom: 20px;
  color: rgb(124, 16, 119);
`;

export const Ul = styled.ul`
  color: rgb(124, 16, 119);
  padding-bottom: 50px;
`;

export const Li = styled.li`
  font-size: 20px;
  @media (max-width: 425px) {
    font-size: 16px;
  }
  padding-bottom: 25px;
  color: rgb(124, 16, 119);

  list-style: none;
  > a {
    text-decoration: none;
    transition: color 0.5s ease;
    color: rgb(255, 0, 0);
    &:hover {
      color: rgb(255, 103, 103);
    }
  }
`;

const Home = () => {
  return (
    <Main>
      <H1></H1>

      <P>
        <br />
      </P>

      <TourMap></TourMap>
    </Main>
  );
};
export default Home;
