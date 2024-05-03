import Logo from "../assets/JW-logo-dark.ec2abfdd.png";
import { Footer } from "flowbite-react";

function FooterC() {
  return (
    <Footer container>
      <div className="w-full mt-5">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand href="" src={Logo} alt="Logo" name="Logo" />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="Company" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">About Us</Footer.Link>
                <Footer.Link href="#">Contact Us</Footer.Link>
                <Footer.Link href="#">Our Blogs</Footer.Link>
                <Footer.Link href="#">Career With US</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Trips" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Backpacking</Footer.Link>
                <Footer.Link href="#">Treks</Footer.Link>
                <Footer.Link href="#">Weekend Getaways</Footer.Link>
                <Footer.Link href="#">Biking Trips</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Treks" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Domestic Tour Packages</Footer.Link>
                <Footer.Link href="#">International Getaways</Footer.Link>
                <Footer.Link href="#">Corporate Tours</Footer.Link>
                <Footer.Link href="#">Ladakh Tours</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="JustWravel™" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            {/* <Footer.Icon href="#" icon={} />
            <Footer.Icon href="#" icon={} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} /> */}
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default FooterC;
