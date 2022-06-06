import React from "react";
import {Card , Button , Col} from "react-bootstrap"
import { useDispatch } from 'react-redux';
import {onAdd} from '../features/basketSlice';
import { Link } from 'react-router-dom'
function Products(props) {
    const {product} = props;
    const dispatch = useDispatch();
    return (
        <Col>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                    <div>number:{product.id}</div>
                    <div>price:${product.price}</div>
                </Card.Text>
                <Button onClick={() => dispatch(onAdd(product))} variant="primary">Buy it !</Button>
                <Link to={`/Cart/${product.id}`} variant="primary">More...</Link>
            </Card.Body>
            </Card>
        </Col>
     
    );
  }
  
  export default Products;