import WebsiteConstants from "../../utils/constants";
import { FooterObject } from "../../utils/styles";

const FooterColTwo = () => {
  return (
    <FooterObject.FooterSectionContainerColumnTwo>
      <FooterObject.FooterSectionContainerColumnTwoRowOne>
        <h1>{WebsiteConstants.GoldDustConstants.FOOTER_HEADING[0]}</h1>
        <FooterObject.FooterSectionContainerColumnTwoButton>
          <input
            type="text"
            placeholder={WebsiteConstants.GoldDustConstants.FOOTER_PLACEHOLDER}
          />
          <button type="button">
            {WebsiteConstants.GoldDustConstants.FOOTER_BUTTON}
          </button>
        </FooterObject.FooterSectionContainerColumnTwoButton>
      </FooterObject.FooterSectionContainerColumnTwoRowOne>
      <FooterObject.FooterSectionContainerColumnTwoRowTwo>
        <FooterObject.FooterSectionContainerColumnTwoRowTwoListOne>
          <h2>{WebsiteConstants.GoldDustConstants.FOOTER_HEADING[1]}</h2>
          <ul>
            {WebsiteConstants.GoldDustConstants.FOOTER_ABOUT_LISTITEM.map(
              (item, index) => {
                return <li key={index}>{item}</li>;
              }
            )}
          </ul>
        </FooterObject.FooterSectionContainerColumnTwoRowTwoListOne>
        <FooterObject.FooterSectionContainerColumnTwoRowTwoListTwo>
          <h2>{WebsiteConstants.GoldDustConstants.FOOTER_HEADING[2]}</h2>
          <ul>
            {WebsiteConstants.GoldDustConstants.FOOTER_SUPPORT_LISTITEM.map(
              (item, index) => {
                return <li key={index}>{item}</li>;
              }
            )}
          </ul>
        </FooterObject.FooterSectionContainerColumnTwoRowTwoListTwo>
      </FooterObject.FooterSectionContainerColumnTwoRowTwo>
    </FooterObject.FooterSectionContainerColumnTwo>
  );
};

export default FooterColTwo;
