import { Main } from './Home.jsx';

import Slider from '../components/Slider/Slider.jsx';

import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const H1 = styled.h1`
  color: rgb(124, 16, 119);
`;

const Services = () => {
  return (
    <Main>
      <Div>
        <H1 id="services">Наші послуги</H1>
        <Slider />
      </Div>
    </Main>
  );
};
export default Services;
