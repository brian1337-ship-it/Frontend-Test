import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { useDispatch } from "react-redux";
import { navigateToSection } from "../features/headerSlice";

const HowWeDoIt = ({ t }) => {
  const dispatch = useDispatch();
  return (
    <HowWeDoItContainer>
      <Fade bottom>
        <h2>{t("hometitle2")}</h2>
        <h3>{t("hometitle3")}</h3>
        <article>
          <img src="/images/hwd_banner.jpg" alt="how we do it banner" />
          <CardInfoSection>
            <p>
              <span>{t("homedescription.part1")}&nbsp;</span>
              <a href="/about">{t("homedescription.part2")}</a>
              <span>,&nbsp;</span>
              <a href="/about">{t("homedescription.part3")}</a>
              <span>&nbsp;and&nbsp;</span>
              <a
                href="/about"
                onClick={() => dispatch(navigateToSection("partners"))}
              >
                {t("homedescription.part4")}
              </a>
              <span>{t("homedescription.part5")}</span>
            </p>
          </CardInfoSection>
        </article>
      </Fade>
    </HowWeDoItContainer>
  );
};

export default HowWeDoIt;

const HowWeDoItContainer = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 100px;
  margin-top: 50px;

  > h2 {
    font-weight: 700;
    color: red;
    text-transform: uppercase;
    font-family: Avenir-Black;
    color: #e30613;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 2px;
    margin: 0;
    text-align: center;
  }

  > h3 {
    width: 500px;
    margin: 5px auto 40px;
    font-weight: 400;
    font-family: Avenir-Book;
    font-size: 36px;
    line-height: 46px;
    color: #3b2143;
    text-align: center;
  }

  > article {
    display: block;
    text-align: center;
    font-family: Avenir-Book;
  }

  > article > img {
    text-align: center;
    width: 100%;
    border-style: none;
  }

  @media (max-width: 1024px) {
    padding: 10px 40px;
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
  }
`;

const CardInfoSection = styled.div`
  margin-top: -18%;
  min-height: 260px;
  padding: 60px 80px 55px;
  background-color: #fff;
  margin: -220px 6% 0;
  position: relative;
  text-align: center;

  > p {
    font-size: 26px;
    line-height: 36px;
    font-family: Avenir-Book;
    text-align: center;
    color: #3b2143;
  }

  > p > a {
    line-height: 22px;
    color: #3b2143;
    font-family: Avenir-Book;
    background-color: transparent;
    cursor: pointer;
    text-decoration: underline;
    font-size: 26px;
  }
`;
