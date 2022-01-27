import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Omnicom = ({t}) => {
  return (
    <OmnicomContainer>
      <h3>{t("abouttitle5")}</h3>
      <p></p>
      <p>
        <span>
        {t("aboutdesc8")}
        </span>
      </p>
      <p></p>
    </OmnicomContainer>
  );
};

export default Omnicom;

const OmnicomContainer = styled.div` 
    color: #fff;
    margin: auto;
    max-width: 940px;
    padding: 50px 90px;
    position: relative;
    text-align: center;
    width: 75%;
    background-color: #6c63a0;
    background-size: 100%;
    background-repeat: no-repeat;
    display: block;
    font-family: Avenir-Book;

    > h3 {
        margin-bottom: 15px;
        color: #fff;
    max-width: 75%;
    margin: auto;
    font-weight: 400;
    font-size: 36px;
    line-height: 46px;
    font-family: Avenir-Book;
    text-align: center;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;

    }

    > p {
        color: #fff;
    max-width: 75%;
    margin: auto;
    font-family: Avenir-Book;
    font-size: 16px;
    line-height: 22px;
    display: block;
    
    text-align: center;
    }
`;
