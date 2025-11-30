import React, { useState } from "react";
import styled from "styled-components";
import { FiPhoneCall } from "react-icons/fi";
import { IoCarSport } from "react-icons/io5";
import { Link } from "react-router-dom";
import ROUTES from "../routes/routes";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <Wrapper>
      <Container>
       
        <LogoArea>
            <LogoIcon>
              <IoCarSport size={40} />
            </LogoIcon>
            <LogoText>Car Rental</LogoText>
        </LogoArea>

        <Nav menuOpen={menuOpen}>
          <NavItem onClick={closeMenu} to={ROUTES.HOME}>Home</NavItem>
          <NavItem onClick={closeMenu} to={ROUTES.VEHICLES}>Vehicles</NavItem>
          <NavItem onClick={closeMenu} to={ROUTES.ABOUT}>About Us</NavItem>
          <NavItem onClick={closeMenu} to={ROUTES.CONTACT}>Contact Us</NavItem>
        </Nav>

        <Hamburger onClick={toggleMenu} aria-label="Toggle menu" aria-expanded={menuOpen}>
          <Bar />
          <Bar />
          <Bar />
        </Hamburger>

      
        {/* Remove HelpArea on screens smaller than 900px */}
        <HelpArea>
          <IconWrap>
            <FiPhoneCall size={22} />
          </IconWrap>
          <HelpText>
            <span>Need help?</span>
            <strong></strong>
          </HelpText>
        </HelpArea>
      </Container>
    </Wrapper>
  );
}
const Wrapper = styled.header`
  width: 100%;
  background: #fff;
  
  padding: 20px 0;

  @media (max-width: 600px) {
    padding: 12px 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 600px) {
    padding: 0 12px;
  }
`;

/* Logo */
const LogoArea = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  color: #000;
  
  @media (max-width: 600px) {
    gap: 6px;
  }
`;

const LogoText = styled.span`
  font-size: 17px;
  font-weight: 700;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

/* Navigation */
const Nav = styled.nav`
  display: flex;
  align-items: center;
  flex: 1;
  transform: none;
  transition: max-height 0.4s ease, padding 0.4s ease;

  @media (max-width: 900px) {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: #fff;
    flex-direction: column;
    align-items: flex-start;
    padding: ${({ menuOpen }) => (menuOpen ? "20px" : "0 20px")};
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    max-height: ${({ menuOpen }) => (menuOpen ? "300px" : "0")};
    overflow: hidden;
    z-index: 999;
  }

  @media (max-width: 600px) {
    top: 60px;
    padding: ${({ menuOpen }) => (menuOpen ? "12px" : "0 12px")};
    max-height: ${({ menuOpen }) => (menuOpen ? "260px" : "0")};
  }
`;

const NavItem = styled(Link)`
  text-decoration: none;
  color: #000;
  font-size: 18px;
  width: 110px;
  font-weight: 500;
  padding: 8px 6px;
  transition: color 120ms ease, opacity 120ms ease;
  cursor: pointer;
  white-space: nowrap;

  &.active {
    font-weight: 700;
  }

  &:hover {
    color: #5c2dee;
    opacity: 0.9;
  }

  @media (max-width: 900px) {
    width: 100%;
    padding: 12px 0;
  }

  @media (max-width: 600px) {
    font-size: 16px;
    padding: 10px 0;
  }
`;

/* Hamburger menu */
const Hamburger = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 25px;
  height: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1000;

  @media (max-width: 900px) {
    display: flex;
  }

  @media (max-width: 600px) {
    width: 20px;
    height: 16px;
  }
`;

const Bar = styled.span`
  display: block;
  height: 3px;
  background-color: #000;
  border-radius: 2px;

  @media (max-width: 600px) {
    height: 2.5px;
  }
`;

/* Right side help */
const HelpArea = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 900px) {
    display: none;
  }
`;

const IconWrap = styled.div`
  background: #5c2dee;
  padding: 10px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  @media (max-width: 600px) {
    padding: 8px;
  }
`;

const LogoIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: transparent;
  color: #000;

  @media (max-width: 600px) {
    width: 40px;
    height: 40px;
  }
`;

const HelpText = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.1;
  font-size: 14px;

  span {
    opacity: 0.7;
  }

  strong {
    font-weight: 700;
    font-size: 15px;
  }

  @media (max-width: 600px) {
    font-size: 12px;

    strong {
      font-size: 13px;
    }
  }
`;