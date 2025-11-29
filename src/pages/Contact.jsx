import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import BlurImg from "../assets/Blurcar.png";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaClock } from "react-icons/fa";
import ImgSection1 from "../assets/ImageSection.png";
import ImgSection2 from "../assets/ImageSection2.png";
import ImgSection3 from "../assets/ImageSection3.png";
import CarLogoSection1 from "../assets/Mers.png";
import CarLogoSection2 from "../assets/Bmw.png";
import CarLogoSection3 from "../assets/Audi.png";
import CarLogoSection4 from "../assets/Jeep.png";
import CarLogoSection5 from "../assets/Ford.png";
import CarLogoSection6 from "../assets/Hyu.png";
import RealFooter from "../components/RealFooter";

const InfoSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: -350px;
  margin-bottom: 80px;
  padding: 40px 20px;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const IconCircle = styled.div`
  width: 50px;
  height: 50px;
  background-color: #ffb001;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemTitle = styled.div`
  font-size: 15px;
  color: #444;
`;

const ItemValue = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

const ContactContainer = styled.div`
  width: 100%;
  height: 240px;
  display: flex;
  align-content: center;
  justify-content: center;
  font-size: 24px;
  font-family: Arial, Helvetica, sans-serif;
`;

const ContactContainer2 = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-content: center;
  justify-content: center;
  font-size: 24px;
  margin-top: 50px;
  font-family: Arial, Helvetica, sans-serif;
`;

const MainText = styled.h1`
  width: 273px;
  height: 59px;
  margin-top: 70px;
  font-weight: bold;
  margin-bottom: 40px;
  font-family: 'Work Sans', sans-serif;
`;

const MainText2 = styled.h1`
  width: 600px;
  height: 59px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-family: 'Work Sans', sans-serif;
`;

const SmallText = styled.p`
  width: 300px;
  margin-left: 60px;
  height: 24px;
  font-size: 18px;
  margin-top: 10px;
  font-weight: 400;
  display: flex;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 40px;
`;

const MainContainer = styled.div`
  width: 100%;
  height: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainContainer2 = styled.div`
  width: auto;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding-top:60px;
  padding-bottom:60px;  
`;

const MainContainer3 = styled.div`
  width: 1305px;
  height: 174px;
  display: flex;
  padding-top:60px;
  padding-right:40px;
  padding-bottom:60px;
  border-radius:40px;
  padding-left:30px;
  align-items: center;
  justify-content: center;
  background-color:rgba(250, 250, 250, 1);
  gap: 130px;
  margin-left:98px;
  margin-top:75px;
`;

const CarsLogoSection = styled.div`
  width: auto;
  height: 340px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

const CarCard3 = styled.div`
  width: 416px;
  height: 503px;
  background-color: #5937E0;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid #ccc;
  margin-right: 50px;
  margin-bottom: 500px;
  gap: 30px;
`;

const SelectBox = styled.select`
  width: 100%;
  background-color: #633fdb;
  border: 0;
  border-radius: 10px;
  height: 12%;
  padding-left: 10px;
  color: #ffffff;
  font-size: 15px;
  appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg width='16' height='16' xmlns='http://www.w3.org/2000/svg'><path d='M4 6l4 4 4-4' stroke='black' fill='none' stroke-width='2' stroke-linecap='round'/></svg>");
  background-repeat: no-repeat;
  background-position: right 15px center;
`;

const DateBox = styled.select`
  width: 100%;
  background-color: #633fdb;
  border: 0;
  border-radius: 10px;
  height: 12%;
  padding-left: 10px;
  color: white;
  font-size: 15px;
  appearance: none;
  background-image: url("https://i.postimg.cc/T1xZLQN9/Screenshot-2025-11-24-at-23-18-23.png");
  background-repeat: no-repeat;
  background-position: right 15px center;
  background-size: 16px 16px;
`;

const InputCtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 80%;
  height: 70%;
  gap: 14px;

  input {
    width: 100%;
    background-color: #f0f0f0;
    border: 0;
    border-radius: 10px;
    height: 12%;
    padding-left: 10px;
    color: black;
  }

  button {
    width: 100%;
    background-color: orange;
    height: 12%;
    border: 0;
    border-radius: 10px;
    color: white;
    font-size: 17px;
    transition: 0.3s;
    position: relative;
    z-index: 10;

    &:hover {
      background-color: #ff8707;
      cursor: pointer;
    }
  }
`;

const CarImageBlur = styled.img`
  width: 856px;
  height: 503px;
  background-size: cover;
  border-radius: 20px;
  margin-bottom: 500px;
`;

const ImageSectoin1 = styled.img`
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:row;
  width:416px;
  height: 240px;
  border-radius: 20px;
`;

const ImageSectoin2 = styled.img`
  display:flex; 
  align-items:center;
  justify-content:center;
  flex-direction:row;  
  width:416px;
  height: 240px;
  border-radius: 20px;
`;

const ImageSectoin3 = styled.img`
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:row;
  width:416px;
  height: 240px;
  border-radius: 20px;
