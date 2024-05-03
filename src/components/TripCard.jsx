import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HimachalImg from "../assets/Himachal-Backpacking-Trip-to-Manali-Kasol-Tosh-Jibhi-JustWravel-1597384318-1.jpg";
import {
  faCalendar,
  faClock,
  faLocation,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "flowbite-react";

function TripCard() {
  return (
    <div
      style={{
        background: `url(${HimachalImg}) no-repeat center/cover`,
        overflow: "hidden",
      }}
      className="text-white p-4 border relative"
    >
      <div className="absolute inset-0 bg-black opacity-50 rounded-xl "></div>

      <div className="relative z-10">
        <div className="float-right">
          <FontAwesomeIcon icon={faClock} /> <span>7 Days</span>
        </div>

        <h4 className="text-2xl font-semibold my-8">
          Himachal Backpacing Trip to Manali Kasol Jibhi
        </h4>

        <button className="rounded-full bg-transparent border border-white p-2 text-sm">
          <FontAwesomeIcon icon={faLocation} /> Delhi to Himachal
        </button>

        <div className="flex justify-between items-center mt-6">
          <div>
            <FontAwesomeIcon icon={faCalendar} /> <br />
            <p className="text-xl font-semibold">$ 17,500</p>
          </div>
          <Button color="gray">More Details</Button>
        </div>
      </div>
    </div>
  );
}

export default TripCard;
