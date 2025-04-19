import React from "react";
import styled from "styled-components";

const AboutUs = () => {
  return (
    <Wrapper>
      <ImageWrapper>
        <img src="./img26.webp" alt="Resort Landscape" />
      </ImageWrapper>
      <InfoCard>
        <Heading>About Us</Heading>
        <p>
          Welcome to <strong>Nature's Lap Heritage Home & Resort</strong>, a tranquil escape in the heart of Ballari, Karnataka. Rooted in nature and wrapped in luxury, our resort is crafted to help you reconnect with what truly matters—peace, nature, and simplicity.
        </p>
        <p>
          Founded with a passion for sustainable hospitality and deep respect for the local culture, we offer an experience where every detail—from architecture to service—is carefully curated to provide serenity and comfort. Our mission is to blend traditional heritage with modern comfort, creating a space where guests can feel at home while enjoying the lush surroundings and timeless beauty of nature.
        </p>
        <p>
          Whether you're joining us for a family vacation, romantic getaway, corporate retreat, or solo soul-searching journey, our aim is to ensure your stay is filled with rejuvenation, peace, and unforgettable moments. Let the songs of birds wake you up, enjoy meals made with love and local produce, and find yourself enchanted by the rustic charm of our surroundings.
        </p>
        <p>
          At Nature's Lap, we believe that true luxury lies in authenticity, care, and connection—with yourself and the world around you. Our team is dedicated to delivering warm, personalized hospitality to ensure that every moment you spend here is magical.
        </p>
        <p>
          In addition to our inviting accommodations and flavorful dining options, we offer curated experiences such as guided nature walks, cultural evenings, wellness therapies, and bonfire nights to make your stay as memorable as possible. We're more than just a place to stay—we're a destination where memories are made.
        </p>
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
    background-color: hsl(0, 100%, 36%);
  }

  &::after {
    content: "";
    position: relative;
    width: 100px;
    height: 1px;
    left: 0;
    background-color: hsl(0, 100%, 36%);
    display: block;
  }
`;

export default AboutUs;
