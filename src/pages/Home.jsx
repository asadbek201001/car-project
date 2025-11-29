import React from "react";
import styled from "styled-components";

//components
import Header from "../components/Header";
import Footer from "../components/Footer";
import AfterCarDiv from "../components/AfterCarDiv";
import Card from "../components/Card";

//images

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  flex-direction: column;
  background-color: #ffffff;
  font-family: Arial, Helvetica, sans-serif;
`;

const CarCard1 = styled.div`
  width: 1296px;
  height: 660px;
  background-color: #5937E0;
  border-radius: 40px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const CarCard2 = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
`;

const CarCard3 = styled.div`
  width: 30%;
  height: 70%;
  background-color: #ffff;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
`;

const CardText = styled.h1`
  font-size: 60px;
`;
const Button1 = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 10px;
  background-color: orange;
  text-align: center;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  transition: 0.3s;
  position: relative;
  z-index: 10;
  color: white;

  &:hover {
    background-color: #ff8707;
    cursor: pointer;
  }
`;

const SelectBox = styled.select`
  width: 100%;
  background-color: #fafafa;
  border: 0;
  border-radius: 10px;
  height: 12%;
  padding-left: 10px;
  color: black;
  font-size: 15px;
  appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg width='16' height='16' xmlns='http://www.w3.org/2000/svg'><path d='M4 6l4 4 4-4' stroke='black' fill='none' stroke-width='2' stroke-linecap='round'/></svg>");
  background-repeat: no-repeat;
  background-position: right 15px center;
`;

const DateBox = styled.select`
  width: 100%;
  background-color: #fafafa;
  border: 0;
  border-radius: 10px;
  height: 12%;
  padding-left: 10px;
  color: black;
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
export default function Home() {
  return (
    <>
      <HomeContainer>
        <Header />

        <CarCard1>
          <CarCard2>
            <CardText>
              Experience the road <br /> like never before
            </CardText>
          <p>
  <p>Aliquam adipiscing velit semper morbi. Purus non eu</p>
  <p>cursus porttitor tristique et gravida. Quis nunc interdum</p>
  <p>gravida ullamcorper</p>
</p>

            <Button1>View all cars</Button1>
          </CarCard2>

          <CarCard3>
            <h2>Book your car</h2>

            <InputCtn>
              <SelectBox>
                <option>Car type</option>
                <option>Sedan</option>
                <option>SUV</option>
                <option>Sport</option>
                <option>Electric</option>
              </SelectBox>

              <SelectBox>
                <option>Place of rental</option>
                <option>Sedan</option>
                <option>SUV</option>
                <option>Sport</option>
                <option>Electric</option>
              </SelectBox>

              <SelectBox>
                <option>Place of return</option>
                <option>Sedan</option>
                <option>SUV</option>
                <option>Sport</option>
                <option>Electric</option>
              </SelectBox>

               <DateBox>
                <option>Return date</option>
                <option>Sedan</option>
                <option>SUV</option>
                <option>Sport</option>
                <option>Electric</option>
              </DateBox>

              <button>Book now</button>

              </InputCtn>
          </CarCard3>
        </CarCard1>
       
        </HomeContainer>
        <AfterCarDiv />
        <Card />
        <Footer /> 

             
           
      
    </>
  );
}
