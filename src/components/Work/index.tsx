import { FC } from "react";
import WebsiteConstants from "../../utils/constants";
import { WorkObject } from "../../utils/styles";
import { WorkItemInterface } from "../../utils/types";

const Item: FC<WorkItemInterface> = ({
  num,
  title,
  ImageSrc,
  right,
  top,
  radius,
  direction,
}) => {
  return (
    <WorkObject.WorkSectionContainerSectionColumn
      top={top}
      right={right}
      radius={radius}
      direction={direction}
    >
      <WorkObject.WorkSectionContainerSectionRow direction={direction}>
        <h1>{num}</h1>
        <WorkObject.WorkSectionContainerSectionRowInfo>
          <h3>{title}</h3>
          <p>{WebsiteConstants.GoldDustConstants.ITEM_CONTENT}</p>
        </WorkObject.WorkSectionContainerSectionRowInfo>
      </WorkObject.WorkSectionContainerSectionRow>
      <WorkObject.WorkSectionContainerSectionImg>
        <img
          src={ImageSrc}
          alt={WebsiteConstants.GoldDustConstants.LOADING_CONSTANTS}
        />
      </WorkObject.WorkSectionContainerSectionImg>
    </WorkObject.WorkSectionContainerSectionColumn>
  );
};

export default Item;
