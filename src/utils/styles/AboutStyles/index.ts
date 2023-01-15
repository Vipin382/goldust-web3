// About Section

import styled from "styled-components";
import { AboutProps } from "../../types/styleTypes";

const AboutSectionContainer = styled.div<AboutProps>`
  width: 100%;
  max-width: 91.5vw;
  height: 639px;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  border-top-right-radius: 400px;
  border-bottom-right-radius: 400px;
  padding: 0px 10%;
  gap: 5%;
  background: linear-gradient(
    -90deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(9, 37, 30, 1) 60%
  );
  @media screen and (max-width: 860px) {
    border-top-right-radius: 200px;
    border-bottom-right-radius: 200px;
    flex-direction: column;
    height: 900px;
    gap: 0px;
  }
  @media screen and (max-width: 660px) {
    height: 700px;
  }
`;

const AboutSectionContainerColumnOne = styled.div`
  max-width: 30.81vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  row-gap: 25px;
  & h1 {
    font-family: "RobotoBold";
    font-style: normal;
    font-size: 3vw;
    line-height: 150%;
    color: #f5fbf2;
  }
  & p {
    font-family: "Roboto";
    height: 16vw;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5vw;
    color: #80ab9e;
  }
  @media screen and (max-width: 860px) {
    max-width: 70vw;
    row-gap: 0px;
  }
  @media screen and (max-width: 660px) {
    max-width: 60vw;
    row-gap: 20px;
    & h1 {
      font-size: 5vw;
    }
    & p {
      font-size: 2vw;
    }
  }
`;

const AboutSectionContainerColumnTwo = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  justify-content: center;
  & img {
    width: 100%;
  }
`;

const AboutButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 227, 165, 1);
  cursor: pointer;
  background: none;
  border-radius: 2px;
  max-width: 20vw;
  margin-top: 10px;
  padding: 2vw 3vw;
  box-shadow: 0px 0px 10px rgba(0, 227, 165, 0.6);
  transition: all 0.4s;
  :hover {
    box-shadow: 0px 0px 20px rgba(0, 227, 165, 0.6);
  }
  @media screen and (max-width: 660px) {
    max-width: 200px;
    padding: 2vw 20px;
  }
`;

const AboutObjects = {
  AboutSectionContainer,
  AboutSectionContainerColumnOne,
  AboutSectionContainerColumnTwo,
  AboutButton,
};
export default AboutObjects;
