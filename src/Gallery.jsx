import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Gallery() {
    return (
        <section className='Gallery' id='Gallery'>
            <h4 className='sectionTitle'>Our Gallery</h4>
            <h1 className='sectionDescription'>Gallery of our cooked food.</h1>
            <div className='Mansory'>
                <Container>
                    <Row >
                        <Col md={6} sm={12}>
                            <div className='details'>
                                <Image src="\images\Gallery\foodone.jpg" fluid />
                                <div className='background'>
                                    <div className='content'>
                                        <h3><span>Name:</span>Caesar Salad(187 Kcal)</h3>
                                        <div className='price'>
                                            <h3><span>Price:</span>$35</h3>
                                            <button type='button'>learn more</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='details'>
                                <Image src="\images\Gallery\foodthree.jpg" fluid />
                                <div className='background'>
                                    <div className='content'>
                                        <h3><span>Name:</span>Sauteed mushrooms with pumpkin and sweet pepper(238 kcal)</h3>
                                        <div className='price'>
                                            <h3><span>Price:</span>$45</h3>
                                            <button type='button'>learn more</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Col>
                        <Col md={6} sm={12}>
                            <div className='details'>
                                <Image src="\images\Gallery\foodtwo.jpg" fluid />
                                <div className='background'>
                                    <div className='content'>
                                        <h3><span>Name:</span>Christmas salad(118 Kcal)</h3>
                                        <div className='price'>
                                            <h3><span>Price:</span>$17</h3>
                                            <button type='button'>learn more</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='details'>
                                <Image src="\images\Gallery\foodfour.jpg" fluid />
                                <div className='background'>
                                    <div className='content'>
                                        <h3><span>Name:</span> BBQ Chicken Feast Pizza(272 kcal)</h3>
                                        <div className='price'>
                                            <h3><span>Price:</span>$27</h3>
                                            <button type='button'>learn more</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    )
}