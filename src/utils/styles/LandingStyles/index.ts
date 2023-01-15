import { motion } from "framer-motion";
import styled from "styled-components";
import { PageProps, LandingSectionProps } from "../../types/styleTypes";

const LandingPageContainer = styled.div<PageProps>`
  background: ${(props) => props.background};
  height: ${(props) => props.height}vh;
  background-image: url(${(props) => props.backgroundImage});
  padding: 20px auto;
`;

const LandingSectionContainer = styled.section<LandingSectionProps>`
  height: 86vh;
  position: relative;
  background-image: url(${(props) => props.backgroundImage});
  background-repeat: no-repeat;
  background-position: right;
  background-size: contain;
`;

const LandingHeaderSectionOverlay = styled.div`
  position: absolute;
  padding: 0px 10%;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  background: #0d0d0d;
  background: linear-gradient(
    0deg,
    rgba(13, 13, 13, 1) 0%,
    rgba(13, 13, 13, 0) 65%
  );
`;
const LandingHeaderSectionOverlayCont = styled.div`
  height: 60vh;
  width: 90%;
  max-width: 800px;
  display: flex;
  row-gap: 5px;
  flex-direction: column;
  justify-content: center;
`;

const LandingHeaderSectionButton = styled(motion.button)`
  color: black;
  cursor: pointer;
  width: 300px;
  background-color: #00e3a5;
  padding: 10px 20px;
  border: none;
  outline: none;
  font-family: "RobotoBold";
  margin-top: 20px;
  box-shadow: 0px 0px 10px rgba(0, 227, 165, 0.6);
  transition: all 0.4s;
  :hover {
    box-shadow: 0px 0px 20px rgba(0, 227, 165, 0.6);
  }
`;
const LandingHeaderSectionp = styled.p`
  font-family: "RobotoRegular";
  font-size: 25px;
  color: #80ab9e;
`;
const LandingHeaderSectionh2 = styled.h2`
  font-family: "RobotoRegular";
  font-size: 45px;
`;

const LandingObject = {
  LandingHeaderSectionh2,
  LandingHeaderSectionp,
  LandingHeaderSectionButton,
  LandingHeaderSectionOverlayCont,
  LandingHeaderSectionOverlay,
  LandingSectionContainer,
  LandingPageContainer,
};

export default LandingObject;
