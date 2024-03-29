import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import react_logo from '../assets/react.svg'

const Navigation = () => {
    return (
        <div>
          <Navbar expand="lg" className="bg-body-tertiary" sticky='top' style={{height:'10vh'}}>
            <Container>
              <Navbar.Brand href="/home">
                <img src={react_logo} alt='logo' style={{height:'75px', width:'75px'}}/>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <NavDropdown title="Inspirations" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/inspiration/category_1">Category 1</NavDropdown.Item>
                    <NavDropdown.Item href="/inspiration/category_2">
                    Category 2
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/inspiration/category_3">Category 3</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/inspiration/category_all">
                    Category all
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="/make_my_escapes">Make My Escapes</Nav.Link>
                  <Nav.Link href="/view_my_escapes">View My Escapes</Nav.Link>                 
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
    );
}

export default Navigation;