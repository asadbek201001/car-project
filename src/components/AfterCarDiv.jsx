import React from "react";
import styled from "styled-components";

// images
import Location from "../assets/location.png";
import MiniCar from "../assets/miniCar.png";
import Wallet from "../assets/wallet.png";

const AfterCarDivCtn = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

const EacherAfterDivCtn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  text-align: center;
  font-weight: 300;
  padding: 10px;

  img {
    width: 50px;
    height: 50px;
    object-fit: contain;
  }

  h2 {
    font-weight: 500;
    font-size: 20px;
    margin: 10px 0;
  }

  p {
    font-size: 14px;
    line-height: 1.5;
    color: #555;
    margin: 0;
  }
`;

export default function AfterCarDiv() {
  return (
    <AfterCarDivCtn>
      <EacherAfterDivCtn>
        <img src={Location} alt="Availability" />
        <h2>Availability</h2>
        <div>
          <div>Diam tincidunt tincidunt erat at semper</div>
          <div>fermentum. Id ultricies quis</div>
        </div>
      </EacherAfterDivCtn>

      <EacherAfterDivCtn>
        <img src={MiniCar} alt="Comfort" />
        <h2>Comfort</h2>
        <div>
          <div>Gravida auctor fermentum morbi vulputate</div>
          <div>ac egestas orcietium convallis</div>
        </div>
      </EacherAfterDivCtn>

      <EacherAfterDivCtn>
        <img src={Wallet} alt="Savings" />
        <h2>Savings</h2>
        <div>
          <div>Pretium convallis id diam sed commodo</div>
          <div>vestibulum lobortis volutpat</div>
        </div>
      </EacherAfterDivCtn>
    </AfterCarDivCtn>
  );
}