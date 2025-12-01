// ViewDetails.jsx
import { useEffect } from "react";

import { useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/RealFooter";
import { cars } from "../pages/Vehicles";
import { useNavigate } from "react-router-dom";
export const carss = [
  { id: 1, name: "Mercedes C-Class", type: "Sedan", price: 25, img: "https://incognito.be/wp-content/uploads/2015/11/visual-web-02-1.png" },
  { id: 2, name: "Mercedes S-Class", type: "Sport", price: 50, img: "https://incognito.be/wp-content/uploads/2015/11/s-klasse4-300x164.png" },
  { id: 3, name: "Mercedes E-Class", type: "Sedan", price: 45, img: "https://incognito.be/wp-content/uploads/2016/05/visual-web-03-300x172.png" },
  { id: 4, name: "Porsche Cayenne", type: "SUV", price: 40, img: "https://cdn.imagin.studio/s/7sl1LpslP9JIcodV_DcvoRZynwz9Lzu6RGmDSPc-PLZDbpdN9jklvV91lULnKWy-SmyRHOM1OKBIb5EH_jUutkdBlUz6NhzuEjbFM_41B7ZHVZVP9D936ho20kz8Pi-_fWa0SPI0PoZIaO5R_C0voUX919kiVZy-2X3X9TbU6OLdSVJ1b9md49VtmnU_nEy7uW3SEQqNqeucNaptF9jYTtkqadROjaH_1X8mdTK4uP6FJaGhStTsktEfZYhOrfDC8RGqgWOM_d7Vea5hS8CgvtkUhkkj_Px6qW2LJVvY4OvVYZpJE3jUuthZzhlT2fD26T3OcHKdqekL1ZoZG-jQ5RhspxAfjNTm6X26bT64ZL71fYoYH8ik6tkhzhkDnMyXuGinBB-c7I79EdZ1P9Gcksl9um0_kMy62DWudQvY0ObZ7a5VV9g4zo046kVS1KA" },
  { id: 5, name: "Porsche Panamera", type: "Sedan", price: 35, img: "https://www.pngplay.com/wp-content/uploads/15/Black-Porsche-Background-PNG-Image.png" },
  { id: 6, name: "Porsche Macan", type: "SUV", price: 50, img: "https://d2qldpouxvc097.cloudfront.net/image-by-path?bucket=a5-gallery-serverless-prod-chromebucket-1iz9ffi08lwxm&key=429129%2Ffront34%2Flg" },
];



export default function ViewDetails() {
  const { id } = useParams();   // id ni URL dan olamiz
  const navigate = useNavigate();
  const car = cars.find(c => c.id === Number(id));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!car) return <h1>Car Not Found</h1>;

  return (
    <>
      <Header />

      <Container>
        {/* LEFT */}
        <Left>

          <Title>
            {car.name}
            <Price>${car.price}<span>/ day</span></Price>
          </Title>

          <MainCarImg src={car.img} />

          {/* Thumbnails (3 pcs like image) */}
          <Thumbnails>
            <Thumb src={car.img} />
            <Thumb src={car.img} />
            <Thumb src={car.img} />
          </Thumbnails>
        </Left>

        {/* RIGHT */}
        <Right>
          <SectionTitle>Technical Specification</SectionTitle>

          <SpecsBox>
            <SpecItem><SpecTitle>Gearbox</SpecTitle><SpecValue>Automatic</SpecValue></SpecItem>
            <SpecItem><SpecTitle>Fuel</SpecTitle><SpecValue>95</SpecValue></SpecItem>
            <SpecItem><SpecTitle>Drive</SpecTitle><SpecValue>FWD</SpecValue></SpecItem>
            <SpecItem><SpecTitle>A/C</SpecTitle><SpecValue>Yes</SpecValue></SpecItem>
            <SpecItem><SpecTitle>Seats</SpecTitle><SpecValue>4</SpecValue></SpecItem>
          </SpecsBox>

          <RentBtn>Rent a car</RentBtn>

          <SectionTitle>Car Equipment</SectionTitle>

          <EquipList>
            <Equip><Dot /> ABS</Equip>
            <Equip><Dot /> GPS</Equip>
            <Equip><Dot /> Airbags</Equip>
            <Equip><Dot /> Auto Conditioner</Equip>
            <Equip><Dot /> AM/FM Radio</Equip>
          </EquipList>
        </Right>
      </Container>

      {/* OTHER CARS SECTION */}
      <OtherCarsContainer>
        <OtherTitle>Other cars</OtherTitle>
<Grid>
  {cars.slice(0, 6).map(item => (
    <Card key={item.id}>
      <CarImg src={item.img} />
      <CarName>{item.name}</CarName>
      <CarPrice>${item.price} / day</CarPrice>

      <Btn  onClick={() => navigate(`/details/${item.id}`)}>
        View Details
      </Btn>
    </Card>
  ))}
</Grid>

      </OtherCarsContainer>

      <Footer />
    </>
  );
}

