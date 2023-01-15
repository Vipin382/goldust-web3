import { AchievementNum } from "../../components";
import WebsiteConstants from "../../utils/constants";
import { AchievementObject } from "../../utils/styles";

export const AchivementSection = () => {
  return (
    <AchievementObject.AchievementSectionContainer>
      <AchievementObject.AchievementSectionHeader>
        <p>{WebsiteConstants.GoldDustConstants.ACHIEVEMENT_HEADER}</p>
        <h3>{WebsiteConstants.GoldDustConstants.ACHIEVEMENT_SECTION}</h3>
      </AchievementObject.AchievementSectionHeader>
      <AchievementObject.AchievementSectionMap
        backgroundImage={WebsiteConstants.WebsiteIcons.ACHIEVEMENT_SECTION_ICON}
      >
        <AchievementObject.AchievementSectionNumber>
          <AchievementNum
            amount={WebsiteConstants.AchievementData.ACHIEVEMENT_ONE.AMOUNT}
            title={WebsiteConstants.AchievementData.ACHIEVEMENT_ONE.TITLE}
          />
          <AchievementNum
            amount={WebsiteConstants.AchievementData.ACHIEVEMENT_TWO.AMOUNT}
            title={WebsiteConstants.AchievementData.ACHIEVEMENT_TWO.TITLE}
          />
          <AchievementNum
            amount={WebsiteConstants.AchievementData.ACHIEVEMENT_THREE.AMOUNT}
            title={WebsiteConstants.AchievementData.ACHIEVEMENT_THREE.TITLE}
          />
        </AchievementObject.AchievementSectionNumber>
      </AchievementObject.AchievementSectionMap>
    </AchievementObject.AchievementSectionContainer>
  );
};
