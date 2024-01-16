import {Container, Nav, Navbar} from 'react-bootstrap';

function MyNav() {
  return (
    <Navbar expand="lg" className="bg-warning sticky-top">
      <Container>
        <Navbar.Brand href="#home"><i class="bi bi-book"></i> EpiBooks</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;