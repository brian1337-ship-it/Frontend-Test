import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Welcome = ({ scrollDown }) => {
  return (
    <WelcomeContainer>
      <video
        autoPlay
        loop
        muted
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
        }}
      >
        <source src="/videos/video.mp4" type="video/mp4" />
        <img src="/images/video-poster.jpg" alt="Proximity" />
      </video>
      <WelcomeContent>
        <Fade bottom>
          <WelcomeText>
            <p>We make people</p>
            <p>more valuable to brands</p>
          </WelcomeText>
        </Fade>
        <DownArrow src="/images/Arrowwhite.png" onClick={scrollDown} />
      </WelcomeContent>
    </WelcomeContainer>
  );
};

export default Welcome;

const WelcomeContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

const WelcomeContent = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  height: 100%;
  width: 100%;
  margin-top: 0;

  @media (max-width: 768px) {
    height: 70%;
    margin-top: 10vh;
  }
`;

const WelcomeText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > p {
    font-family: Avenir-Black;
    color: white;
    letter-spacing: 0.5px;
    font-size: 50px;

    @media (max-width: 768px) {
      font-size: 20px;
      line-height: 36px;
    }
  }
`;

const DownArrow = styled.img`
  margin-top: 40vh;
  margin-bottom: 50px;
  height: 30px;
  overflow-x: hidden;
  cursor: pointer;
  animation: animateDown infinite 1.5s;

  @media (max-width: 768px) {
    margin-top: auto;
  }
`;
