import { WorkObject } from "../../utils/styles";
import WebsiteConstants from "../../utils/constants";
import { Item } from "../../components";

export const WorkSection = () => {
  return (
    <WorkObject.WorkSectionContainer>
      <WorkObject.WorkSectionContainerHeader>
        {WebsiteConstants.GoldDustConstants.WORK_SECTION_HEADER}
      </WorkObject.WorkSectionContainerHeader>
      <WorkObject.WorkSectionContainerSection>
        {WebsiteConstants.WorkItemData.map((item, index) => {
          return (
            <Item
              key={index}
              title={item.title}
              ImageSrc={item.ImageSrc}
              num={item.num}
              right={item.right}
              top={item.top}
              radius={item.radius}
              direction={item.direction}
            />
          );
        })}
      </WorkObject.WorkSectionContainerSection>
    </WorkObject.WorkSectionContainer>
  );
};
