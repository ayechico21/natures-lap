import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";
import HamburgurMenu from "./HamburgerMenu";

function Header({ scrollToFooter }) {
  //const url = new URL("/mainBg.png", import.meta.url).href;
  let url = "/img26.webp";
  const location = useLocation();
  console.log("location => ", JSON.stringify(location));
  if (location?.pathname?.includes("room")) url = "/img12.webp";
  else if (location?.pathname?.includes("dining")) url = "/img27.webp";
  else if (location?.pathname?.includes("gallery")) url = "/img37.webp";
  else if (location?.pathname?.includes("about")) url = "/img16.webp";
  else if (location?.pathname?.includes("contact")) url = "/img22.webp";
  else if (location?.pathname?.includes("privacy")) url = "/img20.webp";
  else if (location?.pathname?.includes("refund")) url = "/img27.webp";
  else if (location?.pathname?.includes("risks")) url = "/img31.webp";
  else if (location?.pathname?.includes("terms")) url = "/img16.webp";
  return (
    <Wrapper>
      <MainImage src={url} />
      <ListWrapper>
        <List>
          <HamburgurMenu scrollToFooter={scrollToFooter} />
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/rooms">Rooms</StyledNavLink>
          <StyledNavLink to="/gallery">Gallery</StyledNavLink>
          <LogoListItem>
            <Logo />
          </LogoListItem>
          {/* <StyledNavLink to="/dining">Restaurant</StyledNavLink> */}
          <StyledNavLink to="/about">About Us</StyledNavLink>
          <StyledNavLink to="/contact">Contact Us</StyledNavLink>
          <ListItem onClick={scrollToFooter}>Policies</ListItem>
          {/* <StyledNavLink to="/privacy">Policies</StyledNavLink> */}
        </List>
      </ListWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex; /* Center the image within the container */
  justify-content: center; /* Center horizontally */
  align-items: center;
`;

const MainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ListWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  background-color: hsla(0, 0%, 0%, 0.6);
  padding: 8px 24px;
  @media screen and (max-width: 900px) {
    padding: 8px 4px;
  }
`;

const List = styled.ul`
  width: 100%;
  max-width: 1200px;
  overflow: hidden;
  list-style: none;
  display: flex;
  align-items: center;
  gap: 48px;
  margin: 0 auto;
  font-family: "Raleway", sans-serif;
  @media screen and (max-width: 900px) {
    padding: 0;
    gap: 0;
  }
`;

const ListItem = styled.li`
  font-weight: 600;
  font-size: 1.2rem;
  color: white;
  text-decoration: none;
  cursor: pointer;
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const StyledNavLink = styled(NavLink)`
  font-weight: 600;
  font-size: 1.2rem;
  color: white;
  text-decoration: none;
  &.active {
    color: #2ad0ac;
  }
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const LogoListItem = styled.li`
  font-weight: 600;
  font-size: 1.2rem;
  color: white;
  text-decoration: none;
  cursor: initial;
  margin: 0 auto;
  font-family: "Playfair Display", serif;
 
`;

export default Header;
