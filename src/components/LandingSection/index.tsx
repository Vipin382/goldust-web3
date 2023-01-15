import WebsiteConstants from "../../utils/constants";
import { LandingObject } from "../../utils/styles";

const button = {
  rest: { scale: 1 },
  hover: { scale: 1.1 },
  pressed: { scale: 0.95 },
};

export const LandingHeaderSection = () => {
  return (
    <LandingObject.LandingSectionContainer
      backgroundImage={
        WebsiteConstants.WebsiteIcons.LandingSectionContainerImage
      }
    >
      <LandingObject.LandingHeaderSectionOverlay>
        <LandingObject.LandingHeaderSectionOverlayCont>
          <LandingObject.LandingHeaderSectionp>
            {WebsiteConstants.GoldDustConstants.LANDING_HEADER_THIRD}
          </LandingObject.LandingHeaderSectionp>
          <LandingObject.LandingHeaderSectionh2>
            <span>
              {WebsiteConstants.GoldDustConstants.LANDING_HEADER_FIRST}
            </span>
            <br />
            <span>
              {WebsiteConstants.GoldDustConstants.LANDING_HEADER_SECOND}
            </span>
          </LandingObject.LandingHeaderSectionh2>
          <LandingObject.LandingHeaderSectionButton
            variants={button}
            initial="rest"
            whileHover="hover"
            whileTap="pressed"
            animate={{ type: "spring" }}
            transition={{
              type: "spring",
              stiffness: 326,
              mass: 7,
              damping: 5,
            }}
          >
            {WebsiteConstants.GoldDustConstants.LANDING_BUTTON}
          </LandingObject.LandingHeaderSectionButton>
        </LandingObject.LandingHeaderSectionOverlayCont>
      </LandingObject.LandingHeaderSectionOverlay>
    </LandingObject.LandingSectionContainer>
  );
};

export default LandingHeaderSection;
