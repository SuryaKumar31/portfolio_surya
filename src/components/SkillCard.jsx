import { style } from "../style";

const SkillCard = ({ img, text, textColor }) => {
  return (
    <div className={`${style.cardContainer}`}>
      <img src={img} alt="" />
      <h1 className={`font-bold ${textColor}`}>{text}</h1>
    </div>
  );
};

export default SkillCard;
