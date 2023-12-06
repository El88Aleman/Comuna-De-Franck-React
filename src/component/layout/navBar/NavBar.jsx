import {
  Container,
  Nav,
  Navbar,
  NavbarToggle,
  Offcanvas,
} from "react-bootstrap";
import "./NavBar.css";
import { Link } from "react-router-dom";

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
          height: "80px",
        }}
      >
        <Link to="/">
          <Navbar.Brand href="#">
            <img
              src="https://res.cloudinary.com/dfcnmxndf/image/upload/v1700779063/Comuna-de-Franck/cyxon0bo2j0v8ptwmpru.png"
              alt="logo"
              width="200px"
              height="70px"
            />
          </Navbar.Brand>
        </Link>
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
          style={{
            maxWidth: "40%", // Define la anchura máxima del Offcanvas
            width: "40%", // Define la anchura actual del Offcanvas
          }}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              <Link to="/">
                <img
                  src="https://res.cloudinary.com/dfcnmxndf/image/upload/v1700798247/Comuna-de-Franck/d0t7vnxmsktzqp32ffmm.png"
                  alt="logo"
                  width="70px"
                  height="70px"
                />
              </Link>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Link to="HorariosColectivos" className="navLink">
                HORARIOS DE COLECTIVOS
              </Link>

              <Link to="/Industrias" className="navLink">
                INDUSTRIAS
              </Link>
              <Link to="/Contacto" className="navLink">
                CONTACTOS
              </Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavBar;
