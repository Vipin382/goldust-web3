// Community Section

import styled from "styled-components";
import { CommonFlexStyle } from "../common";

const CommunitySectionContainer = styled.div`
  height: 600px;
  background: url("tech.jpg"), rgba(11, 21, 18);
  border-top-right-radius: 350px;
  border-bottom-right-radius: 350px;
  background-blend-mode: overlay;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  ${CommonFlexStyle}
  flex-direction: column;
  @media screen and (max-width: 860px) {
    border-radius: 0px;
    position: relative;
    justify-content: flex-start;
  }
`;

const CommunitySectionContainerHeader = styled.header`
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 150%;
  font-family: "RobotoBold";
  @media screen and (max-width: 860px) {
    ${CommonFlexStyle}
    width: 100%;
    font-size: 5vw;
  }
`;

const CommunitySectionContainerSection = styled.section`
  height: 372.24px;
  max-width: 1239.01px;
  width: 90%;
  background: rgba(0, 221, 156, 0.1);
  border-radius: 319.5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 860px) {
    border-radius: 0px;
    width: 100%;
    height: 100%;
    position: absolute;
    justify-content: center;
  }
`;

const CommunitySectionContColumn = styled.div`
  display: flex;
  gap: 20px;
  @media screen and (max-width: 860px) {
    flex-direction: column;
    align-items: center;
    width: 80%;
  }
`;

const CommunitySectionContainerSectionImg = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  border: 8px solid #00e3a5;
  overflow: hidden;
  & img {
    width: 100%;
  }
  @media screen and (max-width: 860px) {
    border: 2px solid #00e3a5;
  }
`;

const CommunitySectionContainerSectionColumn = styled.div`
  max-width: 463.98px;
  font-style: normal;
  font-weight: 500;
  & p {
    font-size: 18px;
    color: #80ab9e;
    font-family: "Roboto";
  }
  & h3 {
    font-size: 18px;
    color: #80ab9e;
    font-family: "Roboto";
  }
  @media screen and (max-width: 860px) {
    & h3 {
      margin-top: 10px;
      font-size: 15px;
    }
  }
`;

const CommunitySectionContainerSectionSpan = styled.span`
  cursor: pointer;
  background-color: rgba(0, 227, 165, 0.5);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  transition: all 0.1s;
  :hover {
    background-color: rgba(0, 227, 165, 1);
    color: black;
  }
`;

const CommunityObject = {
  CommunitySectionContainer,
  CommunitySectionContainerHeader,
  CommunitySectionContainerSection,
  CommunitySectionContColumn,
  CommunitySectionContainerSectionImg,
  CommunitySectionContainerSectionColumn,
  CommunitySectionContainerSectionSpan,
};

export default CommunityObject;
