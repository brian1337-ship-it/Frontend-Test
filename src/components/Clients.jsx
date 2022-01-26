import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Clients = () => {
  return (
    <ClientsContainer>
      <h3 id="OurClients">Our Clients</h3>
      <p>
        From automotive to health care to financial services to consumer
        packaged goods, we have delivered profound business results for the
        finest companies in the world.
      </p>

      <ClientsList>
        <figure>
          <a href="https://usa.visa.com/" target="_blank" rel="noreferrer">
            <img src="/images/visa.png" alt="VISA" title="VISA" />
          </a>
        </figure>
        <figure>
          <a href="https://www.mars.com/" target="_blank" rel="noreferrer">
            <img src="/images/mars.png" alt="MARS" title="MARS" />
          </a>
        </figure>
        <figure>
          <a
            href="https://www.levi.com/US/en_US"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/images/levis.png" alt="LEVIS" title="LEVIS" />
          </a>
        </figure>
        <figure>
          <a
            href="https://www.virgin.com/gateways/virginairlines"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/images/virgin.png" alt="VIRGIN" title="Virgin" />
          </a>
        </figure>
        <figure>
          <a href="https://www.economist.com/" target="_blank" rel="noreferrer">
            <img
              src="/images/economist.png"
              alt="THE-ECONOMIST"
              title="The Economist"
            />
          </a>
        </figure>
        <figure>
          <a href="https://www3.bacardi.com/" target="_blank" rel="noreferrer">
            <img src="/images/bacardi.png" alt="BACARDI" title="BACARDI" />
          </a>
        </figure>
        <figure>
          <a
            href="https://www.mercedes-benz.com/en/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/images/mercedes.png"
              alt="MERCEDES-BENZ"
              title="Mercedes-Benz"
            />
          </a>
        </figure>
        <figure>
          <a
            href="http://www8.hp.com/us/en/home.html"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/images/hp.png" alt="HP" title="HP" />
          </a>
        </figure>
        <figure>
          <a href="http://us.pg.com/" target="_blank" rel="noreferrer">
            <img src="/images/pg.png" alt="P&amp;G" title="P&amp;G" />
          </a>
        </figure>
        <figure>
          <a href="https://www.ubisoft.com/" target="_blank" rel="noreferrer">
            <img src="/images/ubisoft.png" alt="UBISOFT" title="UBISOFT" />
          </a>
        </figure>
        <figure>
          <a href="http://www.ikea.com/" target="_blank" rel="noreferrer">
            <img src="/images/ikea.png" alt="IKEA" title="IKEA" />
          </a>
        </figure>
      </ClientsList>
    </ClientsContainer>
  );
};

export default Clients;

const ClientsContainer = styled.div`
  margin: auto;
  text-align: center;
  width: 75%;
  display: block;
  font-family: Avenir-Book;

  > h3 {
    color: #e30613;
    font-weight: 400;
    font-family: Avenir-Book;
    font-size: 36px;
    line-height: 46px;
    margin: 0 auto 20px;
    text-align: center;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  > p {
    margin: auto;
    max-width: 75%;
    font-family: Avenir-Book;
    font-size: 16px;
    line-height: 22px;
    color: #3b2143;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
  
    text-align: center;
  }
`;

const ClientsList = styled.div`
  padding: 10px 0 40px;
  display: block;
  text-align: center;
  font-family: Avenir-Book;

  > figure {
    display: inline-block;
    margin: 15px auto;
    width: 24%;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 40px;
    margin-inline-end: 40px;
    text-align: center;
  }

  > figure > a {
    display: block;
    min-height: 87px;
    line-height: 22px;
    color: #3b2143;
    font-family: Avenir-Book;
    background-color: transparent;
    cursor: pointer;
    text-decoration: underline;
    text-align: center;
  }

  > figure > a > img {
    max-height: 160px;
    height: auto;
    max-width: 120px;
    border-style: none;
    line-height: 22px;
    color: #3b2143;
    font-family: Avenir-Book;
    cursor: pointer;
    text-align: center;
  }
  
`;
