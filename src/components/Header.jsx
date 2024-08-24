import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Header({ scrollToFooter }) {
  const url = new URL("/mainBg.png", import.meta.url).href;
  console.log(url);
  return (
    <Wrapper>
      <MainImage src={url} />

      <List>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/rooms">Rooms</StyledNavLink>
        <LogoListItem>LOGO</LogoListItem>
        <StyledNavLink to="/dining">Restaurant</StyledNavLink>
        <ListItem onClick={scrollToFooter}>Contact Us</ListItem>
      </List>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  width: 100%;
`;

const MainImage = styled.img``;

const List = styled.ul`
  width: 100%;
  max-width: 1200px;
  overflow: hidden;
  list-style: none;
  display: flex;
  gap: 48px;
  padding: 8px 24px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  /*  backdrop-filter: blur(1px); */
  background-color: hsla(0, 0%, 0%, 0.3);
`;

const ListItem = styled.li`
  font-weight: 600;
  font-size: 1.2rem;
  color: white;
  text-decoration: none;
  cursor: pointer;
`;

const StyledNavLink = styled(NavLink)`
  font-weight: 600;
  font-size: 1.2rem;
  color: white;
  text-decoration: none;
  &.active {
    color: #2ad0ac;
  }
`;

const LogoListItem = styled(ListItem)`
  margin: 0 auto;
  cursor: initial;
`;

export default Header;
