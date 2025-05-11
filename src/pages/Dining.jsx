import React from "react";
import styled from "styled-components";

const Dining = () => {
  return (
    <Wrapper>
      <ImageWrapper>
        <img src="./img30.webp" alt="Dining Area" />
      </ImageWrapper>
      <InfoCard>
        <Heading>Dining</Heading>
        <p>
          Experience the rich culinary heritage of Karnataka and beyond at our in-house restaurant. At <strong>Nature’s Lap Heritage Home & Resort</strong>, our chefs craft each dish with fresh, locally sourced ingredients, bringing authentic flavors to your plate.
        </p>
        <p>
          Whether you're enjoying a hearty breakfast with a view, a leisurely lunch surrounded by greenery, or a candle-lit dinner under the stars, our restaurant is designed to delight all your senses.
        </p>
        <p>
          We serve a variety of dishes—South Indian specialties, North Indian favorites, and select continental options—catering to diverse palates while maintaining a strong focus on traditional taste and wholesome nutrition.
        </p>
        <MenuLink
          href="./Natures_lap_heritage_menu.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Our Menu
        </MenuLink>
      </InfoCard>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;

  @media screen and (min-width: 900px) {
    flex-direction: row;
  }
`;

const InfoCard = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ImageWrapper = styled.div`
  flex: 1;
  overflow: hidden;
  max-height: 500px;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

const Heading = styled.h2`
  font-size: 2.2rem;
  color: #2c3e50;
  position: relative;
  margin-bottom: 16px;

  &::before {
    content: "";
    position: absolute;
    width: 28px;
    height: 5px;
    bottom: -2.5px;
    left: 5%;
    background-color: hsl(24, 94%, 50%);
  }

  &::after {
    content: "";
    position: relative;
    width: 100px;
    height: 1px;
    left: 0;
    background-color: hsl(24, 94%, 50%);
    display: block;
  }
`;

const MenuLink = styled.a`
  color: hsl(24, 94%, 50%);
  font-weight: bold;
  text-decoration: none;
  margin-top: 12px;
  transition: color 0.3s;

  &:hover {
    color: hsl(24, 100%, 40%);
    text-decoration: underline;
  }
`;

export default Dining;
