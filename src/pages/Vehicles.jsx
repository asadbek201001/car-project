import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import CarList from "../components/Card";

export default function Vehicles() {
  const [filter, setFilter] = useState("All");

  return (
    <>
      <Header />

      <Title>Select a vehicle group</Title>

      {/* Figma style filter */}
      <FilterWrapper>
        {["All", "Sedan","Cabriolet","Pickup","Suv","Minivan"].map((btn) => (
          <FilterButton
            key={btn}
            active={filter === btn}
            onClick={() => setFilter(btn)}
          >
            {btn}
            {filter === btn && <ActiveLine />}
          </FilterButton>
        ))}
      </FilterWrapper>

      <CarList filter={filter} />
    </>
  );
}

/* ========== STYLES ========== */

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

  background: ${(props) => (props.active ? "#5937E0" : "#eaeaea")};
  color: ${(props) => (props.active ? "#fff" : "#000")};

  &:hover {
    background: ${(props) => (props.active ? "#5937E0" : "#d5d5d5")};
  }
`;

const ActiveLine = styled.div`
 
`;
