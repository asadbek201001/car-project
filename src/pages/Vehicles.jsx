// Vehicles.jsx
import React, { useState } from "react";
import styled from "styled-components";
import { FaUserFriends, FaOilCan, FaFan } from "react-icons/fa";
import { GiGearStickPattern } from "react-icons/gi";
import Header from "../components/Header";

import { 
  SiToyota, 
  SiFord, 
  SiMercedes, 
  SiJeep, 
  SiBmw, 
  SiAudi 
} from "react-icons/si";
import Footer from "../components/Footer";

const brands = [
  { name: "Toyota", icon: <SiToyota /> },
  { name: "Ford", icon: <SiFord /> },
  { name: "Mercedes", icon: <SiMercedes /> },
  { name: "Jeep", icon: <SiJeep /> },
  { name: "BMW", icon: <SiBmw /> },
  { name: "Audi", icon: <SiAudi /> },
];


const cars = [
  { name: "Mercedes C-Class", type: "Sedan", price: 25, img: "https://incognito.be/wp-content/uploads/2015/11/visual-web-02-1.png" },
  { name: "Mercedes S-Class", type: "Sport", price: 50, img: "https://incognito.be/wp-content/uploads/2015/11/s-klasse4-300x164.png" },
  { name: "Mercedes E-Class", type: "Sedan", price: 45, img: "https://incognito.be/wp-content/uploads/2016/05/visual-web-03-300x172.png" },
  { name: "Porsche Cayenne", type: "SUV", price: 40, img: "https://cdn.imagin.studio/s/7sl1LpslP9JIcodV_DcvoRZynwz9Lzu6RGmDSPc-PLZDbpdN9jklvV91lULnKWy-SmyRHOM1OKBIb5EH_jUutkdBlUz6NhzuEjbFM_41B7ZHVZVP9D936ho20kz8Pi-_fWa0SPI0PoZIaO5R_C0voUX919kiVZy-2X3X9TbU6OLdSVJ1b9md49VtmnU_nEy7uW3SEQqNqeucNaptF9jYTtkqadROjaH_1X8mdTK4uP6FJaGhStTsktEfZYhOrfDC8RGqgWOM_d7Vea5hS8CgvtkUhkkj_Px6qW2LJVvY4OvVYZpJE3jUuthZzhlT2fD26T3OcHKdqekL1ZoZG-jQ5RhspxAfjNTm6X26bT64ZL71fYoYH8ik6tkhzhkDnMyXuGinBB-c7I79EdZ1P9Gcksl9um0_kMy62DWudQvY0ObZ7a5VV9g4zo046kVS1KA" },
  { name: "Porsche Panamera", type: "Sedan", price: 35, img: "https://www.pngplay.com/wp-content/uploads/15/Black-Porsche-Background-PNG-Image.png" },
  { name: "Porsche Macan", type: "SUV", price: 50, img: "https://d2qldpouxvc097.cloudfront.net/image-by-path?bucket=a5-gallery-serverless-prod-chromebucket-1iz9ffi08lwxm&key=429129%2Ffront34%2Flg" },
  { name: "Toyota Hilux", type: "Pickup", price: 40, img: "https://p7.hiclipart.com/preview/943/944/895/toyota-hilux-toyota-fortuner-2-4-g-4x4-a-t-car-toyota-vios-toyota.jpg" },
  { name: "Honda Odyssey", type: "Minivan", price: 38, img: "https://p7.hiclipart.com/preview/931/765/144/2019-honda-odyssey-car-2018-honda-odyssey-ex-l-honda-today-honda.jpg" },
  { name: "Porsche 911", type: "Sport", price: 120, img: "https://cdn.imagin.studio/s/7sl1LpslP9JIcodV_DcvoRZynwz9Lzu6RGmDSPc-PLZDbpdN9jklvV91lULnKWy-SmyRHOM1OKBIb5EH_jUutkdBlUz6NhzuEjbFM_41B7ZHVZVP9D936ho20kz8Pi-_fWa0SPI0PoZIaO5R_C0voUX919kiVZy-2X3X9TbU6OLdSVJ1b9md49VtmnU_nEy7uW3SEQqNqeucNaptF9jYTtkqadROjaH_1X8mdTK4uP6FJaGhStTsktEfZYhOrfDC8RGqgWOM_d7Vea5hS8CgvtkUhkkj_Px6qW2LJVvY4OvVYZpJE3jUuthZzhlT2fD26T3OcHKdqekL1ZoZG-jQ5RhspxAfjNTm6X26bT64ZL71fYoYH8ik6tkhzhkDnMyXuGinBB-c7I79EdZ1P9Gcksl9um0_kMy62DWudQvY0ObZ7a5VV9g4zo046kVS1KA" },
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
        <Price>${price}<br /> per day</Price>
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
export default function Vehicles() {
  const [filter, setFilter] = useState("All");

  const filteredCars = filter === "All" ? cars : cars.filter(car => car.type === filter);

  return (
    <>
      <Title>Select a vehicle group</Title>
      <FilterWrapper>
        {["All","Sedan","Cabriolet","Pickup","SUV","Minivan","Sport"].map(btn => (
          <FilterButton key={btn} active={filter===btn} onClick={() => setFilter(btn)}>
            {btn}
            {filter === btn && <ActiveLine />}
          </FilterButton>
        ))}
      </FilterWrapper>

      <Container>
        <Grid>
          {filteredCars.map((car, index) => (
            <Card key={index} {...car} />
          ))}
        </Grid>
        
        <br/>
        <br />
   <BrandRow>
  {brands.map((b) => (
    <BrandItem key={b.name}>
      {b.icon}
    </BrandItem>
  ))}
</BrandRow>

      </Container>
      <Footer />
    </>
  );
}

/* Styled Components */
const BrandRow = styled.div`
  margin-top: 50px;
  background: #FAFAFA;
  width: 100%;
  padding: 35px 0;
  border-radius: 20px;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const BrandItem = styled.div`
  font-size: 80px;
  color: #000;
  opacity: 0.8;
  transition: 0.2s;
  justify-content: center;
  align-items: center;

  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }
`;

const Title = styled.h2`
  text-align: center;
  margin-top: 40px;
  font-size: 28px;
  font-weight: 600;
`;

const FilterWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 18px;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  position: relative;
  padding: 12px 28px;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  transition: 0.2s ease;

  background: ${props => props.active ? "#5937E0" : "#eaeaea"};
  color: ${props => props.active ? "#fff" : "#000"};

  &:hover {
    background: ${props => props.active ? "#5937E0" : "#d5d5d5"};
  }
`;

const ActiveLine = styled.div`
  position: absolute;
  bottom: -4px;
  left: 50%;
  transform: translateX(-50%);
  width: 50%;
  height: 3px;
  background: #fff;
  border-radius: 2px;
`;

const Container = styled.div`
  padding: 40px 100px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media(max-width: 1024px){
    grid-template-columns: repeat(2, 1fr);
  }
  @media(max-width: 768px){
    grid-template-columns: 1fr;
  }
`;

const CardBox = styled.div`
  background: #f1f1f1;
  width: 416px;
  height: 513px;
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

  h3 { font-size: 20px; font-weight: 600; }
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
  width: 368px;

  svg { font-size: 16px; }
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
  margin-top: 40px;
  font-size: 16px;
  color: #fff;
  border: none;
  border-radius: 15px;
  &:hover { background: #472dd7; }
`;
