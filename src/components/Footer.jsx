import React from "react";
import styled from "styled-components";
import RealFooter from "./RealFooter";





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
import KontaktImg from "../assets/KontaktImg.png";
import SpeedImg from "../assets/SpeedPng.png";


import { IoCarSport } from "react-icons/io5";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { HiLocationMarker, HiOutlineMail } from "react-icons/hi";
import { IoCall } from "react-icons/io5";

const HeroContainer = styled.div`
  margin-top: 50px;
  width: 100%;
  background-color: #ffffff;
  padding: 20px 20px 20px 0;
  font-size: 14px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
    gap: 30px;
    padding: 20px 10px 20px 10px;
  }
`;

const BigContainer = styled.div`
  width: 100%;
  max-width: 1296px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-direction: column;
  padding: 0 15px;

  @media (max-width: 900px) {
    padding: 0 10px;
  }
`;

const CompanionContainer = styled.div`
  width: 100%;
  max-width: 1296px;
  height: 415px;
  background-color: #5937e0;
  border-radius: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  padding: 0 40px;
  box-sizing: border-box;

  @media (max-width: 900px) {
    width: 100%;
    height: auto;
    flex-direction: column;
    padding: 20px 20px 40px 20px;
    gap: 20px;
    border-radius: 20px;
  }
`;

const CompanionContainer2 = styled.div`
  width: 100%;
  max-width: 1296px;
  height: 486px;
  background-color: #5937e0;
  border-radius: 40px;
  padding: 60px 40px;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  gap: 20px;
  box-sizing: border-box;

  background-image: url(${CarrImg});
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: 700px;
  
  opacity: 1;

  @media (max-width: 900px) {
    width: 100%;
    height: auto;
    background-size: 350px;
    padding: 40px 20px;
    border-radius: 20px;
  }

  @media (max-width: 600px) {
    padding: 30px 15px;
    background-size: 250px;
  }
`;




const CompanionContainer3 = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 790px;
  margin: 0 auto;
  padding: 0 10px;

  @media (max-width: 600px) {
    max-width: 100%;
    padding: 0 5px;
  }
`;

const Img = styled.img`
  width: 500px;
  height: auto;
  margin-bottom: 10px;

  @media (max-width: 900px) {
    width: 90%;
    margin: 0 auto 10px auto;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const DownloadText = styled.h2`
  font-weight: 700;
  font-size: 70px;
  width: 556px;
  line-height: 110%;
  color: #000;
  margin-right: 200px;
  margin-bottom: 20px;
  text-align: left;

  @media (max-width: 900px) {
    width: 100%;
    margin-right: 0;
    font-size: 40px;
    text-align: center;
  }

  @media (max-width: 600px) {
    font-size: 32px;
    line-height: 120%;
    width: 100%;
    text-align: center;
    margin-right: 0;
  }
`;

const DownloadTextt = styled.h2`
  font-weight: 700;
  font-size: 50px;
  line-height: 110%;
  color: white;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    text-align: center;
    align-items: center;
  }

  @media (max-width: 600px) {
    font-size: 32px;
    line-height: 120%;
  }
`;

const DownloadTextt2 = styled.h2`
  font-weight: 700;
  font-size: 50px;
  line-height: 110%;
  margin-bottom: 50px;
  
  color: white;
  

  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    text-align: center;
    align-items: center;
  }

  @media (max-width: 600px) {
    font-size: 36px;
    margin-bottom: 30px;
  }
`;

const InfoText = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.6;
  max-width: 590px;
  color: #625a5a;
  margin-top: 20px;

  @media (max-width: 900px) {
    font-size: 16px;
    max-width: 100%;
    text-align: center;
    line-height: 1.5;
    margin-top: 15px;
    padding: 0 10px;
  }

  @media (max-width: 600px) {
    font-size: 14px;
    line-height: 1.4;
    padding: 0 5px;
  }
`;
const InfoTextt = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin-top: 40px;
  line-height: 150%;
  max-width: 590px;
  color: #ffffff;

  @media (max-width: 900px) {
    text-align: center;
    padding: 0 10px;
  }

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 150%;
    width: 100%;
    text-align: center;
    padding: 0 5px;
  }
`;


const InfoTextt1 = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 150%;
  max-width: 790px;
  color: #ffffff;
  margin: 0 auto;

  @media (max-width: 900px) {
    text-align: center;
    padding: 0 10px;
  }

  @media (max-width: 600px) {
    padding: 0 5px;
  }
`;


const InfoText1 = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin-top: 10px;
  line-height: 90%;
  max-width: 590px;
  color: #ffffff;
  margin-left: 0;

  @media (min-width: 901px) {
    margin-left: 240px;
  }

  @media (max-width: 900px) {
    text-align: center;
    margin-left: 0;
    padding: 0 10px;
  }

  @media (max-width: 600px) {
    padding: 0 5px;
  }
`;
const InfoContainer = styled.div`
  width: 590px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  @media (max-width: 900px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 0 10px;
  }
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 590px;
  height: auto;
  margin-left: 70px;

  @media (max-width: 900px) {
    align-items: center;
    margin-left: 0;
    text-align: center;
    gap: 10px;
    width: 100%;
    padding: 0 10px;
  }
`;

const ApStore = styled.img`
  width: 150px;
  height: auto;
  margin-top: 30px;
  margin-right: 20px;

  @media (max-width: 900px) {
    margin-top: 10px;
    margin-right: 10px;
    width: 130px;
  }

  @media (max-width: 600px) {
    width: 120px;
    margin-top: 8px;
    margin-right: 8px;
  }
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

  @media (max-width: 900px) {
    margin-top: 10px;
    margin-right: 0;
    width: 130px;
  }

  @media (max-width: 600px) {
    width: 120px;
    margin-top: 8px;
  }
`;

const CarImg = styled.img`
  width: 380px;
  height: 380px;
  margin-top: 0;
  margin-right: 0;

  @media (max-width: 900px) {
    width: 90%;
    height: auto;
    margin: 0 auto;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const EnjoyContainer = styled.div`
  width: 900px;
  padding: 17px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 900px) {
    width: 100%;
    text-align: center;
    align-items: center;
    padding: 17px 10px;
  }

  @media (max-width: 600px) {
    padding: 10px 5px;
    width: 100%;
  }
