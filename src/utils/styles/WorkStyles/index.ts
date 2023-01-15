// Work Section

import styled from "styled-components";
import { WorkColumnProps, WorkRowProps } from "../../types/styleTypes";
import { CommonFlexStyle } from "../common";

const WorkSectionContainer = styled.div`
  height: 900px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  background: #0c1112;
  @media screen and (max-width: 850px) {
    height: 1200px;
  }
  @media screen and (max-width: 660px) {
    height: 1050px;
  }
`;

const WorkSectionContainerHeader = styled.header`
  ${CommonFlexStyle}
  font-weight: 700;
  font-size: 36px;
  line-height: 150%;
  font-family: "RobotoBold";
  padding: 30px 0px;
  @media screen and (max-width: 850px) {
    font-size: 4vw;
  }
`;

const WorkSectionContainerSection = styled.section`
  position: relative;
`;

const WorkSectionContainerSectionColumn = styled.div<WorkColumnProps>`
  width: 90%;
  height: 225.56px;
  position: absolute;
  top: ${(props) => {
    return props.top.toString();
  }}px;
  right: ${(props) => (props.right ? "auto" : props.right)};
  background: rgba(0, 221, 156, 0.03);
  border-radius: ${(props) => props.radius};
  display: flex;
  justify-content: space-around;
  flex-direction: ${(props) => (props.direction ? "row" : "row-reverse")};
  align-items: center;
  @media screen and (max-width: 850px) {
    border-radius: 0px;
    height: auto;
    top: ${(props) => {
      return (props.top * 1.5).toString();
    }}px;
  }
  @media screen and (max-width: 660px) {
    top: ${(props) => {
      return (props.top * 1.3).toString();
    }}px;
  }
`;

const WorkSectionContainerSectionRow = styled.div<WorkRowProps>`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => (props.direction ? "row" : "row-reverse")};
  & h1 {
    font-weight: 700;
    font-size: 129px;
    color: transparent;
    -webkit-text-stroke: 0.31px white;
    font-family: "RobotoBold";
  }
  @media screen and (max-width: 850px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 30px 0px;
    & h1 {
      font-size: 100px;
    }
  }
  @media screen and (max-width: 660px) {
    padding: 0px;
  }
`;

const WorkSectionContainerSectionRowInfo = styled.div`
  & h3 {
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    font-family: "RobotoBold";
  }
  & p {
    width: 450px;
    height: 96px;
    color: #80ab9e;
    font-family: "Roboto";
  }
  @media screen and (max-width: 850px) {
    & h3 {
      font-size: 3vw;
    }
    & p {
      width: 300px;
      font-size: 2vw;
    }
  }
`;

const WorkSectionContainerSectionImg = styled.div``;

const WorkObject = {
  WorkSectionContainerSectionImg,
  WorkSectionContainerSectionRowInfo,
  WorkSectionContainerSectionRow,
  WorkSectionContainerSectionColumn,
  WorkSectionContainerHeader,
  WorkSectionContainer,
  WorkSectionContainerSection,
};

export default WorkObject;
