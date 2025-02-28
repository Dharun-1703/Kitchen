import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export default function Recipe() {
    return (<section className='Recipe' id='recipe'>
        <Container fluid>
            <Row>
                <Col lg={6} md={12} className='px-2 my-1'>
                    <Image src="/images/cook/cook.png" className='cook' fluid />
                </Col>
                <Col lg={6} md={12} className='px-3 py-xl-5 my-xl-5 py-0 my-0'>
                    <h4 className='sectionTitle'>cook with us</h4>
                    <h1 className='sectionDescription'>Cooking together with the expert.</h1>
                    <p className='description'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
                        <br /><br /><br />
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium....</p>
                    <button type='button'>learn more</button>
                    <Image src="/images/cook/burger.png" className='burger d-lg-block d-none' fluid />
                </Col>
            </Row>
        </Container>
    </section>)
}