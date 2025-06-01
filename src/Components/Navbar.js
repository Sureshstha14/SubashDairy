import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import DairyLogo from '../Images/dairyLogo.png';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
function Navbar1() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary shadow-md py-4">
      <Container>
        {/* Logo Section */}
        <div className="">
          <Navbar.Brand href="/" className="flex items-center">
            {/* Logo */}
            <img src={DairyLogo} alt="Dairy Logo" className="w-20 h-12 mr-2" />
            {/* Brand Name */}
            <span className="font-semibold text-xl text-gray-800">Gorakhnath Dairy</span>
          </Navbar.Brand>
        </div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto flex gap-6 font-mono">
            <Nav.Link
              href="/"
              className=" text-gray-900 hover:text-red-600 transform hover:scale-110 transition-all duration-300 ease-in-out hover:underline"
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="/about"
              className="hover:text-blue-500 transform hover:scale-110 transition-all duration-300 ease-in-out hover:underline"
            >
              About
            </Nav.Link>
            <Nav.Link
              href="/contact"
              className="hover:text-blue-500 transform hover:scale-110 transition-all duration-300 ease-in-out hover:underline"
            >
              Contact Us
            </Nav.Link>

            {/* Dropdown */}
            <NavDropdown title="Services" id="basic-nav-dropdown" className="hover:text-blue-500">
              <NavDropdown.Item
                href="#action/3.1"
                className="hover: transform hover:scale-110 transition-all duration-300 ease-in-out hover:underline"
              >
                On-time delivery service
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#action/3.2"
                className="hover:text-blue-500 transform hover:scale-110 transition-all duration-300 ease-in-out"
              >
                Organic and farm-fresh products

              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Special pricing for businesses</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Discounted pricing for subscribers

              </NavDropdown.Item>
            </NavDropdown>
            <Link to="/signin">
              <Button className="bg-red-600 rounded-xl hover:bg-red-400 ml-auto">SignIn</Button>
            </Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;
