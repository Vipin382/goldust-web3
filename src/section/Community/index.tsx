import { CommunityObject } from "../../utils/styles";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "../../utils/scss/index.scss";
import WebsiteConstants from "../../utils/constants";

export const CommunitySection = () => {
  return (
    <CommunityObject.CommunitySectionContainer>
      <CommunityObject.CommunitySectionContainerHeader>
        {WebsiteConstants.GoldDustConstants.COMMUNITY_PAGE_HEADER}
      </CommunityObject.CommunitySectionContainerHeader>
      <CommunityObject.CommunitySectionContainerSection>
        <CommunityObject.CommunitySectionContainerSectionSpan
          style={{ margin: WebsiteConstants.CommunitySectionMargin.MARGIN_ONE }}
        >
          <AiOutlineArrowLeft
            className={WebsiteConstants.WebsiteClasses.COMMUNITY_ICON_CLASSNAME}
            color={WebsiteConstants.WebsiteColorConstants.COMMUNITY_ICON_COLOR}
          />
        </CommunityObject.CommunitySectionContainerSectionSpan>
        <CommunityObject.CommunitySectionContColumn>
          <CommunityObject.CommunitySectionContainerSectionImg>
            <img
              src={
                WebsiteConstants.WebsiteIcons.COMMUNITY_SECTION_PROFILE_IMAGE
              }
              alt={WebsiteConstants.GoldDustConstants.LOADING_CONSTANTS}
            />
          </CommunityObject.CommunitySectionContainerSectionImg>
          <CommunityObject.CommunitySectionContainerSectionColumn>
            <p>{WebsiteConstants.GoldDustConstants.COMMUNITY_CONTENT}</p>
            <h3>{WebsiteConstants.GoldDustConstants.COMMUNITY_PAGE_AUTHOR}</h3>
          </CommunityObject.CommunitySectionContainerSectionColumn>
        </CommunityObject.CommunitySectionContColumn>
        <CommunityObject.CommunitySectionContainerSectionSpan
          style={{ margin: WebsiteConstants.CommunitySectionMargin.MARGIN_TWO }}
        >
          <AiOutlineArrowRight
            style={{
              color:
                WebsiteConstants.WebsiteColorConstants.COMMUNITY_ICON_COLOR,
            }}
          />
        </CommunityObject.CommunitySectionContainerSectionSpan>
      </CommunityObject.CommunitySectionContainerSection>
    </CommunityObject.CommunitySectionContainer>
  );
};
