import WebsiteConstants from "../../utils/constants";
import { AboutObjects } from "../../utils/styles";

export const AboutSection = () => {
  return (
    <AboutObjects.AboutSectionContainer>
      <AboutObjects.AboutSectionContainerColumnOne>
        <h1>{WebsiteConstants.GoldDustConstants.ABOUT_HEADER}</h1>
        <p>{WebsiteConstants.GoldDustConstants.ABOUT_PAGE_CONTENT}</p>
        <AboutObjects.AboutButton>
          {WebsiteConstants.GoldDustConstants.ABOUT_BUTTON}
        </AboutObjects.AboutButton>
      </AboutObjects.AboutSectionContainerColumnOne>
      <AboutObjects.AboutSectionContainerColumnTwo>
        <img
          src={WebsiteConstants.WebsiteIcons.ABOUT_SECTION_COLUMN_ICON}
          alt={WebsiteConstants.GoldDustConstants.LOADING_CONSTANTS}
        />
      </AboutObjects.AboutSectionContainerColumnTwo>
    </AboutObjects.AboutSectionContainer>
  );
};
