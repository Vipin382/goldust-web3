import { CompanyObject } from "../../utils/styles";
import WebsiteConstants from "../../utils/constants";

export const CompanySection = () => {
  return (
    <CompanyObject.CompanyPage>
      <CompanyObject.CompanySectionCont>
        <CompanyObject.CompanyImage
          src={WebsiteConstants.WebsiteIcons.COMPANY_IMAGE_ONE}
        />
        <CompanyObject.CompanyImage
          src={WebsiteConstants.WebsiteIcons.COMPANY_IMAGE_TWO}
        />
        <CompanyObject.CompanyImage
          src={WebsiteConstants.WebsiteIcons.COMPANY_IMAGE_THREE}
        />
        <CompanyObject.CompanyImage
          src={WebsiteConstants.WebsiteIcons.COMPANY_IMAGE_FOUR}
        />
      </CompanyObject.CompanySectionCont>
    </CompanyObject.CompanyPage>
  );
};
