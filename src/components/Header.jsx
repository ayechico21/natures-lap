import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";
import HamburgurMenu from "./HamburgerMenu";

function Header({ scrollToFooter }) {
  //const url = new URL("/mainBg.png", import.meta.url).href;
  let url = "/pic10.webp";
  const location = useLocation();
  console.log("location => ", JSON.stringify(location));
  if (location?.pathname?.includes("room")) url = "/pic14.webp";
  else if (location?.pathname?.includes("dining")) url = "/pic8.webp";
  else if (location?.pathname?.includes("gallery")) url = "/pic12.webp";
  return (
    <Wrapper>
      <MainImage src={url} />
      <ListWrapper>
        <List>
          <HamburgurMenu scrollToFooter={scrollToFooter} />
          <StyledNavLink to="/">Home</StyledNavLink>
          {/* <StyledNavLink to="/rooms">Rooms</StyledNavLink> */}
          <LogoListItem>
            <Logo />
          </LogoListItem>
          {/* <StyledNavLink to="/dining">Restaurant</StyledNavLink> */}
          <StyledNavLink to="/gallery">Gallery</StyledNavLink>
          <ListItem onClick={scrollToFooter}>Contact Us</ListItem>
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
