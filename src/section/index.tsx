import { useState } from "react";
import { NavbarContext } from "../utils/context/NavbarContext";
import { LandingObject } from "../utils/styles";
import { AboutSection } from "./About";
import { AchivementSection } from "./Achievement";
import { CommunitySection } from "./Community";
import { CompanySection } from "./Company";
import { FooterSection } from "./Footer";
import { LandingHeaderSection } from "../components/LandingSection";
import { WorkSection } from "./Work";
import { Navbar } from "../components";
import { NavbarMobile } from "../components";
import WebsiteConstants from "../utils/constants";

const LandingSection = () => {
  const [show, setShow] = useState<any>(false);

  return (
    <LandingObject.LandingPageContainer
      height={100}
      backgroundImage={
        WebsiteConstants.WebsiteIcons.LANDING_PAGE_CONTAINER_ICON
      }
    >
      <NavbarContext.Provider value={{ show, updateNavbar: setShow }}>
        <Navbar />
        <NavbarMobile />
      </NavbarContext.Provider>
      <LandingHeaderSection />
      <AchivementSection />
      <CompanySection />
      <AboutSection />
      <WorkSection />
      <CommunitySection />
      <FooterSection />
    </LandingObject.LandingPageContainer>
  );
};

export default LandingSection;