`;

const CityWrapper = styled.div`
  position: relative;
  width: 464px;
  margin-top: 40px;

  @media (max-width: 900px) {
    width: 100%;
    max-width: 464px;
    margin: 30px auto 0 auto;
    padding: 0 10px;
  }

  @media (max-width: 600px) {
    max-width: 100%;
    padding: 0 5px;
  }
`;

const CityInput = styled.input`
  width: 100%;
  height: 60px;
  border-radius: 20px;
  border: 0;
  padding-left: 20px;
  font-size: 18px;
  background-color: #ffffff;
  color: #555;
  box-sizing: border-box;
`;

const CityButton = styled.button`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  height: 45px;
  width: 130px;
  border: none;
  border-radius: 16px;
  background-color: #ffa500;
  color: white;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;

  @media (max-width: 600px) {
    width: 110px;
    height: 40px;
    font-size: 16px;
  }
`;




const BtnContainers = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  width: 100%;
  margin-top: 40px;
  flex-wrap: wrap;

  @media (max-width: 900px) {
    flex-direction: row;
    justify-content: center;
    gap: 15px;
    margin-top: 30px;
  }

  @media (max-width: 600px) {
    gap: 10px;
  }
`;

const StatCard = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  background: white;
  border-radius: 16px;
  padding: 20px 28px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.08);
  width: 240px;
  height: 100px;
  max-width: 260px;

  @media (max-width: 600px) {
    width: 100%;
    max-width: 100%;
    height: auto;
    padding: 15px 20px;
  }
`;

const IconBox = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StatText = styled.div`
  display: flex;
  flex-direction: column;
`;

const StatNumber = styled.h3`
  font-size: 24px;
  font-weight: 700;
  margin: 0;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const StatLabel = styled.p`
  margin: 0;
  font-size: 14px;
  color: #666;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;



const IconImg1 = styled.img`
  width: 58px;
  height: 58px;
`;

const IconImg2 = styled.img`
  width: 58px;
  height: 58px;
`;

const IconImg3 = styled.img`
  width: 58px;
  height: 58px;
`;  

const IconImg4 = styled.img`
  width: 58px;
  height: 58px; 
`;  

  


export default function Footer() {
  return (
    <>
      <BigContainer>

        <CompanionContainer2>
          <CompanionContainer3>
          <DownloadTextt2>
            Facts in numbers
          </DownloadTextt2>
         
          <InfoTextt1>
            Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien  bibendum ullamcorper <br />
          <InfoText1>in. Diam tincidunt tincidunt erat</InfoText1> 
          </InfoTextt1>
          </CompanionContainer3>

          <BtnContainers>
  <StatCard>
    <IconBox><IconImg1 src={IconCar} /></IconBox>
    <StatText>
      <StatNumber>540+</StatNumber>
      <StatLabel>Cars</StatLabel>
    </StatText>
  </StatCard>

  <StatCard>
    <IconBox><IconImg2 src={KontaktImg} /></IconBox>
    <StatText>
      <StatNumber>20k+</StatNumber>
      <StatLabel>Customers</StatLabel>
    </StatText>
  </StatCard>

  <StatCard>
    <IconBox><IconImg3 src={KalendarImg} /></IconBox>  
    <StatText>
      <StatNumber>25+</StatNumber>
      <StatLabel>Years</StatLabel>
    </StatText>
  </StatCard>

  <StatCard>
    <IconBox><IconImg4 src={SpeedImg} /></IconBox>
    <StatText>
      <StatNumber>20m+</StatNumber>
      <StatLabel>Miles</StatLabel>
    </StatText>
  </StatCard>
</BtnContainers>

        
            </CompanionContainer2>
        <HeroContainer>
          <MainContainer>
            <DownloadText>
              Download <br /> Mobile App
              <InfoContainer>
  
              </InfoContainer>
            </DownloadText>

            <InfoContainer>
              <ApStore src={AppStore} />
              <GooglePlayy src={GooglePlay} />
            </InfoContainer>
          </MainContainer>

          <Img src={IphoneIMage} />
        </HeroContainer>


        
        <CompanionContainer>
          <EnjoyContainer>
            <DownloadTextt>
              Enjoy every mile with
              <span style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
                <span>adorable</span>
                <span>companionship</span>
              </span>
            </DownloadTextt>

            <InfoTextt>
              Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien
              bibendum ullamcorper in. Diam tincidunt tincidunt erat
            </InfoTextt>

            <CityWrapper>
              <CityInput type="text" placeholder="City" />
              <CityButton>Search</CityButton>
            </CityWrapper>
          </EnjoyContainer>

          <CarImg src={CarImage} />
        </CompanionContainer>
      </BigContainer>

      <RealFooter />

     
    </>
  );
}
