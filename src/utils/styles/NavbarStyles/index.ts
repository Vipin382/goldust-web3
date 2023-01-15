import styled from "styled-components";
import { NavbarContainerProps } from "../../types/styleTypes";
import { CommonFlexStyle } from "../common";

const NavbarContainer = styled.div<NavbarContainerProps>`
  height: 70px;
  border-radius: 50px;
  display: flex;
  justify-content: space-between;
  padding: 0px 10%;
  align-items: center;
  transition: all 0.5s;
  @media screen and (max-width: 860px) {
    position: absolute;
    overflow: hidden;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    top: 0;
    left: ${(props) => props.size}px;
    width: 100%;
    border-radius: 0;
    row-gap: 50px;
    background-color: rgba(0, 227, 165, 1);
    z-index: 2;
  }
`;

const NavbarTitle = styled.div`
  font-size: 30px;
  font-family: "Roboto";
  @media screen and (max-width: 860px) {
    flex-direction: column;
    font-size: 70px;
    font-weight: bolder;
  }
`;

const NavLink = styled.a`
  font-family: "Roboto";
  font-weight: bold;
  text-decoration: none;
  position: relative;
  :nth-child(1) {
    color: rgba(0, 227, 165, 1);
  }
  ::after {
    content: "";
    position: absolute;
    height: 1.5px;
    background-color: rgba(0, 227, 165, 1);
    transition: all 0.3s;
    width: 0%;
    left: 0;
    bottom: 0;
  }
  :hover::after {
    width: 100%;
  }
  @media screen and (max-width: 860px) {
    color: black;
    font-weight: bolder;
  }
`;

const NavLinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  @media screen and (max-width: 860px) {
    row-gap: 60px;
    flex-direction: column;
  }
`;

const NavbarButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 227, 165, 1);
  cursor: pointer;
  background: none;
  border-radius: 2px;
  padding: 10px 20px;
  @media screen and (max-width: 860px) {
    border: 2px solid black;
    padding: 15px 100px;
  }
`;

const NavbarMobileContainer = styled.div`
  display: none;
  @media screen and (max-width: 860px) {
    display: block;
    ${CommonFlexStyle}
    justify-content: space-between;
    font-size: 40px;
    font-family: "Roboto";
    padding: 30px 10% 0px 10%;
    & img {
      height: 50px;
    }
  }
`;

const NavbarMobileImg = styled.div`
  cursor: pointer;
`;

const NavbarObject = {
  NavbarMobileImg,
  NavbarMobileContainer,
  NavbarButton,
  NavLinkContainer,
  NavbarContainer,
  NavbarTitle,
  NavLink,
};

export default NavbarObject;
