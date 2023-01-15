import styled from "styled-components";
import { AchievementMapProps } from "../../types/styleTypes";
import { CommonFlexStyle } from "../common";

const AchievementSectionContainer = styled.div``;

const AchievementSectionHeader = styled.header`
  padding: 0px 10px;
  & p {
    color: #80ab9e;
    font-size: 24px;
    font-family: "RobotoRegular";
  }
  & h3 {
    font-size: 4vw;
    font-family: "RobotoBold";
  }
  ${CommonFlexStyle}
  flex-direction: column;
  row-gap: 10px;
  padding: 0px 0px 20px 0px;
  background-color: #0d0d0d;
`;

const AchievementNumContainer = styled.div`
  ${CommonFlexStyle}
  flex-direction: column;
  & h1 {
    font-family: "RobotoBold";
    color: #00e3a5;
    font-size: 4vw;
  }
  & p {
    font-family: "RobotoRegular";
    color: #9e9e9e;
    font-size: 2vw;
  }
  margin: 10px 0px 0px 0px;
`;

const AchievementSectionMap = styled.section<AchievementMapProps>`
  max-width: 1474.04px;
  width: 100%;
  height: 48vw;
  background: linear-gradient(180deg, #0d0d0d 4.84%, rgba(13, 13, 13, 0) 69.88%),
    url(${(props) => props.backgroundImage});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

const AchievementSectionNumber = styled.div`
  ${CommonFlexStyle}
  gap:5vw;
`;

const AchievementObject = {
  AchievementSectionMap,
  AchievementSectionNumber,
  AchievementNumContainer,
  AchievementSectionContainer,
  AchievementSectionHeader,
};
export default AchievementObject;
