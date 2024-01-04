import { Col, Container, Image, Row } from "react-bootstrap";
import hero from '../assets/hero.png'
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <Container>
        <Row>
          <Col xs={ 6 }  className="my-auto">
            <p className="h3 slide-in">Great <span className="text-gradient">Product</span> is</p>
            <p className="h1 fw-bold slide-in">built by great <span className="text-gradient">teams</span></p>
            <p className="mt-4 slide-up">We help build and manage a team of world-class developers to bring your vision to life</p>
            <Link className="btn btn-grad slide-down fw-bold">get started</Link>
          </Col>
          <Col xs={ 6 } className="my-auto">
            <Image fluid src={hero} className="expand-out"/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Hero
