import React from "react";
import styled from "styled-components";
import GlobalFootprint from "../components/GlobalFootprint";
import CreativeIntelligence from "../components/CreativeIntelligence";
import IntelligenceTools from "../components/IntelligenceTools";
import Omnicom from "../components/Omnicom";
import Clients from "../components/Clients";
import Partners from "../components/Partners";

const Aboutpage = () => {
  return (
    <AboutPageContainer>
      <GlobalFootprintSection>
        <GlobalFootprint />
      </GlobalFootprintSection>

      <CreativeIntelligenceSection>
        <CreativeIntelligence />
      </CreativeIntelligenceSection>

      <IntelligenceToolsSection>
        <IntelligenceTools />
      </IntelligenceToolsSection>

      <OmnicomSection>
        <Omnicom />
      </OmnicomSection>

      <ClientsSection>
        <Clients />
      </ClientsSection>
      
      <PartnersSection>
        <Partners />
      </PartnersSection>
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
