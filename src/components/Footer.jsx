import { Col, Container, Image, Row } from "react-bootstrap";
import { logo } from "../assets";
import { HashLink as Link } from "react-router-hash-link";
import { FaEnvelope, FaInstagram, FaWhatsapp, FaXTwitter } from 'react-icons/fa6'



const Footer = () =>
{
  const date = new Date()
  return (
    <div className="pt-4">
      <hr className="my-4"/>
      <Container className="text-center">
        <Row className="g-4">
          <Col xs={ 6 } md={ 6 } lg={ 4 }>
            <Image src={logo} width={ 25 } height={ 20 } />{' '}
            <span className="text-gradient fw-bolder text-uppercase">apus industries limited</span>
            <p className="fs-amall mt-3 font-monospace">A software brand with accurate solutions for your company</p>
          </Col>
          <Col xs={ 6 } lg={ 4 }>
            <p className="fw-bold">Links</p>
            <Link to='/#about' className="nav-link text-muted fst-italic">About us</Link>
            <Link to='/#services' className="nav-link text-muted fst-italic">Services</Link>
            <Link to='/#stacks' className="nav-link text-muted fst-italic">Our Stacks</Link>
          </Col>
          <Col xs={ 6 } lg={ 4 } className="mx-auto">
            <p className="fw-bold">Contact Us</p>
            <p className="text-muted fst-italic">
              Moniya, Ibadan, Nigeria
            </p>
            <p>+234(0)9029566770</p>

            <p className="fw-bold mt-3 mb-1">Socials</p>
            <Row>
              <Col xs={ 2 } className="p-3 mx-auto">
                <Link to='https://x.com/apusIndustries' target="_blank" className="nav-link fs-2">
                  <FaXTwitter/>
                </Link>
              </Col>
              <Col xs={ 2 } className="p-3 mx-auto">
                <Link to='https://instagram.com/apusIndustries' target="_blank" className="nav-link fs-2 text-danger">
                  <FaInstagram/>
                </Link>
              </Col>
              <Col xs={ 2 } className="p-3 mx-auto">
                <Link to='mailto:apusindustries1@gmail.com' target="_blank" className="nav-link fs-2 text-danger">
                  <FaEnvelope/>
                </Link>
              </Col>
              <Col xs={ 2 } className="p-3 mx-auto">
                <Link to='https://wa.me/message/DE46ZCGRKDXFP1' target="_blank" className="nav-link fs-2 text-success">
                  <FaWhatsapp/>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
        <p className="fw-bold text-small bg-light text-center py-3">&copy; {date.getFullYear()} Copyright <span className="text-gradient text-uppercase">APUS INDUSTRIES LIMITED</span><br/> All rights reserved</p>
    </div>
  )
}

export default Footer
