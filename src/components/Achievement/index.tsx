import { AchievementNumberInterface } from "../../utils/interfaces";
import { AchievementObject } from "../../utils/styles";

const AchievementNum: React.FC<AchievementNumberInterface> = ({
  amount,
  title,
}) => {
  return (
    <AchievementObject.AchievementNumContainer>
      <h1>{amount}</h1>
      <p>{title}</p>
    </AchievementObject.AchievementNumContainer>
  );
};
export default AchievementNum;
