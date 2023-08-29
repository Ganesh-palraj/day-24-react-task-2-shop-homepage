
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import {
  Button,
  PopoverHeader,
  UncontrolledPopover,
  PopoverBody,
} from "reactstrap";

import { BsFillCartFill } from "react-icons/bs";

function Navigation({ cartCount , cartItems }) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Start Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
            <NavDropdown title="Shop" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">All products</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">Popular items</NavDropdown.Item>

              <NavDropdown.Item href="#action5">New items</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <form className="d-flex" style={{ justifyContent: "space-evenly" }}>
            <Button id="PopoverLegacy" type="button" outline>
              <BsFillCartFill />
              Cart
              <span className="badge bg-dark text-white ms-2 rounded-pill">
                {cartCount}
              </span>
            </Button>
            <UncontrolledPopover
              placement="bottom"
              target="PopoverLegacy"
              trigger="legacy"
            >
              <PopoverHeader>Cart Items</PopoverHeader>
              <PopoverBody>
                all the cart items will be displayed here.
              </PopoverBody>
            </UncontrolledPopover>
          </form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;


