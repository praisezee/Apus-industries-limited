import { Container, Row, Col, Image } from "react-bootstrap";
import team from '../assets/team.png'
import { AnimationOnScroll } from "react-animation-on-scroll";


const Trust = () => {
  return (
    <div className="h-screen d-flex justify-content-center align-items-center" id="about">
      <Container>
        <Row>
          <Col xs={ 12 } md={ 6 } lg={8} className="mx-auto my-auto">
            <div className="w-10 hr mb-3" />
            <AnimationOnScroll animateIn=" slide-in" >
              <p className="h4">Leading companies trust us <br className="d-none d-md-block" /> <span className="fw-bold">to develop software</span></p>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="slide-down" >
              <p className="my-3 text-muted ">We <span className="text-gradient">add development capacity</span> to tech teams. Our value isn&apos;t limited to building teams but is equally distributed across the project lifecycle. We are a custom software develpoment company that guarantees the successful delivery of your project.</p>
            </AnimationOnScroll>
          </Col>
          <Col xs={10} md={ 6 } lg={4} className=" mx-auto my-auto">
            <AnimationOnScroll animateIn="slide-right" >
              <Image fluid src={ team } className="rounded-3 shadow " />
            </AnimationOnScroll>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Trust
