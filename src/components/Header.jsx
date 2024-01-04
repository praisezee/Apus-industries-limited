import { Container, Image, Nav, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle, NavLink } from "react-bootstrap";
import logo from '../assets/Asset 8.png'
import { HashLink as Link } from "react-router-hash-link";


const Header = () => {
  return (
    <Navbar collapseOnSelect expand='md' variant="light" className="py-2" fixed="top">
      <Container fluid='xs' className="bg-light shadow container-md rounded-4 border fw-bold py-2 px-3">
        <NavbarBrand>
          <Image src={ logo } fluid width={ 50 } height={ 50 } />{' '}
          <span className="d-none d-lg-inline text-gradient fw-bolder text-uppercase">apus industries limited</span>
        </NavbarBrand>
        <NavbarToggle aria-controls="responsive-navbar-nav" />
        <NavbarCollapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavLink eventKey={1}>
              <Link className="nav-link" to='/#about'>About Us</Link>
            </NavLink>
            <NavLink eventKey={2}>
              <Link className="nav-link" to='/#services'>Services</Link>
            </NavLink>
            <NavLink eventKey={3}>
              <Link className="nav-link" to='/#design'>How it works</Link>
            </NavLink>
            <NavLink eventKey={4}>
              <Link className="nav-link" to='/#stacks'>Our stacks</Link>
            </NavLink>
          </Nav>
          <NavLink eventKey={5}>
            <Link to='/#contact' className="btn btn-grad fw-bolder ms-auto">Contact Us</Link>
          </NavLink>
        </NavbarCollapse>
      </Container>
    </Navbar>
  )
}

export default Header
