import React from "react";
import styled from "styled-components";


//images
import Location from "../assets/location.png";
import MiniCar from "../assets/miniCar.png";
import Wallet from "../assets/wallet.png";




const AfterCarDivCtn = styled.div`
  width: 1500px;
  height: 300px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-content: space-evenly;
  gap: 20px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    height: auto;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    width: 100%;
    height: auto;
  }
`;


const EacherAfterDivCtn = styled.div`
  width: auto;
  height: 194px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  text-align: center;
  font-weight: 300;


  img {
      width: 50px;
      height: 50px;
  }

  h2 {
      font-weight: 500;
  }
`;


export default function AfterCarDiv() {
    return (
        <>

        <AfterCarDivCtn>
            <EacherAfterDivCtn>
                <img src={Location} alt="" />
                <h2>Availability</h2>
                <p>
                    <p>Diam tincidunt tincidunt erat at semper </p>
                    <p>fermentum. Id ultricies quis</p>
                </p>
            </EacherAfterDivCtn>

            <EacherAfterDivCtn>
                <img src={MiniCar} alt="" />
                <h2>Comfort</h2>
                <p>
                    <p>Gravida auctor fermentum morbi vulputate</p>
                    <p>ac egestas orcietium convallis</p>
                </p>
                </EacherAfterDivCtn>

                <EacherAfterDivCtn>
                    <img src={Wallet} alt="" />
                    <h2>Savings</h2>
                    <p>
                        <p>Pretium convallis id diam sed commodo</p>
                        <p>vestibulum lobortis volutpat</p>
                    </p>
                </EacherAfterDivCtn>




        </AfterCarDivCtn>

        
        </>
    )
}