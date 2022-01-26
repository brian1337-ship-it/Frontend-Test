/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Partners = () => {
  return (
    <PartnersContainer>
      <h3>World-class Partners</h3>
      <p>
        We have deep expertise in the industry’s leading marketing technology
        solutions, and we maintain top-tier relationships with these key
        partners.
      </p>

      <PartnersList>
        <figure>
          <a href="#" target="_blank" rel="noreferrer">
            <img src="/images/sitecore.jpg" alt="SITECORE" title="SITECORE" />
          </a>
        </figure>
        <figure>
          <a href="#" target="_blank" rel="noreferrer">
            <img
              src="/images/episerver.jpg"
              alt="EPISERVER"
              title="EPISERVER"
            />
          </a>
        </figure>
        <figure>
          <a href="#" target="_blank" rel="noreferrer">
            <img
              src="/images/microsoft.jpg"
              alt="Microsoft"
              title="Microsoft"
            />
          </a>
        </figure>
        <figure>
          <a href="#" target="_blank" rel="noreferrer">
            <img
              src="/images/adobe.jpg"
              alt="Adobe"
              title="Adobe Marketing Cloud"
            />
          </a>
        </figure>
        <figure>
          <a href="#" target="_blank" rel="noreferrer">
            <img
              src="/images/salesforce.jpg"
              alt="SalesForce"
              title="SalesForce"
            />
          </a>
        </figure>
        <figure>
          <a href="#" target="_blank" rel="noreferrer">
            <img src="/images/acquia.jpg" alt="Acquia" title="Drupal Acquia" />
          </a>
        </figure>
        <figure>
          <a href="#" target="_blank" rel="noreferrer">
            <img src="/images/umbraco.jpg" alt="Umbraco" title="Umbraco" />
          </a>
        </figure>
        <figure>
          <a href="#" target="_blank" rel="noreferrer">
            <img src="/images/google.jpg" alt="Google" title="Google" />
          </a>
        </figure>
        <figure>
          <a href="#" target="_blank" rel="noreferrer">
            <img src="/images/facebook.jpg" alt="Facebook" title="Facebook" />
          </a>
        </figure>
        <figure>
          <a href="#" target="_blank" rel="noreferrer">
            <img src="/images/linkedin.jpg" alt="LinkedIn" title="LinkedIn" />
          </a>
        </figure>
        <figure>
          <a href="#" target="_blank" rel="noreferrer">
            <img src="/images/youtube.png" alt="Youtube" title="Youtube" />
          </a>
        </figure>

        <figure>
          <a href="#" target="_blank" rel="noreferrer">
            <img src="/images/twitter.jpg" alt="Twitter" title="Twitter" />
          </a>
        </figure>

        <figure>
          <a href="#" target="_blank" rel="noreferrer">
            <img
              src="/images/instagram.jpg"
              alt="Instagram"
              title="Instagram"
            />
          </a>
        </figure>

        <figure>
          <a href="#" target="_blank" rel="noreferrer">
            <img
              src="/images/wide-1.png"
              alt="GoogleAnalytics"
              title="Google Analytics"
            />
          </a>
        </figure>

        <figure>
          <a href="#" target="_blank" rel="noreferrer">
            <img src="/images/omniture.jpg" alt="Omniture" title="OMNITURE" />
          </a>
        </figure>

        <figure>
          <a href="#" target="_blank" rel="noreferrer">
            <img src="/images/tableau.jpg" alt="Tableau" title="Tableau" />
          </a>
        </figure>

        <figure>
          <a href="#" target="_blank" rel="noreferrer">
            <img src="/images/qlikview.jpg" alt="QlikView" title="QlikView" />
          </a>
        </figure>

        <figure>
          <a href="#" target="_blank" rel="noreferrer">
            <img
              src="/images/webtrends.jpg"
              alt="webtrends"
              title="Webtrends"
            />
          </a>
        </figure>

        <figure>
          <a href="#" target="_blank" rel="noreferrer">
            <img src="/images/sas.jpg" alt="Sas" title="sas" />
          </a>
        </figure>
      </PartnersList>
    </PartnersContainer>
  );
};

export default Partners;

const PartnersContainer = styled.div`
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

const PartnersList = styled.div`
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
    max-height: 260px;
    height: auto;
    max-width: 180px;
    border-style: none;
    line-height: 22px;
    color: #3b2143;
    font-family: Avenir-Book;
    cursor: pointer;
    text-align: center;
  }
`;
