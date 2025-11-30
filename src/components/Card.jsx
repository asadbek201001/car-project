import React from "react";
import styled from "styled-components";
import { FaUserFriends, FaOilCan, FaFan } from "react-icons/fa";
import { GiGearStickPattern } from "react-icons/gi";

// Array of car objects
const cars = [
  {
    name: "Mercedes",
    type: "Sedan",
    price: 25,
    img: "https://incognito.be/wp-content/uploads/2015/11/visual-web-02-1.png",
  },
  {
    name: "Mercedes",
    type: "Sport",
    price: 50,
    img: "https://incognito.be/wp-content/uploads/2015/11/s-klasse4-300x164.png",
  },
  {
    name: "Mercedes",
    type: "Sedan",
    price: 45,
    img: "https://incognito.be/wp-content/uploads/2016/05/visual-web-03-300x172.png",
  },
  {
    name: "Porsche",
    type: "SUV",
    price: 40,
    img: "https://cdn.imagin.studio/s/7sl1LpslP9JIcodV_DcvoRZynwz9Lzu6RGmDSPc-PLZDbpdN9jklvV91lULnKWy-SmyRHOM1OKBIb5EH_jUutkdBlUz6NhzuEjbFM_41B7ZHVZVP9D936ho20kz8Pi-_fWa0SPI0PoZIaO5R_C0voUX919kiVZy-2X3X9TbU6OLdSVJ1b9md49VtmnU_nEy7uW3SEQqNqeucNaptF9jYTtkqadROjaH_1X8mdTK4uP6FJaGhStTsktEfZYhOrfDC8RGqgWOM_d7Vea5hS8CgvtkUhkkj_Px6qW2LJVvY4OvVYZpJE3jUuthZzhlT2fD26T3OcHKdqekL1ZoZG-jQ5RhspxAfjNTm6X26bT64ZL71fYoYH8ik6tkhzhkDnMyXuGinBB-c7I79EdZ1P9Gcksl9um0_kMy62DWudQvY0ObZ7a5VV9g4zo046kVS1KA",
  },
  {
    name: "Porsche",
    type: "Sedan",
    price: 35,
    img: "https://www.pngplay.com/wp-content/uploads/15/Black-Porsche-Background-PNG-Image.png",
  },
  {
    name: "Porsche",
    type: "SUV",
    price: 50,
    img: "https://d2qldpouxvc097.cloudfront.net/image-by-path?bucket=a5-gallery-serverless-prod-chromebucket-1iz9ffi08lwxm&key=429129%2Ffront34%2Flg",
  },
];

// Card Component
function Card({ name, type, price, img }) {
  return (
    <CardBox>
      <ImageWrapper>
        <img src={img} alt={name} />
      </ImageWrapper>

      <TopRow>
        <h3>{name}</h3>
        <Price>${price}<br/> per day</Price>
      </TopRow>

      <Type>{type}</Type>

      <Specs>
        <Spec><GiGearStickPattern /> Autom.</Spec>
        <Spec><FaUserFriends /> 4 Ps</Spec>
        <Spec><FaOilCan /> 95</Spec>
        <Spec><FaFan /> AC</Spec>
      </Specs>

      <Button>View Details</Button>
    </CardBox>
  );
}

// Main Component
export default function CarList() {
  return (
    <Container>
      <Grid>
        {cars.map((car, index) => (
          <Card key={index} {...car} />
        ))}
      </Grid>
    </Container>
  );
}

/* Styled Components */
const Container = styled.div`
  padding: 100px;
`;



const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const CardBox = styled.div`
    background: #f1f1f1;
 width: 416px;
height: 513px;
gap: 40px;
angle: 0 deg;
opacity: 1;
border-radius: 20px;
padding: 24px;

  &:hover {
    box-shadow: 0 6px 20px rgba(0,0,0,0.1);
  }
`;

const ImageWrapper = styled.div`
  background: #f1f1f1;
  display: flex;
  justify-content: center;
  align-items: center;
width: 368px;
height: 240px;
angle: 0 deg;
opacity: 1;

  img {
    height: 100%;
    opacity: 0.6;
  }
`;

const TopRow = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
width: 368px;
height: 51px;
justify-content: space-between;
angle: 0 deg;
opacity: 1;

  h3 {
    font-size: 20px;
    font-weight: 600;
  }
`;

const Price = styled.span`
  color: #5a3ffb;
  font-weight: 700;
`;

const Type = styled.p`
  font-size: 14px;
  color: #777;
  margin-bottom: 14px;
`;

const Specs = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
width: 368;
height: 24;
justify-content: space-between;
angle: 0 deg;
opacity: 1;

  svg { 
    font-size: 16px;    
  } 
`;

const Spec = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  color: #666;
`;

const Button = styled.button`
  background: #5937E0;
width: 100%;
height: 50px;
padding-top: 13px;
padding-right: 28px;
padding-bottom: 13px;
padding-left: 28px;
margin-top: 40px;
font-size: 16px;
color: #fff;
gap: 10px;
angle: 0 deg;
opacity: 1;
border: none;
border-radius: 15px;

  &:hover {
    background: #472dd7;
  }
`;
