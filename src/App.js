// import React from "react";
// import MyCard from "./Components/MyCard/Card";

// function App() {
//   return (
//     <>
//       <MyCard />
//     </>
//   );
// }

import React, { useState } from 'react';
import "./Card.css";
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import MyData from "./Components/MyCard/Card.js";
const MyCard = () => {
    let [Price, setPrice] = useState(0);
    const purchase = (item) => {
        setPrice(Price + item);
    }
    const plus = (item) => {
        setPrice(Price + item);
    }
    const minus = (item) => {
        Price <= 0 ? Price = 0 : setPrice(Price - item);
    }
    const setShow = () => {
        alert('Purchase Completed');
    }
    let TotalPrice = Price <= 0 ? 0 : Price
    return (
        <>
            <Container>
                <Row className='justify-content-evenly mt-3'>
                   
                    {MyData?.map(item => {
                        return (
                            <Col lg={3}>
                                <Card>
                                    <Card.Img variant="top" src={item?.img} />
                                    <Card.Body>
                                        <Card.Title>{item?.product_name}</Card.Title>
                                        <Card.Text>{item?.description}</Card.Text>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div>
                                                <Button className='btn3' onClick={(e) => purchase(item?.price)} variant={'primary'}>{item?.price}</Button>
                                            </div>
                                            <div className='d-inline-block'>
                                                <Button className='btn1 btn-success m-1 ml--' onClick={() => plus(item?.price)}>+</Button>
                                                <Button className='btn2 btn-success m-1' onClick={() => minus(item?.price)}>-</Button>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
                     <Col lg={12} className='mt-5'>
                        <ListGroup>
                            <ListGroup.Item>
                                <div className="d-flex align-items-center">
                                    <h5 className='m-0 mRight'>Total price: <b>{TotalPrice}</b></h5>
                                    <Button className='btn4 d-inline-block' variant="success" onClick={() => setShow()}>Buy</Button>
                                </div>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default MyCard;