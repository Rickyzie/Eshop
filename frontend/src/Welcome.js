import React , {useState} from "react";
import {Container, ListGroup} from "react-bootstrap"
import Header from "./components/Header"
import Footer from "./components/Footer"
import axios from "axios"

function Welcome() {
  const [res,setRes] = useState("")
  const getMember = async () => await axios.get('/api/welcome')
  .then( (response) => {
          setRes(response.data.name)
        })
  .catch( (error) => console.log(error))
  getMember()
    return (
      <Container>
        <Header/>
        <ListGroup>
          <ListGroup.Item><div>{res}</div></ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        <Footer/>
      </Container>
    );
  }
  
  export default Welcome;