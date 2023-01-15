import { CiFacebook, CiTwitter, CiInstagram } from "react-icons/ci";
import WebsiteConstants from "../../utils/constants";
import { FooterObject } from "../../utils/styles";

const FooterColOne = () => {
  return (
    <FooterObject.FooterSectionContainerColumnOne>
      <FooterObject.FooterSectionContainerColumnOneRowOne>
        <h1>{WebsiteConstants.GoldDustConstants.WEBSITE_TITLE}</h1>
        <p>{WebsiteConstants.GoldDustConstants.FOOTER_CONTENT}</p>
      </FooterObject.FooterSectionContainerColumnOneRowOne>
      <FooterObject.FooterSectionContainerColumnOneRowTwo>
        <h2>{WebsiteConstants.GoldDustConstants.SOCIAL_MEDIA_HEADER}</h2>
        <section>
          <span
            className={WebsiteConstants.WebsiteClasses.SOCIAL_ICON_CLASSNAME}
          >
            <CiFacebook />
          </span>
          <span
            className={WebsiteConstants.WebsiteClasses.SOCIAL_ICON_CLASSNAME}
          >
            <CiTwitter />
          </span>
          <span
            className={WebsiteConstants.WebsiteClasses.SOCIAL_ICON_CLASSNAME}
          >
            <CiInstagram />
          </span>
        </section>
      </FooterObject.FooterSectionContainerColumnOneRowTwo>
      <FooterObject.FooterSectionContainerColumnOneFooter>
        {WebsiteConstants.GoldDustConstants.FOOTER_RIGHTS}
      </FooterObject.FooterSectionContainerColumnOneFooter>
    </FooterObject.FooterSectionContainerColumnOne>
  );
};

export default FooterColOne;
