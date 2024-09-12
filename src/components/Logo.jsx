import React from "react";
import styled from "styled-components";

function Logo() {
  return (
    <LogoWrapper>
      <Heading>Nature's Lap</Heading>
      <Info>Heritage HomeStay & Resort</Info>
    </LogoWrapper>
  );
}

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

const Heading = styled.p`
  font-size: 2.5rem;
  font-weight: 600;
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  background-image: linear-gradient(to bottom left, #b393d3, #2ad0ac);
  line-height: 1;
`;

const Info = styled(Heading)`
    font-size: 1rem;
    background-image: linear-gradient(to bottom left, #2ad0ac, #b393d3);
`


export default Logo;
