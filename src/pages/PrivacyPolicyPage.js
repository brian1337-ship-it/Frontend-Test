import React, { useEffect } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import Fade from "react-reveal/Fade";

const PrivacyPolicyPage = () => {
  // Pull state from redux store
  const { language } = useSelector((state) => state.header);

  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  return (
    <PrivacyPolicyContainer>
      <h3>{t("privacy.part1")}</h3>
      <Fade bottom>
        <p>
          <strong>{t("privacy.part2")}</strong>
        </p>
        <p>{t("privacy.part3")}</p>
        <p>{t("privacy.part4")}</p>
        <p>{t("privacy.part5")}</p>
        <p>
          <span class="redTitle">{t("privacy.part6")}</span>
        </p>
        <p>{t("privacy.part7")}</p>
        <p>{t("privacy.part8")}</p>
        <p>{t("privacy.part9")}</p>
        <p>{t("privacy.part10")}</p>
        <p>
          <span class="redTitle">{t("privacy.part11")}</span>
        </p>
        <p>{t("privacy.part12")}</p>
        <p>{t("privacy.part13")}</p>
        <p>
          {t("privacy.part14")}
          <strong>&nbsp;</strong>
        </p>
        <p>{t("privacy.part15")}</p>
        <p>
          {t("privacy.part16")}
          <strong>&nbsp;</strong>
        </p>
        <p>
          <span class="redTitle">{t("privacy.part17")}</span>
        </p>
        <p>
          {t("privacy.part18")}:{" "}
          <a href="mailto:georgia.wright@proximityworld.com">
            <u>webmaster@proximityworld.com</u>
          </a>
        </p>
        <p>
          <span class="redTitle">{t("privacy.part19")}</span>
        </p>
        <p>{t("privacy.part20")}</p>
        <p>
          <span class="redTitle">{t("privacy.part21")}</span>
        </p>
        <p>{t("privacy.part22")}</p>
        <p>
          <span class="redTitle">{t("privacy.part23")}</span>
        </p>
        <p>{t("privacy.part24")}</p>
        <p>
          <span class="redTitle">{t("privacy.part25")}</span>
        </p>
        <p>{t("privacy.part26")}</p>
        <p>
          <span class="redTitle">{t("privacy.part27")}</span>
        </p>
        <p>{t("privacy.part28")}</p>
        <p>
          <strong>{t("privacy.part29")}</strong>
        </p>
        <p>{t("privacy.part30")}</p>
        <p>
          <strong>{t("privacy.part31")}</strong>
        </p>
        <p>{t("privacy.part32")}</p>
        <p>{t("privacy.part33")}</p>
        <p>&nbsp;</p>
        <p>
          <span class="redTitle">{t("privacy.part34")}</span>
        </p>
        <p>{t("privacy.part35")}</p>
      </Fade>
    </PrivacyPolicyContainer>
  );
};

export default PrivacyPolicyPage;

const PrivacyPolicyContainer = styled.div`
  display: block;
  margin: auto;
  max-width: 688px;
  padding: 200px 0;

  > h3 {
    text-align: left;
    width: auto;
    max-width: inherit;
    font-weight: 400;
    font-family: Avenir-Book;
    font-size: 36px;
    line-height: 46px;
    color: #3b2143;
    margin: 0 auto 20px;
  }

  > p {
    font-family: Avenir-Book;
    font-size: 16px;
    line-height: 22px;
    color: #3b2143;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
`;
