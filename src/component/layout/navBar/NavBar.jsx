import {
  Container,
  Nav,
  Navbar,
  NavbarToggle,
  Offcanvas,
} from "react-bootstrap";
import "./NavBar.css";

const NavBar = () => {
  const expand = false;
  return (
    <Navbar
      expand={expand}
      className="bg-body-tertiary mb-3 custom-navbar "
      style={{ padding: "0px", margin: "0px" }}
    >
      <Container
        fluid
        className="navBar"
        style={{
          position: "fixed",
          zIndex: "1000",
          backgroundColor: "#023e8a",
          top: "0",
          left: "0",
          right: "0",
        }}
      >
        <Navbar.Brand href="#">
          <img
            src="https://res.cloudinary.com/dfcnmxndf/image/upload/v1700779063/Comuna-de-Franck/cyxon0bo2j0v8ptwmpru.png"
            alt="logo"
            width="200px"
            height="70px"
          />
        </Navbar.Brand>
        <NavbarToggle
          style={{
            backgroundColor: "white",
            color: "white",
            border: "0",
          }}
          aria-controls={`offcanvasNavbar-expand-${expand}`}
        />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              <img
                src="https://res.cloudinary.com/dfcnmxndf/image/upload/v1700798247/Comuna-de-Franck/d0t7vnxmsktzqp32ffmm.png"
                alt="logo"
                width="70px"
                height="70px"
              />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="" className="navLink">
                HORARIOS DE COLECTIVOS
              </Nav.Link>
              <Nav.Link href="" className="navLink">
                INDUSTRIAS
              </Nav.Link>
              <Nav.Link href="" className="navLink">
                CONTACTOS
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavBar;
