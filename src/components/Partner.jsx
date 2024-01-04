import { Col, Container, Image, Row } from "react-bootstrap";
import paystride from '../assets/paystride.png'
import aparte from '../assets/aparte.png'
import trenz from '../assets/trenz.png'
import { AnimationOnScroll } from "react-animation-on-scroll";

const Partner = () => {
  return (
    <div className="bg-light py-5">
      <AnimationOnScroll animateIn="expand-out" >
        <Container className="py-4">
          <div className="w-10 hr mb-3" />
          <p className="h4">Meet the People <br /> <span className="fw-bold">We are Working With</span></p>
          <Row className="my-3 shadow p-3 border border-success rounded">
            <Col xs={ 4 } md={4} lg={2} className="mx-auto my-auto d-flex align-items-center">
              <Image src={ paystride } width={25} height={40} />
              <p className="h5 fw-bold ms-2">Paystride</p>
            </Col>
            <Col xs={ 4 } md={4} lg={2} className="mx-auto my-auto d-flex align-items-center">
              <Image src={ aparte } fluid />
            </Col>
            <Col xs={ 4 } md={4} lg={2} className="mx-auto my-auto d-flex align-items-center">
              <Image src={ trenz } width={50} height={30} />
              <p className="h5 fw-bold ms-2">Trenz Tech</p>
            </Col>
          </Row>
        </Container>
      </AnimationOnScroll>
    </div>
  )
}

export default Partner
