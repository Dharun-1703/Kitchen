import Cards from './Cards';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function Features() {
    return (<section className='features' id='about us'>
        <h4 className='sectionTitle'>Features</h4>
        <h1 className='sectionDescription'>Get a many of interesting <br /> features.</h1>
        <div className='cardarea'>
            <Container fluid>
                <Row className="justify-content-center">
                    <Cards />
                </Row>
            </Container>
        </div>
    </section>);
}