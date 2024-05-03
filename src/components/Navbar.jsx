import { Navbar, Button } from "flowbite-react";
import Logo from "../assets/JW-logo-dark.ec2abfdd.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

function Navbarr() {
  const { name, logout } = useContext(AuthContext);

  return (
    <Navbar fluid rounded>
      <Link to="/">
        <Navbar.Brand as={"div"}>
          <img src={Logo} className="mr-3 h-6 sm:h-12" alt="Logo" />
        </Navbar.Brand>
      </Link>
      <div className="flex gap-5 items-center md:order-2">
        <div className="hidden lg:flex items-center gap-4">
          <FontAwesomeIcon icon={faPhone} />
          <p className="flex flex-col gap-0 text-sm">
            Call us <span className="font-semibold m-0">+91 9865423147</span>
          </p>
        </div>
        <Button color="blue" size="lg" className="w-10 h-10 rounded-full">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Button>
        {localStorage.getItem("isLoggedIn") === "false" ? (
          <Link to="/login">
            <Button pill color="blue" size="md">
              Login
            </Button>
          </Link>
        ) : (
          <>
            <Button onClick={logout} pill color="blue" size="md">
              Logout
            </Button>
          </>
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active className="text-base">
          Backpacking Trips
        </Navbar.Link>
        <Navbar.Link href="#" className="text-base">
          Treks
        </Navbar.Link>
        <Navbar.Link href="#" className="text-base">
          Weekend Getaways
        </Navbar.Link>
        <Navbar.Link href="#" className="text-base">
          More
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navbarr;
