import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { aws, azure, cloud, express, flutter, hardhat, laravel, mongoDb, mysql, nestjs, nextjs, nodejs, postgres, react, solidity, vite, web3 } from "../assets";
import StackItems from "./StackItems";

const Stack = () =>
{
  const [ show, setShow ] = useState( 1 )
  const backends = [
    nodejs, laravel, nestjs,express
  ]
  const frontends = [
    react,nextjs,vite,laravel
  ]
  const mobiles = [
    flutter,react
  ]
  const databases = [
    postgres,mysql,mongoDb
  ]
  const devOps = [
    azure,aws,cloud
  ]
  const blockChains = [
    solidity,hardhat,web3
  ]
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <Container>
        <div className="w-10 hr mx-auto" />
        <p className="text-center h4 my-4">Our<br /> <span className="fw-bold">Texh Stack</span></p>
        <Row>
          <Col xs={ 2 } lg={ 1 } className="mx-auto my-3" role='button' onClick={()=>setShow(1)}>
            <p className={show === 1 ? "fs-small text-center mb-0 text-gradient fw-bold" : "fs-small text-center mb-0"}>Backend</p>
            <div className={show === 1 ?"w-25 hr mx-auto" : 'd-none'} />
          </Col>
          <Col xs={ 2 } lg={ 1 } className="mx-auto my-3" role='button' onClick={()=>setShow(2)}>
            <p className={show === 2 ? "fs-small text-center mb-0 text-gradient fw-bold" : "fs-small text-center mb-0"}>Frontend</p>
            <div className={show === 2 ?"w-25 hr mx-auto" : 'd-none'} />
          </Col>
          <Col xs={ 2 } lg={ 1 } className="mx-auto my-3" role='button' onClick={()=>setShow(3)}>
            <p className={show === 3 ? "fs-small text-center mb-0 text-gradient fw-bold" : "fs-small text-center mb-0"}>Mobile</p>
            <div className={show === 3 ?"w-25 hr mx-auto" : 'd-none'} />
          </Col>
          <Col xs={ 2 } lg={ 1 } className="mx-auto my-3" role='button' onClick={()=>setShow(4)}>
            <p className={show === 4 ? "fs-small text-center mb-0 text-gradient fw-bold" : "fs-small text-center mb-0"}>Databases</p>
            <div className={show === 4 ?"w-25 hr mx-auto" : 'd-none'} />
          </Col>
          <Col xs={ 2 } lg={ 1 } className="mx-auto my-3" role='button' onClick={()=>setShow(5)}>
            <p className={show === 5 ? "fs-small text-center mb-0 text-gradient fw-bold" : "fs-small text-center mb-0"}>Dev ops</p>
            <div className={show === 5 ?"w-25 hr mx-auto" : 'd-none'} />
          </Col>
          <Col xs={ 2 } lg={ 1 } className="mx-auto my-3" role='button' onClick={()=>setShow(6)}>
            <p className={show === 6 ? "fs-small text-center mb-0 text-gradient fw-bold" : "fs-small text-center mb-0"}>Web 3</p>
            <div className={show === 6 ?"w-25 hr mx-auto" : 'd-none'} />
          </Col>
        </Row>
        <Row>
          <StackItems items={show === 1 ? backends : show === 2 ? frontends : show === 3 ?mobiles : show ===4 ? databases : show === 5 ? devOps : blockChains  }/>
        </Row>
      </Container>
    </div>
  )
}

export default Stack
