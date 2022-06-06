import React from "react";
import Header from "./components/Header"
import Footer from "./components/Footer"
import bbrand from './picture/bbrand.png';
import {Container,Carousel,Card} from "react-bootstrap"
function Home() {
  return (
    <div>
        <Header/>
        <Container>
            <Carousel>
                <Carousel.Item>
                    <img   
                    className="d-block w-100"
                    src={bbrand}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h1>新鮮</h1>
                    <h3>原肉切塊,生鮮活凍,現流海鮮.</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img   
                    className="d-block w-100"
                    src={bbrand}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h1>品質</h1>
                    <h3>優質原肉,鮮美海產,隨時享用.</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img   
                    className="d-block w-100"
                    src={bbrand}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h1>熱情</h1>
                    <h3>以客為尊,服務至上,口碑經營.</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Card>
            <Card.Header><h1>最新消息</h1></Card.Header>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
            </Card.Body>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
            </Card.Body>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
            </Card.Body>
            </Card>
        </Container>
        <Footer/>
    </div>
  );
}

export default Home;