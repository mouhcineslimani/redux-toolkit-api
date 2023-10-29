import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

function Product({ product }) {
    return (
        <Col md={3} >
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        {product.description.slice(0, 150)}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Product