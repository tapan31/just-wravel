import bgImage from "../assets/pexels-m-venter-792254-1659437.jpg";

function Hero() {
  return (
    <div
      style={{ background: `url(${bgImage}) no-repeat center/cover` }}
      className="text-white p-5 py-10 relative"
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10">
        <h1 className="text-7xl">
          Book Your <br /> Trip to{" "}
          <span className="text-[rgb(175,222,30)] font-semibold">Himachal</span>
        </h1>

        <p className="text-lg my-5">
          <span className="text-[rgb(175,222,30)]">Wander</span> | Travel |{" "}
          <span className="text-[rgb(175,222,30)]">Connect</span> | Repeat
        </p>

        <p>
          Where Adventure meets Community <br /> #wravelerforlife
        </p>
      </div>
    </div>
  );
}

export default Hero;
