import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function HamburgurMenu({ scrollToFooter }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuRef = React.useRef();
  React.useEffect(() => {
    const listener = (event) => {
      if (!menuRef.current || menuRef.current.contains(event.target)) {
        return;
      }
      setIsMenuOpen(false);
    };
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, []);
  return (
    <Wrapper ref={menuRef}>
      <StyledBurger
        open={isMenuOpen}
        onClick={() => setIsMenuOpen((cur) => !cur)}
      >
        <div />
        <div />
        <div />
      </StyledBurger>
      <StyledMenu open={isMenuOpen}>
        {/* <a href="/">
          <span role="img" aria-label="about us">
            &#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;
          </span>
          About us
        </a>
        <a href="/">
          <span role="img" aria-label="price">
            &#x1f4b8;
          </span>
          Pricing
        </a>
        <a href="/">
          <span role="img" aria-label="contact">
            &#x1f4e9;
          </span>
          Contact
        </a> */}
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/rooms">Rooms</StyledNavLink>
        <StyledNavLink to="/dining">Restaurant</StyledNavLink>
        <ListItem onClick={scrollToFooter}>Contact Us</ListItem>
      </StyledMenu>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  @media screen and (min-width: 900px) {
    display: none;
  }
`;

const theme = {
  primaryDark: "#ff0000",
  primaryLight: "#EFFFFA",
  primaryHover: "#343078",
  mobile: "576px",
};

const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) =>
      open ? theme.primaryDark : theme.primaryLight};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    &:first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }

    z-index: 1;
    margin-left: ${({ open }) => (open ? "16px" : "0px")};
  }
`;

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  background: hsla(0, 0%, 0%, 0.6);
  /* height: 100vh; */
  text-align: left;
  padding: 16px;
  padding-top: 72px;
  position: absolute;
  top: 0px;
  left: 0;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.3s ease-in-out;

  /* a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;
    &:hover {
      color: ${theme.primaryHover};
    }
  } */
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

export default HamburgurMenu;
