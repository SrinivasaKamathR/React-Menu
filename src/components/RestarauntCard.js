import { IMG_CDN_URL } from "../constants";

const RestaruantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="" />
      <h2>{name}</h2>
      <h3>{cuisines.join(",")}</h3>
      <h4>{lastMileTravelString} </h4>
    </div>
  );
};

export default RestaruantCard;
