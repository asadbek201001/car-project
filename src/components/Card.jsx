import React from "react";
import styled from "styled-components";
import { FaUserFriends, FaOilCan, FaFan } from "react-icons/fa";
import { GiGearStickPattern } from "react-icons/gi";
import { useNavigate } from "react-router-dom";


// Array of car objects
export const cars = [
  { id: 1, name: "Mercedes C-Class", type: "Sedan", price: 25, img: "https://incognito.be/wp-content/uploads/2015/11/visual-web-02-1.png" },
  { id: 2, name: "Mercedes S-Class", type: "Sport", price: 50, img: "https://incognito.be/wp-content/uploads/2015/11/s-klasse4-300x164.png" },
  { id: 3, name: "Mercedes E-Class", type: "Sedan", price: 45, img: "https://incognito.be/wp-content/uploads/2016/05/visual-web-03-300x172.png" },
  { id: 4, name: "Porsche Cayenne", type: "SUV", price: 40, img: "https://cdn.imagin.studio/s/7sl1LpslP9JIcodV_DcvoRZynwz9Lzu6RGmDSPc-PLZDbpdN9jklvV91lULnKWy-SmyRHOM1OKBIb5EH_jUutkdBlUz6NhzuEjbFM_41B7ZHVZVP9D936ho20kz8Pi-_fWa0SPI0PoZIaO5R_C0voUX919kiVZy-2X3X9TbU6OLdSVJ1b9md49VtmnU_nEy7uW3SEQqNqeucNaptF9jYTtkqadROjaH_1X8mdTK4uP6FJaGhStTsktEfZYhOrfDC8RGqgWOM_d7Vea5hS8CgvtkUhkkj_Px6qW2LJVvY4OvVYZpJE3jUuthZzhlT2fD26T3OcHKdqekL1ZoZG-jQ5RhspxAfjNTm6X26bT64ZL71fYoYH8ik6tkhzhkDnMyXuGinBB-c7I79EdZ1P9Gcksl9um0_kMy62DWudQvY0ObZ7a5VV9g4zo046kVS1KA" },
  { id: 5, name: "Porsche Panamera", type: "Sedan", price: 35, img: "https://www.pngplay.com/wp-content/uploads/15/Black-Porsche-Background-PNG-Image.png" },
  { id: 6, name: "Porsche Macan", type: "SUV", price: 50, img: "https://d2qldpouxvc097.cloudfront.net/image-by-path?bucket=a5-gallery-serverless-prod-chromebucket-1iz9ffi08lwxm&key=429129%2Ffront34%2Flg" },
];

// Card Component
function Card({ id, name, type, price, img }) {
    const navigate = useNavigate();
  return (
    <CardBox>
      <ImageWrapper>
        <img src={img} alt={name} />
      </ImageWrapper>

      <TopRow>
        <h3>{name}</h3>
        <Price>${price} <br /> per day</Price>
      </TopRow>

      <Type>{type}</Type>

      <Specs>
        <Spec><GiGearStickPattern /> Autom.</Spec>
        <Spec><FaUserFriends /> 4 Ps</Spec>
        <Spec><FaOilCan /> 95</Spec>
        <Spec><FaFan /> AC</Spec>
      </Specs>
<Button onClick={() => navigate(`/details/${id}`)}>
        View Details
      </Button>
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

/* ------------------------------------------
   RESPONSIVE STYLED COMPONENTS
------------------------------------------- */

const Container = styled.div`
  padding: 40px 20px;

  @media (min-width: 768px) {
    padding: 50px 40px;
  }

  @media (min-width: 1024px) {
    padding: 60px 100px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }
`;

const CardBox = styled.div`
  background: #f7f7f7;
  border-radius: 20px;
  padding: 20px;
  transition: 0.3s ease;
  cursor: pointer;

  &:hover {
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
    transform: translateY(-5px);
  }

  @media (max-width: 480px) {
    padding: 16px;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 220px;
  background: #e9e9e9;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 14px;

  @media (max-width: 480px) {
    height: 180px;
  }

  img {
    height: 100%;
    opacity: 0.75;
    object-fit: contain;
  }
`;

const TopRow = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: space-between;

  h3 {
    font-size: 18px;

    @media (min-width: 768px) {
      font-size: 20px;
    }
  }
`;

const Price = styled.span`
  color: #5a3ffb;
  font-weight: 700;
  text-align: right;
`;

const Type = styled.p`
  font-size: 14px;
  color: #777;
  margin-bottom: 10px;
`;

const Specs = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  svg {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 13px;

    svg {
      font-size: 14px;
    }
  }
`;

const Spec = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
  color: #666;
`;

const Button = styled.button`
  width: 100%;
  height: 50px;
  background: #5937e0;
  color: white;
  border: none;
  border-radius: 15px;
  font-size: 16px;
  transition: 0.2s;

  &:hover {
    background: #472dd7;
  }

  @media (max-width: 480px) {
    height: 45px;
    font-size: 14px;
  }
`;
