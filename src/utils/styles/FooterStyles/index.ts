// footer Section

import styled from "styled-components";
import { CommonFlexStyle } from "../common";

const FooterSectionContainer = styled.footer`
  height: 709.04px;
  margin: 20px auto 0px auto;
  background: url("mapTechnology.svg") #092326;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: overlay;
  display: flex;
  position: relative;
  @media screen and (max-width: 1120px) {
    flex-direction: column;
    height: 1180px;
    align-items: center;
  }
`;

const FooterSectionContainerColumnOne = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  flex: 1;
  & h3 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 36px;
    color: #80ab9e;
  }
  @media screen and (max-width: 1120px) {
    flex: 0.5;
  }
`;

const FooterSectionContainerColumnOneRowOne = styled.div`
  ${CommonFlexStyle};
  flex-direction: column;
  & h1 {
    font-family: "RobotoBold";
    width: 127px;
    height: 37px;
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 36px;
    color: #f5fbf2;
  }
  & p {
    font-family: "RobotoRegular";
    width: 416.27px;
    height: 128px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: #80ab9e;
    line-height: 32px;
  }
`;

const FooterSectionContainerColumnOneRowTwo = styled.div`
  ${CommonFlexStyle}
  flex-direction: column;
  & h2 {
    width: 144px;
    height: 36px;
    font-family: "RobotoBold";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    color: #f5fbf2;
  }
  & section {
    ${CommonFlexStyle}
    font-size: 40px;
    gap: 20px;
    & span {
      cursor: pointer;
    }
  }
  @media screen and (max-width: 1120px) {
    position: absolute;
    top: 88%;
  }
`;

const FooterSectionContainerColumnTwo = styled.section`
  flex: 1;
  @media screen and (max-width: 1120px) {
    flex: none;
  }
`;

const FooterSectionContainerColumnTwoRowOne = styled.section`
  display: flex;
  flex-direction: column;
  padding: 5%;
  & h1 {
    font-family: "RobotoBold";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 150%;
  }
`;

const FooterSectionContainerColumnTwoRowTwo = styled.section`
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 1120px) {
    flex-direction: column;
    row-gap: 20px;
  }
`;

const FooterSectionContainerColumnTwoRowTwoListOne = styled.div`
  & h2 {
    width: 102px;
    height: 36px;
    font-family: "RobotoBold";
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 35px;
    color: #f5fbf2;
  }
  & ul {
    width: 110px;
    height: 152px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 50px;
    color: #80ab9e;
    & li {
      list-style: none;
      cursor: pointer;
    }
  }
  @media screen and (max-width: 1120px) {
    ${CommonFlexStyle};
    flex-direction: column;
    & ul {
      ${CommonFlexStyle}
      flex-direction: column;
    }
  }
`;

const FooterSectionContainerColumnOneFooter = styled.h3`
  @media screen and (max-width: 1120px) {
    position: absolute;
    top: 95%;
  }
`;

const FooterSectionContainerColumnTwoRowTwoListTwo = styled.div`
  & h2 {
    width: 102px;
    height: 36px;
    font-family: "RobotoBold";
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 35px;
    color: #f5fbf2;
  }
  & ul {
    width: auto;
    height: 152px;
    cursor: pointer;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 50px;
    color: #80ab9e;
    & li {
      list-style: none;
      cursor: pointer;
    }
  }
  @media screen and (max-width: 1120px) {
    ${CommonFlexStyle};
    row-gap: 20px;
    flex-direction: column;
    & ul {
      ${CommonFlexStyle}
      flex-direction: column;
    }
  }
`;

const FooterSectionContainerColumnTwoButton = styled.div`
  display: flex;
  align-items: center;
  & input {
    border: 1px solid #00e3a5;
    outline: none;
    background-color: transparent;
    flex-direction: row;
    align-items: center;
    padding: 24px 48px;
    max-width: 469px;
    width: 100%;
    height: 70px;
  }
  & button {
    background-color: #00e3a5;
    border: 1px solid #00e3a5;
    cursor: pointer;
    color: black;
    font-family: "RobotoBold";
    width: 194px;
    height: 70px;
    box-shadow: 0px 0px 10px rgba(0, 227, 165, 0.6);
    transition: all 0.4s;
    :hover {
      box-shadow: 0px 0px 20px rgba(0, 227, 165, 0.6);
    }
  }
`;

const FooterObject = {
  FooterSectionContainer,
  FooterSectionContainerColumnTwoButton,
  FooterSectionContainerColumnTwoRowTwoListTwo,
  FooterSectionContainerColumnOneFooter,
  FooterSectionContainerColumnTwoRowTwoListOne,
  FooterSectionContainerColumnTwoRowTwo,
  FooterSectionContainerColumnTwoRowOne,
  FooterSectionContainerColumnOne,
  FooterSectionContainerColumnOneRowOne,
  FooterSectionContainerColumnTwo,
  FooterSectionContainerColumnOneRowTwo,
};

export default FooterObject;
