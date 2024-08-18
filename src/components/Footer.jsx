import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Wrapper>
      <FooterContentWrapper>
        <Reservations>
          <Heading>Reservations</Heading>
          <FooterItem>
            <WhiteIcon src={new URL("/phone-call.svg", import.meta.url).href} />
            <a href="tel:+9179006248087">+91 7906248087</a>
          </FooterItem>
          <FooterItem>
            <WhiteIcon src={new URL("/envelope.svg", import.meta.url).href} />
            <a href="mailto:test@gmail.com">sale@nautresLap.com</a>
          </FooterItem>
          <FooterItem>
            <WhiteIcon src={new URL("/marker.svg", import.meta.url).href} />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Similique harum aperiam mollitia fugit laboriosam error nihil
              natus at explicabo voluptas iure sunt, nisi aut voluptatibus ipsa
              sapiente saepe consequuntur incidunt?
            </p>
          </FooterItem>
        </Reservations>
        <PlaceInfo>
          <Heading>Logo</Heading>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum,
            dolorem. Perspiciatis enim veniam eius, fuga, quam consectetur
            numquam minima eligendi praesentium et facilis, amet consequatur eos
            voluptatum voluptatem impedit commodi.
          </p>
        </PlaceInfo>
        <Links>
          <Heading>Quick Links</Heading>
          <FooterItem>
            <Icon src={new URL("/social.png", import.meta.url).href} />
            <a href="whatsapp Link">+91 7906248087</a>
          </FooterItem>
          <FooterItem>
            <Icon src={new URL("/destination.png", import.meta.url).href} />
            <a href="maps link">Get maps directions</a>
          </FooterItem>
        </Links>
      </FooterContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  background-color: hsl(0, 0%, 20%);
  color: hsl(0, 0%, 100%);
`;

const FooterContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 16px;
  display: flex;
  gap: 24px;
  color: hsl(0, 0%, 100%);

  & > * {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  & a {
    color: currentColor;
  }
`;

const Reservations = styled.div`
  flex: 1 1 0;
`;
const PlaceInfo = styled.div`
  flex: 1 1 0;
`;
const Links = styled.div`
  flex: 1 1 0;
`;

const Heading = styled.p`
  font-weight: 600;
  /* font-size: 1.2rem; */
  padding-bottom: 8px;
`;

const FooterItem = styled.div`
  display: flex;
  gap: 16px;
`;

const Icon = styled.img`
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  overflow: hidden;
`;

const WhiteIcon = styled(Icon)`
  filter: invert(100%) sepia(100%) saturate(2%) hue-rotate(99deg)
    brightness(102%) contrast(101%);
`;

export default Footer;
