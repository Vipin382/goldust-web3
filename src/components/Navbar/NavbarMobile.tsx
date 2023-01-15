import { useContext } from "react";
import WebsiteConstants from "../../utils/constants";
import { NavbarContext } from "../../utils/context/NavbarContext";
import { NavbarObject } from "../../utils/styles";

const NavbarMobile = () => {
  const { show, updateNavbar } = useContext(NavbarContext);

  return (
    <NavbarObject.NavbarMobileContainer>
      <NavbarObject.NavbarMobileImg onClick={() => updateNavbar(!show)}>
        <img
          src={WebsiteConstants.WebsiteIcons.NAVBAR_MOBILE_IMAGE_FIRST}
          alt={WebsiteConstants.GoldDustConstants.LOADING_CONSTANTS}
        />
      </NavbarObject.NavbarMobileImg>
      <div>{WebsiteConstants.GoldDustConstants.NAVBAR_BUTTON}</div>
      <NavbarObject.NavbarMobileImg>
        <img
          src={WebsiteConstants.WebsiteIcons.NAVBAR_MOBILE_PROFILE_IMAGE}
          alt={WebsiteConstants.GoldDustConstants.LOADING_CONSTANTS}
        />
      </NavbarObject.NavbarMobileImg>
    </NavbarObject.NavbarMobileContainer>
  );
};

export default NavbarMobile;
