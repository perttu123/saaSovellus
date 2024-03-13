import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import {Button, Container, Form, Nav, Navbar} from 'react-bootstrap';
import { SendLocation } from './ApiHaku';
function NavBar() {

  //kesken
  const [search, setSearch] = useState("");


  async function searchPressed() {
    const data = await SendLocation(search);

    setSearch("");
    
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().slice(0, 14)+"00";
    console.log("current " +currentDate);
    console.log(formattedDate);

    // const getCurrentTemp = data.hourly.time.find((item)=>new Date(item)<formattedDate  && new Date(item)> formattedDate);
    const current = data.hourly.time.find((item)=>item===formattedDate);
    console.log(current);
    const index = data.hourly.time.indexOf(current);
    console.log(index);
    // for (let i = 0; i < data.hourly.temperature_2m.length; i++) {
    //   console.log(data.hourly.time[i] + data.hourly.temperature_2m[i]);
    //   console.log(current)
    // }
    console.log(data.hourly.temperature_2m[index]);
  }
  
  return (<>
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
            <Button onClick={()=>searchPressed()} variant='outline-info'>Hae</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>);
}

export default NavBar;