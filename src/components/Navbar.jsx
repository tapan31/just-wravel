import { Navbar, Button } from "flowbite-react";
import Logo from "../assets/JW-logo-dark.ec2abfdd.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faPhone } from "@fortawesome/free-solid-svg-icons";

function Navbarr() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="#">
        <img src={Logo} className="mr-3 h-6 sm:h-12" alt="Logo" />
      </Navbar.Brand>
      <div className="flex gap-5 items-center md:order-2">
        <div className="flex items-center gap-4">
          <FontAwesomeIcon icon={faPhone} />
          <p className="flex flex-col gap-0 text-sm">
            Call us <span className="font-semibold m-0">+91 9865423147</span>
          </p>
        </div>
        <Button color="blue" size="lg" className="w-10 h-10 rounded-full">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Button>
        <Button pill color="blue" size="md">
          Login
        </Button>
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
