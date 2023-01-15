import styled, { css } from "styled-components";
import { PageProps } from "../../types/styleTypes";

export const CommonFlexStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Page = styled.div<PageProps>`
  background: ${(props) => props.background};
  height: ${(props) => props.height}vh;
  background-image: url(${(props) => props.backgroundImage});
`;

const Divider = styled.div`
  border-left: 1px solid rgba(255, 255, 255, 0.4);
  height: 90%;
  width: 0px;
  @media screen and (max-width: 1120px) {
    width: 95%;
    height: 0%;
    border-top: 1px solid rgba(255, 255, 255, 0.4);
  }
`;

const ColumnDivider = styled.div``;

const CommonObject = { Page, Divider, ColumnDivider };

export default CommonObject;
