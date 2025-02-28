import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import Image from 'react-bootstrap/esm/Image';
import Form from 'react-bootstrap/Form';

export default function Email() {
    return (<section className='Emailcontainer px-sm-2'>
        <Container className='emailcont '>
            <Row>
                <Col md={7} sm={12} className='pb-5'>
                    <div className='p-lg-5 py-lg-5 ps-lg-5 m-lg-5 my-lg-5 ms-lg-5 p-md-4 py-md-4 ps-md-4 m-md-4 my-md-4 ms-md-4  py-5 px-3 '>
                        <h5>NEWSLETTER</h5>
                        <h1>Subscribe our <br />
                            newsletter.</h1>
                        <div className='mainbox p-2 '>
                            <Form.Control
                                type="email"
                                placeholder='@ enter your email-address'
                                className='input p-md-3'
                            />
                            <FontAwesomeIcon icon={faArrowRightLong} className='arrow' />
                        </div>
                    </div>
                </Col>
                <Col md={5} className='d-none d-md-block nimage'>
                    <Image src="\images\Newsletter\soup.svg" fluid className='soup' />
                    <Image src="\images\Newsletter\yellow.svg" fluid className='yellow' />
                    <Image src="\images\Newsletter\blue.svg" fluid className='blue' />
                    <Image src="\images\Newsletter\onion.svg" fluid className='onion' />
                </Col>
            </Row>
        </Container>
    </section>)
}