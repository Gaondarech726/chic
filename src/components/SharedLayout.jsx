import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import '../components/App.scss';
import LogoM8 from '../img/logo.svg';
import { Load } from '../pages/feauters/loading/Load.jsx';
import { Footer } from './../pages/Footer/Footer.jsx';
import { Container, Link, NewContainer } from './App.styled';
import BtnScrollUp from './BtnScrollUp/BtnScrollUp';

const HeaderContainer = styled.header`
  color: rgb(124, 16, 119);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
`;

const Img = styled.img`
  width: 130px;
  height: 100%;
`;

const H1 = styled.h1`
  padding-left: 30px;
  font-size: 56px;
  color: rgb(124, 16, 119);
`;

const BurgerButton = styled.button`
  background: none;
  border: none;
  color: rgb(124, 16, 119);
  font-size: 24px;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavLinks = styled.nav`
  font-size: 20px;
  z-index: 1000;
  display: flex;
  gap: 12px;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 768px) {
    font-size: 18px;
    right: 0;
    flex-direction: column;
    position: fixed;
    top: 100px;
    width: 250px;
    background: rgb(199, 144, 6);
    padding: 16px;
    transform: ${({ isOpen }) =>
      isOpen ? 'translateX(0%)' : 'translateX(250%)'};
  }
`;

export const SharedLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <NewContainer>
        <HeaderContainer>
          <Link to="/" className="logo">
            <Img src={LogoM8} alt="logo" />
            <H1>Chic</H1>
          </Link>
          <BurgerButton onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? '✖' : '☰'}
          </BurgerButton>
          <NavLinks isOpen={isOpen}>
            <Link to="/about">Про нас</Link>
            <Link to="/products">Наші послуги</Link>
          </NavLinks>
        </HeaderContainer>
        <Suspense fallback={<Load />}>
          <Outlet />
        </Suspense>
        <BtnScrollUp />
      </NewContainer>
      <Footer />
    </Container>
  );
};
