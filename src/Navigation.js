import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from "reactstrap";

function Navigation(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args}>
        <NavbarBrand href="/">Start Bootstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="md-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                About
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Shop
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>All products</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Popular Items</DropdownItem>
                <DropdownItem>New Arrivals</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <div>
            <Button color="dark" outline>Cart
            <span class="badge bg-dark text-white ms-1 rounded-pill">0</span></Button>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;