`;

const ImageSectionContainer1 = styled.div`
  display:flex-start;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  width:416px;
  height: 322px;
  border-radius: 20px;
  line-height:250%;
  gap:20px;
`;

const ImageSectionContainer2 = styled.div`
  display:flex-start; 
  align-items:center;
  justify-content:center;
  flex-direction:column;  
  width:416px;
  height: 322px;
  border-radius: 20px;
  line-height:250%;
  gap:20px;
`;

const ImageSectionContainer3 = styled.div`
  display:flex-start;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  width:416px;
  height: 322px;
  border-radius: 20px;
  line-height:250%;
  gap:20px;
`;

//
// LOGO COMPONENTS — KERAKLI QISMI
//

const Hyundai = styled.img`
  width: 82px;
  height: 54px;
`;

const Ford = styled.img`
  width: 115px;
  height: 44px;
`;

const Mers = styled.img`
  width: 55px;
  height: 54px;
`;

const Jeep = styled.img`
  width: 109px;
  height: 44px;
`;

const Bmw = styled.img`
  width: 55px;
  height: 54px;
`;

const Audi = styled.img`
  width: 124px;
  height: 42px;
`;

export default function Contact() {
  return (
    <>
      <Header />

      <ContactContainer>
        <MainText>
          Contact Us
          <br />
          <SmallText>
            <p1 style={{ fontSize: "19px" }}>Home/</p1>
            <p1 style={{ fontSize: "19px", fontWeight: "600" }}>Contact Us</p1>
          </SmallText>
        </MainText>
      </ContactContainer>

      <MainContainer>
        <CarCard3>
          <h2 style={{ color: "white" }}>Book your car</h2>

          <InputCtn>
            <SelectBox>
              <option>Car type</option>
            </SelectBox>

            <SelectBox>
              <option>Place of rental</option>
            </SelectBox>

            <SelectBox>
              <option>Place of return</option>
            </SelectBox>

            <DateBox>
              <option>Return date</option>
            </DateBox>

            <button>Book now</button>
          </InputCtn>
        </CarCard3>

        <CarImageBlur src={BlurImg} />
      </MainContainer>

      <InfoSection>
        <InfoItem>
          <IconCircle><FaMapMarkerAlt color="white" size={20} /></IconCircle>
          <TextBlock>
            <ItemTitle>Address</ItemTitle>
            <ItemValue>Oxford Ave. Cary, NC 27511</ItemValue>
          </TextBlock>
        </InfoItem>

        <InfoItem>
          <IconCircle><FaEnvelope color="white" size={20} /></IconCircle>
          <TextBlock>
            <ItemTitle>Email</ItemTitle>
            <ItemValue>nwiger@yahoo.com</ItemValue>
          </TextBlock>
        </InfoItem>

        <InfoItem>
          <IconCircle><FaPhone color="white" size={20} /></IconCircle>
          <TextBlock>
            <ItemTitle>Phone</ItemTitle>
            <ItemValue>+537 547-6401</ItemValue>
          </TextBlock>
        </InfoItem>

        <InfoItem>
          <IconCircle><FaClock color="white" size={20} /></IconCircle>
          <TextBlock>
            <ItemTitle>Opening hours</ItemTitle>
            <ItemValue>Sun–Mon: 10am – 10pm</ItemValue>
          </TextBlock>
        </InfoItem>
      </InfoSection>

      <ContactContainer2>
        <MainText2>Latest blog posts & news</MainText2>
      </ContactContainer2>

      <MainContainer2>
        <ImageSectionContainer1>
          <ImageSectoin1 src={ImgSection1} />
          <h1 style={{ fontSize:"20px", fontWeight:"600px", marginTop:"10px" }}>
            How To Choose The Right Car
          </h1>
          <p style={{ fontWeight:"400px", color:"rgba(0,0,0,0.6)" }}>
            News/12april 2024
          </p>
        </ImageSectionContainer1>

        <ImageSectionContainer2>
          <ImageSectoin2 src={ImgSection2} />
          <h1 style={{ fontSize:"20px", fontWeight:"600px", marginTop:"10px" }}>
            Which plan is right for me?
          </h1>
          <p style={{ fontWeight:"400px", color:"rgba(0,0,0,0.6)" }}>
            News/12april 2024
          </p>
        </ImageSectionContainer2>

        <ImageSectionContainer3>
          <ImageSectoin3 src={ImgSection3} />
          <h1 style={{ fontSize:"20px", fontWeight:"600px", marginTop:"10px" }}>
            Enjoy Speed, Choice & Total Control
          </h1>
          <p style={{ fontWeight:"400px", color:"rgba(0,0,0,0.6)" }}>
            News/12april 2024
          </p>
        </ImageSectionContainer3>
      </MainContainer2>


      <MainContainer3>
        <Hyundai src={CarLogoSection6} />
        <Ford src={CarLogoSection5} />
        <Mers src={CarLogoSection1} />
        <Jeep src={CarLogoSection4} />
        <Bmw src={CarLogoSection2} />
        <Audi src={CarLogoSection3} />
      </MainContainer3>

       <RealFooter />
    </>
  );
}
