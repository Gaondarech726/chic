import styled from 'styled-components';
export const Button = styled.button``;

export const Main = styled.main`
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  flex-direction: column;
`;

export const P = styled.p`
  color: rgb(124, 16, 119);
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const H1 = styled.h1`
  color: rgb(124, 16, 119);
`;

export const Div = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Aboutd = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  margin-bottom: 80px;
`;

export const AboutTextDiv = styled.div`
  display: flex;
  justify-content: center;
  align-self: flex-start;
  flex-direction: column;
  width: 360px;
  @media (max-width: 768px) {
    align-self: center;
  }
`;

export const TextDiv = styled.div`
  display: flex;
  justify-content: center;
  align-self: flex-start;
  flex-direction: column;
  width: 360px;
  @media (max-width: 768px) {
    align-self: center;
  }
`;

export const Img = styled.img`
  display: flex;
  justify-content: center;
  align-self: flex-end;
  padding-bottom: 20px;
  @media (max-width: 768px) {
    align-self: center;
  }
`;

const Image = require('../img/image.jpg');
const Image2 = require('../img/image2.webp');

const About = () => {
  return (
    <Main>
      <Aboutd>
        <AboutTextDiv>
          <H1>Про нас</H1>
          <P>
            CHIC – це місце, де стиль, доглянутість і вишуканість поєднуються в
            єдину філософію краси. Кожна деталь продумана так, щоб створити
            атмосферу комфорту та довіри, а кожен клієнт отримує не просто
            послугу, а справжній ритуал догляду. Команда професіоналів досконало
            володіє сучасними техніками та стежить за останніми трендами у світі
            краси. Якість, індивідуальний підхід і любов до своєї справи –
            основа кожної процедури. Затишний інтер’єр, уважне ставлення та
            використання найкращих матеріалів роблять кожен візит до CHIC
            приємним досвідом. Це простір, де краса стає способом життя.
          </P>
        </AboutTextDiv>
        <Img src={Image2} alt="Nice image aesthetic" width={360} />
      </Aboutd>
      <Div>
        <TextDiv>
          <H1>Краса</H1>
          <P>
            це не лише риси обличчя чи форма зачіски. Це впевненість у собі,
            сяючий погляд і відчуття гармонії з власним відображенням у
            дзеркалі. Саме тому ми створили простір, де кожна деталь працює на
            ваш комфорт, а кожен візит перетворюється на маленьке свято турботи
            про себе. У нашому салоні краси ми поєднали сучасні тренди,
            професійний підхід і справжню пристрасть до своєї справи. Ми віримо,
            що кожна людина — унікальна, а справжня розкіш — це підкреслити
            природну красу, не втрачаючи індивідуальності. "CHIC" - в перекладі
            означає "шик", що є синонімом слів шикарний або вишуканий. Ми
            пропонуємо вам завітати до нас та познайомитися із "CHIC"
            віч-на-віч!
          </P>
        </TextDiv>
        <Img src={Image} alt="Nice image aesthetic" width={360} />
      </Div>
    </Main>
  );
};
export default About;
