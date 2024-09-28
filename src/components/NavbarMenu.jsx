import { Container, Nav, Navbar } from "react-bootstrap";
import logo from '../img/BIOSPI-LOGO_baja-300x300.webp';
import './styles.css';


export const NavbarMenu = () => {
    return (
        <div>
            <Navbar className="nav-bgcolor" data-bs-theme="light">
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
                    <Nav>
                        <Nav.Link href="#!" className="nav-link-custom">INICIO</Nav.Link>
                        <Nav.Link href="#!" className="nav-link-custom">SERVICIOS</Nav.Link>
                        <Nav.Link href="#!" className="nav-link-custom">SOCIOS-COMERCIALES</Nav.Link>
                        <Nav.Link href="#!" className="nav-link-custom">URNAS</Nav.Link>
                        <Nav.Link href="#!" className="nav-link-custom">CONTACTO</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};
