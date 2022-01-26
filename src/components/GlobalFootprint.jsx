import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const GlobalFootprint = () => {
  return (
    <GlobalFootprintContainer>
      <img src="/images/world-map.gif" alt="map" />
      <GloballyLocalSection>
        <GloballyLocalText>
          <h2>Globally Local</h2>
          <h3>A Global Footprint and Feet on the Ground</h3>
          <p></p>
          <p>
            <span>
              Formed in 2001, Proximity operates in all major business hubs
              across the globe. We are a network of strong, locally significant
              agencies, a third of which have been recognized as Agency of the
              Year in the past three years. We provide access to regional
              centers of excellence in digital development, marketing enablement
              and performance media which are both highly effective and
              cost-efficient.
            </span>
          </p>
          <p></p>
        </GloballyLocalText>
        <Styledfigure>
          <img src="/images/space-v2-cropped.gif" alt="Space V2" />
        </Styledfigure>
      </GloballyLocalSection>
    </GlobalFootprintContainer>
  );
};

export default GlobalFootprint;

const Styledfigure = styled.figure`
  margin: 0;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 40px;
  margin-inline-end: 40px;
  text-align: center;

  > img {
    margin-top: 7%;
    min-height: 150px;
    margin-bottom: 0px;
    border-style: none;
    text-align: center;
  }
`;

const GloballyLocalText = styled.div`
  display: block;
  text-align: center;

  > h2 {
    margin-bottom: 25px;
    font-weight: 700;
    color: red;
    text-transform: uppercase;
    font-family: Avenir-Book;
    line-height: 21px;
    letter-spacing: 2px;
    margin: 0;
    display: block;
    text-align: center;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  > h3 {
    font-weight: 400;
    font-family: Avenir-Book;
    font-size: 56px;
    line-height: 76px;
    color: #3b2143;
    margin: 0 auto 20px;
    text-align: center;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  > p {
    max-width: 860px;
    text-align: center;
    margin: auto;
    font-family: Avenir-Book;
    color: #3b2143;
    display: block;
  }
  > p > span {
    font-family: Avenir-Book;
    text-align: center;
    font-size: 25px;
    line-height: 35px;
    color: #3b2143;
  }
`;
const GloballyLocalSection = styled.div`
  text-align: center;
  padding-bottom: 0px;
  margin: 0px;
  font-family: Avenir-Book;
  display: block;
  font-size: 1em;
  line-height: 1.3;
`;

const GlobalFootprintContainer = styled.div`
  margin: 0 6%;
  position: relative;
  transform: scaleX(0.7) scaleY(0.7);
  z-index: 1;

  display: block;
  font-family: Avenir-Book;
  font-size: 1em;
  line-height: 1.3;

  > img {
    width: 100%;
    top: 0;
    left: 0;
    border-style: none;
  }
`;
