import React from "react";
import {Table ,Button,Alert} from "react-bootstrap"
import { useDispatch,useSelector } from 'react-redux';
import {onAdd,onRemove} from '../features/basketSlice';

function Basket() {
    const  cartItems  = useSelector((state) => state.cartItems);
    const dispatch = useDispatch();
    return (
        <div>
            <Table striped bordered hover size="sm">
            <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Price</th>
                <th>item</th>
            </tr>
            </thead>
            <tbody>
            {cartItems.map((x)=>{
                return(
                    <tr>
                        <td width="10px">{x.id}</td>
                        <td>{x.name}</td>
                        <td>{x.price}</td>
                        <td>{x.qty}</td>
                        <td width="90px">
                            <Button onClick={() =>dispatch(onAdd(x))} variant="outline-info">+</Button>
                            <Button onClick={() =>dispatch(onRemove(x))} variant="outline-info">-</Button>
                        </td>
                    </tr>
                )
            })}
            </tbody>
            </Table>
            <Alert key="danger" variant="danger">
            Total Price : {cartItems.reduce((f,s)=>(f+s.qty*s.price),0)}
            </Alert>
        </div>
    );
  }
  
  export default Basket;