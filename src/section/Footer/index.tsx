import { CommonObject, FooterObject } from "../../utils/styles";
import "../../utils/scss/index.scss";
import { FooterColOne, FooterColTwo } from "../../components";

export const FooterSection = () => {
  return (
    <FooterObject.FooterSectionContainer>
      <FooterColOne />
      <CommonObject.Divider />
      <FooterColTwo />
    </FooterObject.FooterSectionContainer>
  );
};