/* --------------------- STYLES --------------------- */
/* --------------------- STYLES --------------------- */

const Container = styled.div`
  width: 100%;
  padding: 40px 160px;
  display: flex;
  justify-content: space-between;
  gap: 40px;

  @media(max-width:1300px){
    padding: 40px 80px;
  }

  @media(max-width:1200px){
    padding: 40px;
    flex-direction: column;
    align-items: center;
  }
`;

const Left = styled.div`
  max-width: 600px;

  @media(max-width:600px){
    width: 100%;
  }
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: 600;

  @media(max-width:600px){
    font-size: 26px;
  }
`;

const Price = styled.span`
  color: #5a3ffb;
  font-size: 26px;
  margin-left: 10px;

  @media(max-width:600px){
    font-size: 22px;
  }

  span {
    font-size: 18px;
    color: #777;
  }
`;

const MainCarImg = styled.img`
  width: 520px;
  max-width: 100%;
  margin-top: 20px;
  opacity: 0.8;
  border-radius: 12px;
`;

const Thumbnails = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 12px;
  flex-wrap: wrap;
`;

const Thumb = styled.img`
  width: 120px;
  height: 70px;
  border-radius: 12px;
  object-fit: cover;

  @media(max-width:500px){
    width: 31%;
    height: 60px;
  }
`;

const Right = styled.div`
  width: 430px;

  @media(max-width:1200px){
    width: 100%;
  }
`;

const SectionTitle = styled.h3`
  margin-top: 20px;
  font-size: 22px;
  margin-bottom: 12px;

  @media(max-width:600px){
    font-size: 19px;
  }
`;

const SpecsBox = styled.div`
  background: #f6f6f6;
  padding: 25px;
  border-radius: 16px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;

  @media(max-width:600px){
    grid-template-columns: repeat(2, 1fr);
  }
`;

const SpecItem = styled.div`
  text-align: center;
`;

const SpecTitle = styled.p`
  color: #777;
  font-size: 13px;
`;

const SpecValue = styled.h4`
  font-size: 16px;
`;

const RentBtn = styled.button`
  width: 100%;
  height: 52px;
  border: none;
  border-radius: 12px;
  margin: 20px 0;
  background: #6f54ff;
  color: white;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background: #5a3ffb;
  }
`;

const EquipList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Equip = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 15px;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  background: #6f54ff;
  border-radius: 50%;
`;

/* ------------ Other Cars ------------ */

const OtherCarsContainer = styled.div`
  padding: 40px 160px;

  @media(max-width:1300px){
    padding: 40px 80px;
  }

  @media(max-width:1200px){
    padding: 40px;
  }
`;

const OtherTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 28px;
  font-weight: 600;

  @media(max-width:600px){
    font-size: 24px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 22px;

  @media(max-width:900px){
    grid-template-columns: repeat(2,1fr);
  }

  @media(max-width:600px){
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: #f3f3f3;
  padding: 20px;
  border-radius: 18px;
  text-align: center;
`;

const CarImg = styled.img`
  width: 100%;
  opacity: .6;
`;

const CarName = styled.h3`
  font-size: 20px;
  margin-top: 10px;
`;

const CarPrice = styled.p`
  color: #5a3ffb;
  margin-top: 4px;
  font-weight: bold;
`;

const Btn = styled.button`
  width: 100%;
  height: 46px;
  border: none;
  background: #6f54ff;
  color: #fff;
  border-radius: 12px;
  margin-top: 14px;
  cursor: pointer;

  &:hover {
    background: #5a3ffb;
  }
`;
