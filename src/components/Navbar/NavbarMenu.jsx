import { Container, Nav, Navbar } from "react-bootstrap";
import logo from '../../img/BIOSPI-LOGO_baja-300x300.png';
import './styles.css';


export const NavbarMenu = () => {
    return (
        <div>
            <Navbar className="nav-bgcolor" data-bs-theme="light" expand="lg">
                <Container>
                    <Navbar.Brand href="https://biospimexico.com/" target="_blank" rel="noreferrer">
                        <img
                            src={logo}
                            width='100'
                            height='auto'
                            className="d-inline-block align-top"
                            alt="Biospi"
                        />
                    </Navbar.Brand>
                    {/* Este botón de hamburguesa aparece en pantallas pequeñas */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#!" className="nav-link-custom">INICIO</Nav.Link>
                            <Nav.Link href="#!" className="nav-link-custom">SERVICIOS</Nav.Link>
                            <Nav.Link href="#!" className="nav-link-custom">SOCIOS-COMERCIALES</Nav.Link>
                            <Nav.Link href="#!" className="nav-link-custom">URNAS</Nav.Link>
                            <Nav.Link href="#!" className="nav-link-custom">CONTACTO</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};
