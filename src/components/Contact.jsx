import { Col, Container, FloatingLabel, FormControl, Image, Row, Spinner } from "react-bootstrap";
import { contact } from "../assets";
import { useState } from "react";
import axios from "axios";


const Contact = () =>
{
  const [ firstname, setFirstname ] = useState( '' )
  const [ lastname, setLasttname ] = useState( '' )
  const [ email, setEmail ] = useState( '' )
  const [ phoneNumber, setPhoneNumber ] = useState( '' )
  const [ message, setMessage ] = useState( '' )
  const [ loading, setLoading ] = useState( false)
  
  


  const submit = async () =>
  {
    setLoading(true)
    try {
      const res = await axios.post( 'url', { message, firstname, lastname, phoneNumber, email } )
      console.log(res.data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }
  
  return (
    <div className="vh-100 d-flex align-items-center justify-content-center" id="contact">
      <Container className="rounded border shadow-sm p-5">
        <Row>
          <Col xs={ 12 } md={ 6 } className="my-auto">
            <Row>
              <div className="w-10 hr" />
              <p className="h4 my-4">Contact <span className="fw-bold">Form</span></p>
              <Col xs={ 6 }>
                <FloatingLabel label='Firstname' className="my-1">
                  <FormControl value={firstname} onChange={(e)=>setFirstname(e.target.value)} placeholder="Enter your full name"/>
                </FloatingLabel>
              </Col>
              <Col xs={ 6 }>
                <FloatingLabel label='Lastname' className="my-1">
                  <FormControl value={lastname} onChange={(e)=>setLasttname(e.target.value)} placeholder="Enter your full name"/>
                </FloatingLabel>
              </Col>
              <Col xs={ 6 }>
                <FloatingLabel label='Email' className="my-1">
                  <FormControl value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email"/>
                </FloatingLabel>
              </Col>
              <Col xs={ 6 }>
                <FloatingLabel label='Phone number' className="my-1">
                  <FormControl value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} placeholder="Enter your email"/>
                </FloatingLabel>
              </Col>
              <Col xs={ 12 }>
                <FloatingLabel label='Message' className="my-1">
                  <FormControl value={message} onChange={(e)=>setMessage(e.target.value)} as="textarea" placeholder="Enter your email" />
                </FloatingLabel>
              </Col>
              <button onClick={ submit } disabled={ loading } className="btn-grad btn fw-bold w-25 mx-auto">{ loading ? <Spinner size="sm"/> : 'submit' }</button>
            </Row>
          </Col>
          <Col md={ 6 } className="d-none d-md-block my-auto">
            <Image src={contact} fluid className="rounded shadow"/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Contact
