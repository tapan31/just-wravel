import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import profileImg from "../assets/unnamed.png";

function CommentCard() {
  return (
    <div
      href="#"
      className="max-w-sm flex gap-4 bg-gray-600/65 rounded-md text-white py-4 px-3 my-3"
    >
      <div>
        <img src={profileImg} alt="" />
      </div>
      <div>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <p className="font-normal text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit natus
          quas saepe in velit! Aliquid. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Fugit, quis!
        </p>
      </div>
    </div>
  );
}

export default CommentCard;
