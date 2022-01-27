import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Welcome from "../components/Welcome";
import HowWeDoIt from "../components/HowWeDoIt";
import ProblemsSolved from "../components/ProblemsSolved";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const Homepage = () => {
  const howWeDoIt = useRef(null);

  // Scroll down arrow
  const gotoHowWeDoItSection = () =>
    window.scrollTo({ top: howWeDoIt.current.offsetTop, behavior: "smooth" });

  const { t, i18n } = useTranslation();

  // Pull state from redux store
  const { language } = useSelector((state) => state.header);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  return (
    <HomepageContainer>
      <WelcomeSection>
        <Welcome scrollDown={gotoHowWeDoItSection} t={t} />
      </WelcomeSection>

      <HowWeDoItSection ref={howWeDoIt}>
        <HowWeDoIt t={t} />
      </HowWeDoItSection>

      <ProblemsSolvedSection>
        <ProblemsSolved t={t} />
      </ProblemsSolvedSection>
    </HomepageContainer>
  );
};

export default Homepage;

const HomepageContainer = styled.div`
  /* height: 100vh; */
  z-index: 0;
`;

const ProblemsSolvedSection = styled.div`
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HowWeDoItSection = styled.div`
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WelcomeSection = styled.div`
  object-fit: contain;
  width: 100%;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: auto;
  }
`;
