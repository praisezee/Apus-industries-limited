import { Container, Image, Nav, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle, NavLink } from "react-bootstrap";
import logo from '../assets/Asset 8.png'
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <Navbar collapseOnSelect expand='md' variant="light" className="py-2" fixed="top">
      <Container fluid='xs' className="bg-light shadow container-md rounded-4 border fw-bold">
        <NavbarBrand>
          <Image src={ logo } fluid width={ 50 } height={ 50 } />{' '}
          <span className="d-none d-lg-inline text-gradient fw-bolder text-uppercase">apus industries limited</span>
        </NavbarBrand>
        <NavbarToggle aria-controls="responsive-navbar-nav" />
        <NavbarCollapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavLink>
              <Link className="nav-link" to='/about'>About Us</Link>
            </NavLink>
            <NavLink>
              <Link className="nav-link" to='/about'>Services</Link>
            </NavLink>
            <NavLink>
              <Link className="nav-link" to='/about'>How it works</Link>
            </NavLink>
            <NavLink>
              <Link className="nav-link" to='/about'>Hire</Link>
            </NavLink>
          </Nav>
          <Link className="btn btn-grad fw-bolder ms-auto">Contact Us</Link>
        </NavbarCollapse>
      </Container>
    </Navbar>
  )
}

export default Header
