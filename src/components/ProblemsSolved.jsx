import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const ProblemsSolved = ({ t }) => {
  return (
    <ProblemsSolvedContainer>
      <Fade bottom>
        <img src="/images/pencil-2-v2-cropped.gif" alt="pencil" />
        <h2>{t("hometitle4")}</h2>
        <MiniCardSection>
          <article>
            <a href="#">
              <img src="/images/cochlear_o.jpg" alt="" />
              <MinicardInfo>
                <h5>{t("homedescription2")}</h5>
                <span>{t("homedescription4")}</span>
              </MinicardInfo>
            </a>
          </article>
          <article>
            <a href="#">
              <img src="/images/afll.jpg" alt="" />
              <MinicardInfo>
                <h5>{t("homedescription3")}</h5>
                <span>{t("homedescription4")}</span>
              </MinicardInfo>
            </a>
          </article>
        </MiniCardSection>
        <a href="/work">{t("homedescription5")}</a>
      </Fade>
    </ProblemsSolvedContainer>
  );
};

export default ProblemsSolved;

const MinicardInfo = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  bottom: 6px;
  height: calc(100% - 6px);
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 40px 40px;
  position: absolute;
  color: #fff;
  line-height: 22px;
  cursor: pointer;
  text-align: left;
  font-size: 1em;
  font-family: Avenir-Book;
  transition: 0.5s;

  &:hover {
    opacity: 0.68;
  }

  > h5 {
    color: #fff;
    max-width: 280px;
    font-weight: 400;
    font-size: 26px;
    letter-spacing: 1px;
    line-height: 36px;
    margin: 20px 0;
    font-family: Avenir-Book;
    display: block;
    margin-block-start: 1.67em;
    margin-block-end: 1.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    text-align: left;
  }

  > span {
    text-decoration: underline;
    color: #fff;
    line-height: 22px;
    cursor: pointer;
    text-align: left;
    font-size: 1em;
  }
`;

const MiniCardSection = styled.div`
  display: flex;
  text-align: center;

  > article {
    margin-right: 10px;
    overflow: hidden;
    text-align: left;
    width: inherit;
    position: relative;
    display: block;
    font-family: Avenir-Book;
  }

  > article > a {
    display: inline-block;
    line-height: 22px;
    color: #3b2143;
    font-family: Avenir-Book;
    background-color: transparent;
    cursor: pointer;
    text-decoration: underline;
    text-align: left;
  }

  > article > a > img {
    height: 300px;
    object-fit: cover;
    width: 100%;
    border-style: none;
    line-height: 22px;
    color: #3b2143;
    font-family: Avenir-Book;
    cursor: pointer;
    text-align: left;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const ProblemsSolvedContainer = styled.div`
  text-align: center;
  margin: auto;
  padding: 0 6%;
  display: block;
  font-family: Avenir-Book;

  > img {
    margin-bottom: 10px;
    border-style: none;
    text-align: center;
  }

  > h2 {
    font-family: Avenir-Black;
    margin-bottom: 20px !important;
    font-weight: 700;
    color: red;
    text-transform: uppercase;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 2px;
    margin: 0;
    text-align: center;
  }

  > a {
    display: flex;
    justify-content: center;
    margin: 55px 0;
    color: #3b2143;
    font-family: Avenir-Book;
    font-size: 16px;
    line-height: 36px;
    cursor: pointer;
    text-decoration: underline;
    text-align: center;
    transition: 0.5s;

    &:hover {
      color: red;
    }
  }
`;
