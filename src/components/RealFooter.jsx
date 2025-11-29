import React from "react";
import styled from "styled-components";


import IphoneIMage from "../assets/photo_2025-11-24_22-50-42.jpg";
import AppStore from "../assets/AppStore.png";
import GooglePlay from "../assets/GooglePlay.png";
import CarImage from "../assets/car.png";
import MailImg from "../assets/mail.png";
import AdresImg from "../assets/adress.png";
import PhoneImg from "../assets/phone.png";
import CarrImg from "../assets/carr.png";
import IconCar from "../assets/IconCar.png";
import KalendarImg from "../assets/KalendarImg.png";
import { IoCarSport } from "react-icons/io5";
import KontaktImg from "../assets/KontaktImg.png";
import SpeedImg from "../assets/SpeedPng.png";

import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { HiLocationMarker, HiOutlineMail } from "react-icons/hi";
import { IoCall } from "react-icons/io5";



const FooterWrapper = styled.footer`
  width: 1440px;
  height:469px;
  background: #ffffff;
  padding-top:60px;
  padding-right:72px;
  padding-bottom:40px;
  padding-left:72px;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:80px;
  
`;

const FooterContent = styled.div`
  width: 1296px;
  height:279px;
  margin-left:50px;
  display: flex;
  justify-content: space-between;
  color: #000000;
  gap:100px;
  
`;

const Column = styled.div`
  max-width: 300px;
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Column1 = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Column2 = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Column3 = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-right:60px;
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: #000000;
`;

const TextSmall = styled.p`
  font-size: 18px;
  line-height: 26px;
  font-weight: 500;
  margin-top: 10px;
  color: #000000;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Item = styled.li`
  font-size: 15px;
  cursor: pointer;
`;

const AppButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SocialRow = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 10px;
`;

const IconCircle = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: #efefef;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ContactRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 15px;
`;

const FooterBottom = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 40px;
  font-size: 14px;
  color: #000;
  opacity: 0.6;
`;

const LogoArea = styled.div`
  display: flex;
  align-items: center;
  gap: 1px;
  font-weight: 700;
  color: #000;
`;

const LogoText = styled.span`
  font-size: 17px;
  font-weight: 700;
  /* background-color: black; */
  margin-right: 60px;
  max-width: 200px;
  width:200px;
`;

const LogoIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
`;

const BitaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width:100%;
  gap: 50px;
  
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;


const ApStore = styled.img`
  width: 150px;
  height: auto;
  margin-top: 30px;
  margin-right: 20px;
`;

const MailIcon = styled.img`
  width: 44px;
  height: 44px;
`;

const PhoneIcon = styled.img`
  width: 44px;
  height: 44px;
`;

const AdresIcon = styled.img`
  width: 44px;  
  height: 44px;
`;

const GooglePlayy = styled.img`
  width: 150px;
  height: auto;
  margin-top: 30px;
`;



export default function RealFooter(){ 
     return (
     <FooterWrapper>
            <FooterContent>
              <Column>
              <BitaContainer>
      <LogoArea>
                  <LogoIcon>
                    <IoCarSport size={40}style={{marginRight: "5px"}} />
                    
                  </LogoIcon>
                  <LogoText>Car Rental</LogoText>
                </LogoArea>
                <LogoArea>
              
             
            
    
                </LogoArea>
    
                
              </BitaContainer>
              
    
                <TextSmall>
                  Faucibus faucibus pellentesque dictum turpis. Id pellentesque
                  turpis massa a id iaculis lorem.
                </TextSmall>
    
                <SocialRow>
                  <IconCircle>
                    <FaFacebookF size={16} />
                  </IconCircle>
                  <IconCircle>
                    <FaInstagram size={16} />
                  </IconCircle>
                  <IconCircle>
                    <FaTwitter size={16} />
                  </IconCircle>
                  <IconCircle>
                    <FaYoutube size={16} />
                  </IconCircle>
                </SocialRow>
              </Column>
    
              <Column1>
               
               <Container> <AdresIcon src={AdresImg} /> Oxford Ave. Cary, NC 27511</Container> 
    
                <Title>Useful Links</Title>
                <List>
                  <Item>About us</Item>
                  <Item>Contact us</Item>
                  <Item>Gallery</Item>
                  <Item>Blog</Item>
                  <Item>F.A.Q</Item>
                </List>
              </Column1>
    
              <Column2>
    
              <ContactRow>
        <MailIcon src={MailImg} />
        <span>nobody@gmail.com</span>
      </ContactRow>
                <Title>Vehicles</Title>
                <List>
                  <Item>Sedan</Item>
                  <Item>Cabriolet</Item>
                  <Item>Pickup</Item>
                  <Item>Minivan</Item>
                  <Item>SUV</Item>
                </List>
              </Column2>
    
              <Column3>
                <ContactRow>
        <PhoneIcon src={PhoneImg} />
        <span>+998987654321</span>
      </ContactRow>
                <Title>Download App</Title>
    
               
    
                <AppButtons>
                  <ApStore src={AppStore} />
                  <GooglePlayy src={GooglePlay} />
                </AppButtons>
              </Column3>
            </FooterContent>
    
            <FooterBottom>© Copyright Car Rental 2024.</FooterBottom>
          </FooterWrapper>
  );
}


