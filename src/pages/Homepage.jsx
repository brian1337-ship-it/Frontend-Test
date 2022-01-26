import React, { useRef } from "react";
import styled from "styled-components";
import Welcome from "../components/Welcome";
import HowWeDoIt from "../components/HowWeDoIt";
import ProblemsSolved from "../components/ProblemsSolved";

const Homepage = () => {
  const howWeDoIt = useRef(null);

  const gotoHowWeDoItSection = () =>
    window.scrollTo({ top: howWeDoIt.current.offsetTop, behavior: "smooth" });

  return (
    <HomepageContainer>
      <WelcomeSection>
        <Welcome scrollDown={gotoHowWeDoItSection} />
      </WelcomeSection>

      <HowWeDoItSection ref={howWeDoIt}>
        <HowWeDoIt />
      </HowWeDoItSection>

      <ProblemsSolvedSection>
        <ProblemsSolved />
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
