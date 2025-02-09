import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import CurvyLines from "../components/CurvyLines";

function Home() {
  const url = "/pic12.webp";
  const navigate = useNavigate();
  const location = useLocation();

  const handleDiningNavigation = () => {
    navigate("/dining", { state: location, replace: true });
  };
  const handleRoomsNavigation = () => {
    navigate("/rooms", { state: location, replace: true });
  };
  return (
    <Wrapper>
      <MainCard>
      <ImageWrapper>
          <img src={url} />
        </ImageWrapper>
        <InfoCard>
          <Heading>Who are we</Heading>
          <p>
            Hi, Welcome to an exquisite retreat nestled in the serene landscapes
            of Ballari, Karnataka. At Nature's Lap, we offer a harmonious blend
            of luxury and nature, where every moment is a celebration of
            tranquility and comfort.
          </p>
          <p>
            Our resort is designed to provide you with an escape from the
            ordinary, immersing you in the soothing embrace of lush greenery,
            pristine air, and breathtaking views. Whether you are seeking a
            romantic getaway, a family vacation, or a solo retreat, We promise
            an experience that rejuvenates the soul and reconnects you with the
            beauty of the natural world.
          </p>
          <p>
            Indulge in our thoughtfully crafted experiences that range from
            serene forest walks and starlit dinners to rejuvenating spa sessions
            and cozy fireside evenings. We believe in the luxury of simplicity,
            where every detail is curated to offer you a serene and memorable
            stay.
          </p>
        </InfoCard>
        
      </MainCard>
      <ReversedMainCard>
        <InfoCard>
          <Heading>Rooms</Heading>
          <p>
            Each room is a sanctuary where the charm of nature meets the comfort
            of modern luxury. Our living spaces are thoughtfully crafted,
            bringing together the finest local craftsmanship and contemporary
            design to create an atmosphere that is both warm and inviting.{" "}
          </p>
          <p>
            The rooms are designed to be more than just places to rest; they are
            spaces where you can truly unwind and rejuvenate, surrounded by the
            tranquil beauty of the natural world. Whether you choose a cozy room
            with garden views or a spacious suite overlooking the rolling hills,
            every detail has been carefully curated to ensure a harmonious blend
            of elegance and comfort.
          </p>
          <p>
            From plush bedding and natural wood accents to soft lighting and
            private balconies, our rooms invite you to relax, recharge, and
            immerse yourself in the serene ambiance of our beloved resort.
          </p>
          {/* <NavButton onClick={handleRoomsNavigation}>Rooms</NavButton> */}
          <NavButton>Coming Soon</NavButton>
        </InfoCard>
        <ImageWrapper>
          <img src={url} />
        </ImageWrapper>
      </ReversedMainCard>
      <MainCard>
      <ImageWrapper>
          <img src={url} />
        </ImageWrapper>
        <InfoCard>
          <Heading>Dining</Heading>
          <p>
            Dining at our resort is an experience that tantalizes the senses and
            nourishes the soul. Our culinary offerings are a celebration of
            local flavors and international cuisine, prepared with the freshest
            ingredients sourced from our organic gardens and nearby farms.
          </p>
          <p>
            Whether you are enjoying a leisurely breakfast amidst the morning
            mist, a sumptuous lunch with panoramic views, or a romantic dinner
            under the starlit sky, every meal is crafted to delight your palate.
            Our chefs blend traditional recipes with modern techniques, creating
            dishes that are as visually stunning as they are delicious.{" "}
          </p>
          <p>
            From intimate dining settings to our open-air restaurant, each venue
            offers a unique ambiance that enhances your culinary journey. At
            Nature's Lap, we believe that food is not just sustenance, but an
            integral part of the overall experience, where every bite is a step
            closer to the heart of nature.
          </p>
          {/* <NavButton onClick={handleDiningNavigation}>Dining</NavButton> */}
          <NavButton>Coming Soon</NavButton>
        </InfoCard>
      </MainCard>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
`;
const MainCard = styled.div`
  display: flex;
  align-items: center;

 @media screen and (max-width: 900px){
  flex-direction: column;
 }

`;
const ReversedMainCard = styled(MainCard)`
   @media screen and (max-width: 900px){
  flex-direction: column-reverse;
 }
`
const InfoCard = styled.div`
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 32px;
`;

const Heading = styled.h2`
  position: relative;
  padding: 0;
  margin: 0;
  /* font-family: "Raleway", sans-serif; */
  font-style: italic;
  font-size: 2rem;
  color: #080808;
  -webkit-transition: all 0.4s ease 0s;
  -o-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;

  &::before {
    width: 28px;
    height: 5px;
    display: block;
    content: "";
    position: absolute;
    bottom: -2.5px;
    left: 5%;
    background-color: hsl(0, 100%, 36%);
  }
  &::after {
    width: 100px;
    height: 1px;
    display: block;
    content: "";
    position: relative;
    left: 0;
    background-color: hsl(0, 100%, 36%);
  }
`;

const ImageWrapper = styled.div`
  flex: 1 1 50%;
  overflow: hidden;
`;

const NavButton = styled.button`
  min-width: fit-content;
  width: 150px;
  max-width: 250px;
  margin: 0 auto;
  padding: 8px 16px;
  border-radius: 12px;
  border: 2px solid currentColor;
  /* color: hsl(137, 82%, 27%); */

  /*  background-color: hsl(137, 82%, 95%); */
  font-weight: 600;
  color: hsl(0, 100%, 36%);
  background-color: hsl(0, 100%, 95%);
  &:hover {
    /*  background-color: hsl(137, 82%, 37%); */
    background-color: hsl(0, 100%, 36%);
    color: white;
    font-weight: 600;
  }
`;

export default Home;
