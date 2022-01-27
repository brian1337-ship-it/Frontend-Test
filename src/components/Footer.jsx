import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <FooterContainer>
      <FooterReturnSection>
        <span onClick={scrollToTop}>
          <StyledReturnsvg
            id="arrow-up"
            viewBox="0 0 32 32"
            width="14px"
            height="100%"
          >
            <title>Arrow up</title>
            <polygon points="9,8 16,0 23,8"></polygon>
            <line
              stroke="#000"
              stroke-width="2"
              x1="16"
              y1="4.228"
              x2="16"
              y2="32"
            ></line>
          </StyledReturnsvg>
          <span>Return to top</span>
        </span>
      </FooterReturnSection>
      <FootSection>
        <FootText>
          <FootTextWrap>
            <p></p>
            <p>
              <span>
                © Proximity Worldwide 2018. All Rights Reserved.&nbsp;
                <a href="/privacy-policy" title="Privacy Statement">
                  Privacy Statement.
                </a>
              </span>
            </p>
            <p></p>
          </FootTextWrap>
        </FootText>

        <ul>
          <li>
            <a
              href="https://www.linkedin.com/company/proximity-worldwide "
              target="_blank"
              rel="noreferrer"
            >
              <img src="/images/linkedin.png" alt="LinkedIn" title="LinkedIn" />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/ProximityWW"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/images/twitter.png" alt="Twitter" title="Twitter" />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/ProximityWorldwide"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/images/facebook.png" alt="Facebook" title="Facebook" />
            </a>
          </li>
        </ul>
      </FootSection>
    </FooterContainer>
  );
};

export default Footer;

const FootTextWrap = styled.div`
  background: transparent !important;
  display: block;

  > p {
    font-size: 14px;
    text-align: left;
    margin: 5px 0;
    line-height: 22px;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  > p > span > a {
    background-color: transparent;
    cursor: pointer;
    text-decoration: underline;
    font-size: 14px;
    text-align: left;
    color: #fff;
  }
`;

const FootText = styled.div`
  background: none !important;
  padding: 0;
  max-width: 75%;
  display: block;
  color: #fff;

  @media (max-width: 768px) {
    display: none;
  }
`;

const FootSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  height: 130px;
  padding: 0 6%;
  background: linear-gradient(270deg, #a88f00, #666042, #6e405c);
  background-size: 100%;
  background-repeat: no-repeat;
  color: #fff;
  text-align: right;

  > ul {
    padding: 0;
    display: block;
    list-style-type: none;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
    color: #fff;
    text-align: right;
  }

  > ul > li {
    margin-left: 0;
    display: inline;
    margin: 0 5px;
    list-style: none;
    text-align: -webkit-match-parent;
    transition: 0.5s;

    &:hover {
      opacity: 0.68;
    }
  }
`;

const StyledReturnsvg = styled.svg`
  left: -17px;
  transition: 0.25s;
  position: absolute;
  top: -1px;
`;
const FooterReturnSection = styled.div`
  padding: 30px 6%;
  text-align: right;
  display: block;
  font-family: Avenir-Book;
  font-size: 1em;
  line-height: 1.3;

  > span {
    cursor: pointer;
    position: relative;
    text-decoration: none;
    color: #3b2143;
    font-family: Avenir-Book;
    font-size: 16px;
    line-height: 36px;
    text-align: right;
  }
`;
const FooterContainer = styled.div`
  display: block;
  font-family: Avenir-Book;
  font-size: 1em;
  line-height: 1.3;
`;
