import React from "react";
import { Navbar } from "react-bootstrap";
function Header() {
  return (
    <Navbar bg="danger" variant="dark">
      <Navbar.Brand href="#home">Kanban Board</Navbar.Brand>
    </Navbar>
  );
}

export default Header;
