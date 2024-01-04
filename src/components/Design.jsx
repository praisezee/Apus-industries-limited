/* eslint-disable react/no-unescaped-entities */
import { Col, Container, Image, Row } from "react-bootstrap";
import ui from '../assets/UI.png'
import code from '../assets/code.png'
import expertise from '../assets/expertise.png'
import secure from '../assets/secure.png'
import check from '../assets/check.png'
import quality from '../assets/quality.png'
import { AnimationOnScroll } from "react-animation-on-scroll";


const Design = () => {
  return (
    <div className="my-5 bg-light py-5">
      <div className="w-10 hr mx-auto" />
      <p className="text-center h4 my-4">Our design and  <br /> <span className="fw-bold">development approach</span></p>
      <Container>
        <Row className="g-3">
          <Col xs={ 6 } className="p-1 my-auto">
            <AnimationOnScroll animateIn="expand-out">
              <div className="bg-white d-flex p-2 rounded-3 shadow-sm">
                <Image width={ 40 } height={ 40 } src={ ui } className="border rounded me-3"/>
                <div>
                  <p className="h5 fw-bold text-capitalize">Ux Driven Engineering</p>
                  <p className="text-muted h6">By adopting a UX-driven engineering approach, development teams can create products that not only meet technical specifications but also provide a positive and engaging experience for users. This can lead to increased user satisfaction, retention, and the overall success of the product in the market.</p>
                </div>
              </div>
            </AnimationOnScroll>
          </Col>
          <Col xs={ 6 } className="p-1 my-auto">
            <AnimationOnScroll animateIn="expand-out">
              <div className="bg-white d-flex p-2 rounded-3 shadow-sm">
                <Image width={ 40 } height={ 40 } src={ code } className="border rounded me-3"/>
                <div>
                  <p className="h5 fw-bold text-capitalize">Shared understanding</p>
                  <p className="text-muted h6">shared understanding is a dynamic and ongoing process that requires intentional efforts to promote clarity, collaboration, and a unified vision within a team or organization.Achieving shared understanding is essential for promoting alignment and cohesion within a team.</p>
                </div>
              </div>
            </AnimationOnScroll>
          </Col>
          <Col xs={ 6 } className="p-1 my-auto">
            <AnimationOnScroll animateIn="expand-out">
              <div className="bg-white d-flex p-2 rounded-3 shadow-sm">
                <Image width={ 40 } height={ 40 } src={ expertise } className="border rounded me-3"/>
                <div>
                  <p className="h5 fw-bold text-capitalize">proven experience and expertise</p>
                  <p className="text-muted h6">When these terms are used together, "proven experience and expertise" suggest a combination of a successful track record (proven experience) and a high level of skill or knowledge (expertise) in a specific field.</p>
                </div>
              </div>
            </AnimationOnScroll>
          </Col>
          <Col xs={ 6 } className="p-1 my-auto">
            <AnimationOnScroll animateIn="expand-out">
              <div className="bg-white d-flex p-2 rounded-3 shadow-sm">
              <Image width={ 40 } height={ 40 } src={ secure } className="border rounded me-3"/>
              <div>
                <p className="h5 fw-bold text-capitalize">intelectual property</p>
                <p className="text-muted h6">Intellectual property rights are crucial for fostering innovation and creativity, as they provide an incentive for individuals and businesses to invest time and resources in developing new ideas and products.</p>
              </div>
            </div>
            </AnimationOnScroll>
          </Col>
          <Col xs={ 6 } className="p-1 my-auto">
            <AnimationOnScroll animateIn="expand-out">
              <div className="bg-white d-flex p-2 rounded-3 shadow-sm">
              <Image width={ 40 } height={ 40 } src={ check } className="border rounded me-3"/>
              <div>
                <p className="h5 fw-bold text-capitalize">Code reviews</p>
                <p className="text-muted h6">Code reviews contribute to overall codebase health and help prevent the introduction of bugs and technical debt. They are a collaborative effort that strengthens the team's understanding of the code and ensures a high level of software quality.</p>
              </div>
            </div>
            </AnimationOnScroll>
          </Col>
          <Col xs={ 6 } className="p-1 my-auto">
            <AnimationOnScroll animateIn="expand-out">
              <div className="bg-white d-flex p-2 rounded-3 shadow-sm">
              <Image width={ 40 } height={ 40 } src={ quality } className="border rounded me-3"/>
              <div>
                <p className="h5 fw-bold text-capitalize">Quality assurance</p>
                <p className="text-muted h6">QA is not a one-time activity but a continuous and integrated part of the development process. It plays a critical role in delivering high-quality products, reducing defects, and enhancing customer satisfaction.</p>
              </div>
            </div>
            </AnimationOnScroll>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Design
