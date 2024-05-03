import HimachalImg from "../assets/Himachal.jpg";
import UttarakhandImg from "../assets/Uttarakhand.jpg";

const cards = [
  {
    id: 1,
    cityName: "Himachal Pradesh",
    price: "$19990",
    image: HimachalImg,
  },
  {
    id: 2,
    cityName: "Uttarakhand",
    price: "$14000",
    image: UttarakhandImg,
  },
  {
    id: 3,
    cityName: "Meghalaya",
    price: "$17990",
    image: HimachalImg,
  },
];

function DestinationCard({ cityName, price, image }) {
  return (
    <div className="">
      <div className="rounded-md overflow-hidden">
        <img src={image} alt="" />
      </div>
      <div className="flex justify-between items-center">
        <h4 className="text-2xl font-semibold">{cityName}</h4>
        <p>
          <span className="text-sm">Starting Price</span>{" "}
          <span className="font-bold text-lg">{price}</span>
        </p>
      </div>
    </div>
  );
}

function Cards() {
  return (
    <div className="my-20">
      <p className="text-sm text-center">DESTINATIONS</p>
      <h2 className="text-4xl mb-10 font-semibold text-center">
        Find The Perfect Escape
      </h2>
      <div className="flex flex-wrap flex-col md:flex-row items-center justify-center gap-5">
        {cards.map((card) => (
          <DestinationCard
            key={card.id}
            cityName={card.cityName}
            price={card.price}
            image={card.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Cards;
