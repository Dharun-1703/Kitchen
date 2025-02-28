import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


export default function Hero() {
    return (
        <section id="Home">
            <Container fluid className='hero'>
                <Row >
                    <Col lg={6} md={12}>
                        <Row className='my-lg-5 py-lg-5 ' >
                            <h1>Cook anything with the experts</h1>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque laudantium, totam</p>

                            <Col>
                                <button type='button' className='first'>
                                    <a href='#'>
                                        lets cook
                                    </a>
                                </button>
                                <button type='button' className='second'>
                                    <a href='#'>
                                        explore now
                                    </a>
                                </button></Col>
                        </Row>
                    </Col>
                    <Col className='img' lg={6} md={12}>
                        <Image src="\images\hero\banner-image.png" fluid />
                        <div className='pizza'><Image src="\images\hero\pizza.svg" fluid /><p>More than 500+ <br />
                            recipes.</p></div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}