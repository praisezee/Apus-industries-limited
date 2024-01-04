/* eslint-disable react/prop-types */
import { Col, Image, Row } from "react-bootstrap";


const StackItems = ({items}) => {
  return (
    <Row className="my-5 rounded shadow-sm border p-5">
      {
      items.map( (item,i) => (
        <Col xs={ 2 } md={1} key={i} className="mx-auto my-auto">
          <Image fluid src={item}/>
        </Col>
      ))}
    </Row>
  )
}

export default StackItems
