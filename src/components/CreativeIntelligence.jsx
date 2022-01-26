import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const CreativeIntelligence = () => {
  return (
    <CreativeIntelligenceContainer>
      <article>
        <figure>
          <img src="/images/about.jpg" alt="About Banner" />
        </figure>
      </article>

      <IntellingenceText>
        <h3>Creative Intelligence</h3>
        <p></p>
        <p><span>Data-driven creativity requires a deft blend of art and science. Creative Intelligence is our principle-based set of proprietary tools which consistently deliver the modern consumer experiences that today’s digital ecosystem demands.</span></p>
        <p></p>
      </IntellingenceText>
    </CreativeIntelligenceContainer>
  );
};

export default CreativeIntelligence;

const IntellingenceText = styled.div`
  width: 940px;
  max-width: 75%;
  margin: -110px auto auto;
  background-color: #fff;
  padding: 50px 90px;
  position: relative;
  text-align: center;
  background: linear-gradient(270deg, #a5ff00, #009dff, #ff43b2, #aa9100);
  background-size: 1000%;
  background-repeat: repeat;
  color: #fff;
  animation: j 30s linear infinite forwards;
  display: block;
  font-family: Avenir-Book;
  
  > h3 {
    margin: 0 auto 20px;
    max-width: 640px;
    color: #fff;
    font-weight: 400;
    font-family: Avenir-Book;
    font-size: 36px;
    line-height: 46px;
    text-align: center;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  > p {
    max-width: 640px;
    margin: auto;
    color: #fff;
    font-family: Avenir-Book;
    font-size: 16px;
    line-height: 22px;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    text-align: center
  }

  > p > span {

    color: #fff;
    font-family: Avenir-Book;
    font-size: 16px;
    line-height: 22px
  }
`;
const CreativeIntelligenceContainer = styled.div`
  margin: auto;
  padding: 0 6%;
  display: block;
  font-family: Avenir-Book;
  font-size: 1em;
  line-height: 1.3;

  > article {
    display: block;
  }

  > article > figure {
    padding-bottom: 47.55%;
    margin: 0;
    display: block;
    position: relative;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 40px;
    margin-inline-end: 40px;
  }

  > article > figure > img {
    text-align: center;
    width: 100%;
    top: 0;
    left: 0;
    position: absolute !important;
    border-style: none;
  }
`;
