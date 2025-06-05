import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/img/header-img.svg"

export const Banner = () => {
  return (
    <>  
    
    <section className="banner" id="home">
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                <span className="tagline">Welcome to my Portafolio</span>
                <h1>{`Hi I'm webcoded`} <span className="wrap">Web developer</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum perspiciatis tempore sapiente dolore delectus enim, sunt harum nostrum voluptatibus? Sit, debitis! Maiores, vero officiis odit iusto neque assumenda? Fuga, nesciunt?</p>
                <button onClick={() => console.log('Connect')}>Let's connect <ArrowRightCircle size={25}/></button>
                </Col>
                <Col xs={12} md={6} xl={5}>
                <img src={headerImg} alt="Headder Img" />
                </Col>
            </Row>
        </Container>
    </section>

    </>
  )
}
