import styled from "styled-components";
import { CommonFlexStyle } from "../common";

/* Company Section */
const CompanyPage = styled.div`
  ${CommonFlexStyle}
`;

const CompanySectionCont = styled.div`
  max-width: 1447.09px;
  width: 100%;
  height: 150px;
  background: #091d18;
  opacity: 0.5;
  border-radius: 129.482px;
  margin: 40px 20px;
  ${CommonFlexStyle}
  gap: 10%;
`;

const CompanyImage = styled.img`
  mix-blend-mode: soft-light;
  width: 15%;
`;

const CompanyObject = { CompanyPage, CompanySectionCont, CompanyImage };

export default CompanyObject;
