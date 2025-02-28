
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function CopyRight() {
    return (
        <section className='CopyRight px-sm-5'>
            <Container fluid className='hr pt-5' >
                <Row>
                    <Col xs={7}>
                        <p className='c'>@2025 - Chef's kitchen. Distributed By <span> ThemeWagon</span> and Developed by <span> GetNextjsTemplates</span></p>
                    </Col>
                    <Col xs={5}>
                        <Row>
                            <Col sm={6} className='text-md-end'>
                                <span >Privacy policy</span>
                            </Col>
                            <Col sm={6}>
                                <span>Terms & conditions</span>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}