// ViewDetails.jsx
import { useEffect } from "react";

import { useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/RealFooter";
import { cars } from "../pages/Vehicles";

export default function ViewDetails() {
  const { id } = useParams();
  const car = cars.find(c => c.id === Number(id));
  
useEffect(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
}, []);



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
              <Btn>View Details</Btn>
            </Card>
          ))}
        </Grid>
      </OtherCarsContainer>

      <Footer />
    </>
  );
}

/* --------------------- STYLES --------------------- */

const Container = styled.div`
  width: 100%;
  padding: 40px 160px;
  display: flex;
  justify-content: space-between;

  @media(max-width:1200px){
    padding: 40px;
    flex-direction: column;
  }
`;

const Left = styled.div``;

const Title = styled.h2`
  font-size: 32px;
  font-weight: 600;
`;

const Price = styled.span`
  color: #5a3ffb;
  font-size: 26px;
  margin-left: 10px;

  span {
    font-size: 18px;
    color: #777;
  }
`;

const MainCarImg = styled.img`
  width: 520px;
  margin-top: 20px;
  opacity: 0.8;
`;

const Thumbnails = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 14px;
`;

const Thumb = styled.img`
  width: 120px;
  height: 70px;
  border-radius: 12px;
  object-fit: cover;
  opacity: 0.9;
`;

const Right = styled.div`
  width: 430px;
`;

const SectionTitle = styled.h3`
  margin-top: 20px;
  font-size: 22px;
  margin-bottom: 12px;
`;

const SpecsBox = styled.div`
  background: #f6f6f6;
  padding: 25px;
  border-radius: 16px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
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

  @media(max-width:1200px){
    padding: 40px;
  }
`;

const OtherTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 28px;
  font-weight: 600;
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
