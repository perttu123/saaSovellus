import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import {Button, Container, Form, Nav, Navbar} from 'react-bootstrap';

function NavBar() {

  //kesken
  const [search, setSearch] = useState("");

  const searchPressed = () => {
    console.log(search)

  }

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container fluid>
            <img
              src="icon.jpg"
              width="35"
              height="35"
              className="d-inline-block align-top me-2"
              alt = "logo"
            />
        <Navbar.Brand href="saa">SAA</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="saa">Sääennuste</Nav.Link>
            <Nav.Link href="vertailu">Vertailu</Nav.Link>
          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Paikkakunta haku"
              className="me-2"
              aria-label="Search"

              //kesken
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button onClick={searchPressed} variant='outline-info'>Hae</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;