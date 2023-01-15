import { NavbarObject } from "../../utils/styles";
import { AiOutlineClose } from "react-icons/ai";
import "../../utils/scss/index.scss";
import { useContext } from "react";
import { NavbarContext } from "../../utils/context/NavbarContext";
import WebsiteConstants from "../../utils/constants";

const Navbar = () => {
  const { show, updateNavbar } = useContext(NavbarContext);

  return (
    <NavbarObject.NavbarContainer size={show ? 0 : -960}>
      <AiOutlineClose
        className={WebsiteConstants.WebsiteClasses.NAVBAR_ICON_CLASSNAME}
        onClick={() => updateNavbar(!show)}
      />
      <NavbarObject.NavbarTitle>
        {WebsiteConstants.GoldDustConstants.WEBSITE_TITLE}
      </NavbarObject.NavbarTitle>
      <NavbarObject.NavLinkContainer>
        {WebsiteConstants.GoldDustConstants.NAVBAR_LINKS.map((item, index) => {
          return (
            <NavbarObject.NavLink href="/*" key={index}>
              {item}
            </NavbarObject.NavLink>
          );
        })}
        <NavbarObject.NavbarButton>
          {WebsiteConstants.GoldDustConstants.NAVBAR_BUTTON}
        </NavbarObject.NavbarButton>
      </NavbarObject.NavLinkContainer>
    </NavbarObject.NavbarContainer>
  );
};

export default Navbar;
