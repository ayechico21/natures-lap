import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";

function Home() {
  /* const url = new URL("/mainBg.png", import.meta.url).href; */
  const url = "/room1.webp";
  const navigate = useNavigate();
  const location = useLocation();

  const handleDiningNavigatio = () => {
    navigate("/dining", { state: location, replace: true });
  };
  const handleRoomsNavigation = () => {
    navigate("/rooms", { state: location, replace: true });
  };
  return (
    <Wrapper>
      <MainCard>
        <InfoCard>
          <h2>Who are we</h2>
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
        <ImageWrapper>
          <img src={url} />
        </ImageWrapper>
      </MainCard>
      <MainCard>
        <ImageWrapper>
          <img src={url} />
        </ImageWrapper>
        <InfoCard>
          <h2>Rooms</h2>
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
          <NavButton onClick={handleRoomsNavigation}>Rooms</NavButton>
        </InfoCard>
      </MainCard>
      <MainCard>
        <InfoCard>
          <h2>Dining</h2>
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
          <NavButton onClick={handleDiningNavigatio}>Dining</NavButton>
        </InfoCard>
        <ImageWrapper>
          <img src={url} />
        </ImageWrapper>
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
`;

const InfoCard = styled.div`
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 32px;
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
  color: hsl(137, 82%, 37%);
  border: 1px solid currentColor;
  &:hover {
    background-color: hsl(137, 82%, 37%);
    color: white;
    font-weight: 600;
  }
`;

export default Home;
