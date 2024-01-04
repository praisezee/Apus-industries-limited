import { Col, Container, Image, Row } from "react-bootstrap";
import me from '../assets/me.jpg'
import team from '../assets/team2.png'
import { AnimationOnScroll } from "react-animation-on-scroll";

const Build = () => {
  return (
    <div className="my-5">
      <div className="w-10 hr mx-auto" />
      <p className="text-center h4 my-4">Way of building <br /> <span className="fw-bold">Great Software</span></p>
      <Container className="mt-5">
        <Row>
          <Col xs={ 12 } md={6} className="my-auto">
            <AnimationOnScroll animateIn="slide-in" >
              <Image src={team} fluid className="rounded-3"/>
            </AnimationOnScroll>
          </Col>
          <Col xs={ 12 } md={6} className="my-auto">
            <AnimationOnScroll animateIn="slide-right" >
              <p className="fw-bold h4 mb-3">Build the right team to scale</p>
              <p className="mb-3">Finding the right talent is not easy. We have valuable talents that handles specific areas of a project with proficency in their stacks.</p>
              <p>Our <span className="text-gradient">delivery model</span> helps you cut costs and deliver within budget.</p>
              <div className="d-md-none d-block border-gradient">
                <p className="text-gradient fst-italic">&quot;Apus industries limited is quick to identify and resolve software problems because we have one of the best team on ground&quot;</p>
              </div>
              <div className="d-md-none d-flex align-items-center ">
                <Image src={me} width={ 30 } height={ 30 } className="rounded-circle border border-success me-3"/>
                <p className="fw-bold my-auto">Praise Folorunso O. <br /><span className="text-muted">CEO</span></p>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="slide-down" className="d-none d-md-block">
              <div className="border-gradient">
                <p className="text-gradient fst-italic">&quot;Apus industries limited is quick to identify and resolve software problems because we have one of the best team on ground&quot;</p>
              </div>
              <div className="d-flex align-items-center ">
                <Image src={me} width={ 30 } height={ 30 } className="rounded-circle border border-success me-3"/>
                <p className="fw-bold my-auto">Praise Folorunso O. <br /><span className="text-muted">CEO</span></p>
              </div>
            </AnimationOnScroll>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Build
