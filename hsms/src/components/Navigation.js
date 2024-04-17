import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {NavLink} from 'react-router-dom';

function Navigation(props) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" >
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as = {NavLink} to ="/LoggedIn/Home" disabled = {!props.logStatus}>Home</Nav.Link>
            <Nav.Link as = {NavLink} to ="/LoggedIn/Listings" disabled = {!props.logStatus}>Listings</Nav.Link>
            <Nav.Link as = {NavLink} to ="/LoggedIn/Personal" disabled = {!props.logStatus}>Personal</Nav.Link>    
            <NavDropdown title="Contacts" id="navbarScrollingDropdown">
              <NavDropdown.Item href="https://web.whatsapp.com/" target = "_blank">Whatsapp</NavDropdown.Item>
              <NavDropdown.Item href="https://www.facebook.com/" target = "_blank">Facebook</NavDropdown.Item>
              <NavDropdown.Item href="https://www.instagram.com/" target = "_blank">Instagram</NavDropdown.Item>
              <NavDropdown.Item href="https://www.twitter.com/" target = "_blank">Twitter</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <Nav.Link as = {NavLink} to ="/LoggedIn/About" disabled = {!props.logStatus}>About</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;