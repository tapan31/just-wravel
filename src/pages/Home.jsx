import { useContext } from "react";
import Hero from "../components/Hero";
import SelectTours from "../components/SelectTours";
import TripCard from "../components/TripCard";
import AuthContext from "../context/AuthContext";
import { Navigate } from "react-router-dom";

function Home() {
  const { isLoggedIn } = useContext(AuthContext);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <Hero />
      <div className="px-3 grid md:grid-cols-4 gap-3 my-10">
        <SelectTours />
        <div className="md:col-span-3 flex flex-wrap gap-3">
          <TripCard />
          <TripCard />
          <TripCard />
          <TripCard />
        </div>
      </div>
    </div>
  );
}

export default Home;
