import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import { Menu } from "@styled-icons/boxicons-regular/Menu";
import { Close } from "@styled-icons/evaicons-solid/Close";
import { useDispatch } from "react-redux";
import { toggleLanguage, toggleMobileMenu } from "../features/headerSlice";
import { useSelector } from "react-redux";
import { Trans, useTranslation } from "react-i18next";

const Header = () => {
  const dispatch = useDispatch();

  // Pull header state from redux store
  const { menuOpen, pages, language } = useSelector((state) => state.header);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  const changeLanguage = (lang) => {
    dispatch(toggleLanguage(lang));
  };

  // useEffect(() => {
  //   i18n.changeLanguage(language);
  // }, [language]);

  const openMobileMenu = () => {
    if (!menuOpen) {
      // Push new mobile menu state to redux store
      dispatch(toggleMobileMenu(true));
    }
  };

  const closeMobileMenu = () => {
    if (menuOpen) {
      // Push new mobile menu state to redux store
      dispatch(toggleMobileMenu(false));
    }
  };

  return (
    <HeaderContainer bgcolor={color}>
      <StyledLink to="/">
        <img src="/images/pww.svg" alt="" />
      </StyledLink>

      <RightSection>
        <MenuItems bgcolor={color}>
          <ul>
            {pages &&
              pages.map((page, index) => (
                <li key={index}>
                  <StyledNavLink to={page.path}>{page.name}</StyledNavLink>
                </li>
              ))}
          </ul>
          <ButtonWrap bgcolor={color}>
            <button onClick={() => changeLanguage("en")}>
              <strong>EN</strong>
            </button>
            <button onClick={() => changeLanguage("fr")}>FR</button>
          </ButtonWrap>
        </MenuItems>

        <Burger>
          <BurgerOpen onClick={openMobileMenu} />
          <MobileMenu show={menuOpen}>
            <BurgerCloseWrapper>
              <BurgerClose onClick={closeMobileMenu} />
            </BurgerCloseWrapper>
            <ul>
              {pages &&
                pages.map((page, index) => (
                  <li key={index}>
                    <StyledNavLink to={page.path} onClick={closeMobileMenu}>
                      {page.name}
                    </StyledNavLink>
                  </li>
                ))}
            </ul>
          </MobileMenu>
        </Burger>
      </RightSection>
    </HeaderContainer>
  );
};

export default Header;
const ButtonWrap = styled.div`
  border-color: ${(props) => (props.bgcolor ? "red" : "white")};
  border-style: solid;

  > button {
    background-color: transparent;
    border: none;
    color: ${(props) => (props.bgcolor ? "red" : "white")};
    font-size: 13px;
    padding: 5px 10px;
    cursor: pointer;
  }
`;

const HeaderContainer = styled.div`
  color: ${(props) => (props.bgcolor ? "red" : "white")};
  background-color: ${(props) => (props.bgcolor ? "white" : "transparent")};
  min-height: 60px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 50;
  padding: 10px 100px;

  /* max-width: 1736px; */
  top: 0;
  left: 0;
  right: 0;

  @media (max-width: 1024px) {
    padding: 10px 40px;
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
  }
`;

const RightSection = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  flex: 1;
`;

const Burger = styled.div``;

const MobileMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    padding: 20px;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    transform: ${(props) =>
      props.show ? "translateX(0)" : "translateX(100%)"};
    transition: transform 0.2s;
    > ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
    }

    > ul > li > a {
      padding: 15px 0;
      font-family: Avenir-Book;
      font-weight: 600;
      font-size: 25px;
      color: black;
      transition: 0.5s;
    }
  }
`;

const BurgerOpen = styled(Menu)`
  display: none;

  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
    color: white;
    height: 30px;
    width: 30px;
  }
`;
const BurgerCloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const BurgerClose = styled(Close)`
  display: none;

  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
    color: black;
    height: 40px;
    width: 40px;
  }
`;

const StyledLink = styled(Link)`
  > img {
    height: 70px;
    width: auto;

    @media (max-width: 768px) {
      height: 40px;
    }
  }
`;

const StyledNavLink = styled(NavLink)`
  /* text-decoration: ${(props) => {
    return props.style
      ? (isActive) => (isActive ? "underline" : "none")
      : "none";
  }}; */
  &:hover {
    color: #3b0d0d;
  }
  &[class*="active"] {
    color: black;
    font-weight: bolder;
  }
`;
const MenuItems = styled.nav`

  display: flex;
  align-items: center;
  
  > ul {
    display: flex;
    align-items: center;
  }

  > ul > li > a {
    padding: 0 10px;
    font-family: Avenir-Book;
    font-size: 16px;
    color: ${(props) => (props.bgcolor ? "red" : "white")};
    transition: 0.5s;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
