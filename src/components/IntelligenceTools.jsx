import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const IntelligenceTools = () => {
  return (
    <IntelligenceToolsContainer>
      <h2>Creative intelligence tools</h2>
      <ul>
        <li>
          <figure>
            <img src="/images/-v2-cropped.gif" alt="Sun V2" />
          </figure>
          <h3>
            <p>
              The <strong>Relationship</strong> Lab<span>º</span>
            </p>
          </h3>
          <p></p>
          <p>
            <span>
              A comprehensive decision-making framework which maps people’s
              unmet needs to a brand’s most relevant assets to create high-value
              interactions across the scope of their relationship.
            </span>
          </p>
          <p></p>
        </li>
        <li>
          <figure>
            <img src="/images/connection-v2-cropped.gif" alt="Connection V2" />
          </figure>
          <h3>
            <p>
              D<strong>3</strong>M<span>º</span>
            </p>
          </h3>
          <p></p>
          <p>
            Data-Driven Destination Mapping is our unique evolution of journey
            mapping fuses qualitative and quantitative understanding of a
            consumer to architect the optimal experience and drive
            business-building behavior change.
          </p>
          <p></p>
        </li>
        <li>
          <figure>
            <img src="/images/diamond-v2-cropped.gif" alt="Diamond V2" />
          </figure>
          <h3>
            <p>
              Red <strong>Intel</strong>º
            </p>
          </h3>
          <p></p>
          <p>
            An insight-mining process that delivers revelations: unexpected
            human and brand insights that make the most compelling creative
            ideas possible.
          </p>
          <p></p>
        </li>
        <li>
          <figure>
            <img src="images//birdy-v2-cropped.gif" alt="Birdy" />
          </figure>
          <h3>
            <p>
              <strong>Content</strong> Darwinism<span>º</span>
            </p>
          </h3>
          <p></p>
          <p>
            Our proprietary algorithm, content strategy, auditing and
            measurement processes allow us to continuously optimize a brand’s
            story in real time.
          </p>
          <p></p>
        </li>
        <li>
          <figure>
            <img src="/images/slingshot-v2-cropped.gif" alt="Slingshot V2" />
          </figure>
          <h3>
            <p>
              The <strong>Propulsion</strong> Session<span>º</span>
            </p>
          </h3>
          <p></p>
          <p>
            A three-day intensive creative collaboration process which harnesses
            the brightest talent to get to the very best experience-led ideas.
          </p>
          <p></p>
        </li>
      </ul>
    </IntelligenceToolsContainer>
  );
};

export default IntelligenceTools;

const IntelligenceToolsContainer = styled.div`
  margin: 70px 20px;
  text-align: center;
  display: block;
  font-family: Avenir-Book;

  > h2 {
    margin: 20px 0;
    font-weight: 700;
    color: red;
    text-transform: uppercase;
    font-family: Avenir-Black;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 2px;
    text-align: center;
    display: block;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  > ul {
    border-top: 1px solid #e30613;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin: auto;
    padding: 0;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
    text-align: center;
    font-family: Avenir-Book;
  }

  > ul > li {
    width: 400px;
    margin-top: 50px;
    padding: 0 2em;
    text-align: center;
    list-style: none;
    display: list-item;
    font-family: Avenir-Book;
  }

  > ul > li > figure {
    min-height: 110px;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 40px;
    margin-inline-end: 40px;
    text-align: center;
    list-style: none;
    font-family: Avenir-Book;
  }

  > ul > li > figure > img {
    min-height: 80px;
    border-style: none;
    text-align: center;
    list-style: none;
    font-family: Avenir-Book;
  }

  > ul > li > h3 {
    margin-top: 0;
    width: 100%;
    margin: 0;
    font-weight: 400;
    font-family: Avenir-Book;
    font-size: 36px;
    line-height: 46px;
    text-align: center;
    color: #3b2143;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    list-style: none;

  }
  
  > ul > li > h3 > p {
    margin: 0;
    font-family: Avenir-Book;
    font-size: 36px;
    line-height: 46px;
    color: #3b2143;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;

  }

  > ul > li > p {
    font-family: Avenir-Book;
    font-size: 16px;
    line-height: 22px;
    color: #3b2143;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    text-align: center;
  }

`;
