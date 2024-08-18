import React from "react";
import styled from "styled-components";

function MainView() {
  /* const url = new URL("/mainBg.png", import.meta.url).href; */
  const url =
    "/room1.webp";
  return (
    <Wrapper>
      <MainCard>
        <InfoCard>
          <h2>Who are we</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque,
            deleniti ipsam ut alias esse necessitatibus odit earum quae
            repellendus voluptas est adipisci, obcaecati velit accusantium?
            Numquam iure laudantium placeat debitis!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum,
            officiis ratione alias blanditiis ullam repellat molestias
            repudiandae sed pariatur tenetur explicabo dolores eum eligendi
            iusto error voluptatibus neque corrupti voluptatum!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Exercitationem perspiciatis, tenetur dicta saepe, dolores.
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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque,
            deleniti ipsam ut alias esse necessitatibus odit earum quae
            repellendus voluptas est adipisci, obcaecati velit accusantium?
            Numquam iure laudantium placeat debitis!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum,
            officiis ratione alias blanditiis ullam repellat molestias
            repudiandae sed pariatur tenetur explicabo dolores eum eligendi
            iusto error voluptatibus neque corrupti voluptatum!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Exercitationem perspiciatis, tenetur dicta saepe, dolores.
          </p>
        </InfoCard>
      </MainCard>
      <MainCard>
        <InfoCard>
          <h2>Dining</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque,
            deleniti ipsam ut alias esse necessitatibus odit earum quae
            repellendus voluptas est adipisci, obcaecati velit accusantium?
            Numquam iure laudantium placeat debitis!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum,
            officiis ratione alias blanditiis ullam repellat molestias
            repudiandae sed pariatur tenetur explicabo dolores eum eligendi
            iusto error voluptatibus neque corrupti voluptatum!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Exercitationem perspiciatis, tenetur dicta saepe, dolores.
          </p>
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
`;
const MainCard = styled.div`
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const InfoCard = styled.div`
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px 24px;
`;
const ImageWrapper = styled.div`
  flex: 1 1 50%;
  overflow: hidden;
`;

export default MainView;
