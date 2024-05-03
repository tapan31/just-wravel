import Navbarr from "./components/Navbar";
import Hero from "./components/Hero";
import SelectTours from "./components/SelectTours";
import TripCard from "./components/TripCard";
import FooterC from "./components/Footer";

function App() {
  return (
    <>
      <Navbarr />
      <Hero />
      <div className="grid grid-cols-4 gap-3 my-10">
        <SelectTours />
        <div className="col-span-3 flex flex-wrap gap-3">
          <TripCard />
          <TripCard />
          <TripCard />
          <TripCard />
        </div>
      </div>
      <FooterC />
    </>
  );
}

export default App;
