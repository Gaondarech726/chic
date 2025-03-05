import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaRegClock } from 'react-icons/fa6';
import { IoMdPhonePortrait } from 'react-icons/io';
import './Contact.scss';

import styled from 'styled-components';

export const Button = styled.button``;

export const Main = styled.main`
  margin-top: 50px;
`;

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  @media (max-width: 728px) {
    flex-direction: column;
  }
`;

export const Li = styled.li`
  width: 300px;
  height: 230px;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

export const P = styled.p`
  color: rgb(124, 16, 119);
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Span = styled.span`
  color: rgb(124, 16, 119);
  height: 37px;
`;

const Contact = () => {
  return (
    <Main>
      <Div>
        <Ul id="contact">
          <Li>
            <IoMdPhonePortrait className="icon" fill="rgb(124, 16, 119)" />
            <P>Контакти</P>
            <Span>
              Т: +380 (93) 628 88 18 <br /> Олена
            </Span>
          </Li>
          <Li>
            <FaRegClock className="icon" fill="rgb(124, 16, 119)" />
            <P>Працюємо</P>
            <Span>
              Без вихідних <br />з 09:00 до 19:00
            </Span>
          </Li>
          <Li>
            <FaMapMarkerAlt className="icon" fill="rgb(124, 16, 119)" />
            <P>Адреса</P>
            <Span>
              Академіка Шалімова, 1 <br /> Київ, Україна
            </Span>
          </Li>
        </Ul>
      </Div>
    </Main>
  );
};
export default Contact;
