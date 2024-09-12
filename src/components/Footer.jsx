import React, { forwardRef } from "react";
import styled from "styled-components";
import Logo from "./Logo";

function Footer(props, footerRef) {
  return (
    <Wrapper ref={footerRef}>
      <FooterContentWrapper>
        <Reservations>
          <Heading>Reservations</Heading>
          <FooterItem>
            <WhiteIcon src="/phone-call.svg" />
            <div>
              <p>
                <a href="tel:+919449229249">+91 9449229249</a>
              </p>
              <a href="tel:+919482607000">+91 9482607000</a>
            </div>
          </FooterItem>
          <FooterItem>
            <WhiteIcon src="/envelope.svg" />
            <a href="mailto:info@natureslap.in">info@natureslap.in</a>
          </FooterItem>
          <FooterItem>
            <WhiteIcon src="/marker.svg" />
            <p>
              Behind JSW Model High School Vaddu, Near Hill Side Township,
              Vaddu, Bellary, Karnataka 583123
            </p>
          </FooterItem>
        </Reservations>
        <PlaceInfo>
          <Logo />
          <p>
            Escape to tranquility in the heart of Ballari.we strive to create
            unforgettable experiences that connect you with nature and luxury.
          </p>
          <p>© 2024 Natureslap Resort. All rights reserved.</p>
        </PlaceInfo>
        <Links>
          <Heading>Quick Links</Heading>
          <FooterItem>
            <Icon src={new URL("/social.png", import.meta.url).href} />
            <a href="whatsapp Link">+91 9449229249</a>
          </FooterItem>
          <FooterItem>
            <Icon src={new URL("/destination.png", import.meta.url).href} />
            <a href="https://maps.app.goo.gl/UeyLrmfsZ3ZwXD9L8?g_st=com.google.maps.preview.copy">
              Get Directions
            </a>
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
    text-underline-offset: 4px;
    text-decoration-color: #b393d3;
  }
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

const Reservations = styled.div`
  flex: 1 1 0;
`;
const PlaceInfo = styled.div`
  flex: 2 1 0;
  text-align: center;
`;
const Links = styled.div`
  flex: 1 1 0;
  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: flex-end;
  }
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

export default forwardRef(Footer);
