import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import GlobalFootprint from "../components/GlobalFootprint";
import CreativeIntelligence from "../components/CreativeIntelligence";
import IntelligenceTools from "../components/IntelligenceTools";
import Omnicom from "../components/Omnicom";
import Clients from "../components/Clients";
import Partners from "../components/Partners";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import Fade from "react-reveal/Fade";

const Aboutpage = () => {
  const { t, i18n } = useTranslation();

  // Pull header state from redux store
  const { language } = useSelector((state) => state.header);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);
  return (
    <AboutPageContainer>
      <Fade bottom>
        <GlobalFootprintSection>
          <GlobalFootprint t={t} />
        </GlobalFootprintSection>

        <CreativeIntelligenceSection>
          <CreativeIntelligence t={t} />
        </CreativeIntelligenceSection>

        <IntelligenceToolsSection>
          <IntelligenceTools t={t} />
        </IntelligenceToolsSection>

        <OmnicomSection>
          <Omnicom t={t} />
        </OmnicomSection>

        <ClientsSection>
          <Clients t={t} />
        </ClientsSection>

        <PartnersSection>
          <Partners t={t} />
        </PartnersSection>
      </Fade>
    </AboutPageContainer>
  );
};

export default Aboutpage;

const AboutPageContainer = styled.div`
  z-index: 0;
`;

const GlobalFootprintSection = styled.div`
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CreativeIntelligenceSection = styled.div`
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IntelligenceToolsSection = styled.div`
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const OmnicomSection = styled.div`
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ClientsSection = styled.div`
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PartnersSection = styled.div`
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
