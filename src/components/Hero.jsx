import { Button } from "flowbite-react";
import bgImage from "../assets/pexels-m-venter-792254-1659437.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faPerson,
  faPersonHiking,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import CommentCard from "./CommentCard";

function Hero() {
  return (
    <div
      style={{ background: `url(${bgImage}) no-repeat center/cover` }}
      className="text-white p-5 py-10 relative"
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="flex justify-between">
        <div className="relative z-10">
          <h1 className="text-7xl my-12 font-bold">
            Book Your <br /> Trip to{" "}
            <span className="text-[rgb(175,222,30)] font-semibold">
              Himachal
            </span>
          </h1>

          <p className="text-lg my-5">
            <span className="text-[rgb(175,222,30)]">Wander</span> | Travel |{" "}
            <span className="text-[rgb(175,222,30)]">Connect</span> | Repeat
          </p>

          <p>
            Where Adventure meets Community <br /> #wravelerforlife
          </p>

          <div className="relative my-12 flex items-center gap-3">
            <input
              type="text"
              className="text-black px-4 py-6 rounded-full w-full"
              placeholder="Type Location..."
            />
            <Button pill color="blue" className="absolute right-3">
              Explore Trip
            </Button>
          </div>
        </div>

        <div className="relative z-10">
          <CommentCard />
          <CommentCard />
          <CommentCard />
        </div>
      </div>

      <div className="flex justify-between items-center z-10 relative">
        <div className="flex items-center gap-2">
          <FontAwesomeIcon size="2x" icon={faStar} />
          <p className="leading-tight">
            <span className="font-semibold text-xl">5135+</span> <br />{" "}
            <span className="text-xs">Reviews</span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <FontAwesomeIcon size="2x" icon={faPerson} />
          <p className="leading-tight">
            <span className="font-semibold text-xl">78965+</span> <br />{" "}
            <span className="text-xs">Satisfied Travellers</span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <FontAwesomeIcon size="2x" icon={faPersonHiking} />
          <p className="leading-tight">
            <span className="font-semibold text-xl">50+</span> <br />{" "}
            <span className="text-xs">Destinations</span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <FontAwesomeIcon size="2x" icon={faBagShopping} />
          <p className="leading-tight">
            <span className="font-semibold text-xl">7 Years+</span> <br />{" "}
            <span className="text-xs">Experience</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
