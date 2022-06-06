import React from "react";
import {Container,Row} from "react-bootstrap"
import Products from "./Products";
//dasdassadasd
function Main(props) {
    const {products} = props;
    return (
        <Container>
          <Row>
            {products.map((product)=>{
              return <Products key={product.id} product={product} />
            })}
          </Row>
        </Container> 
        
     
    );
  }
  export default Main;