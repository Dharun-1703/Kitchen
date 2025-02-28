import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import ls from './ls';

export default function Footer() {
    return (
        <section className='footer'>
            <Container fluid className='p-md-5 p-3'>
                <Row>
                    <Col md={5} sm={12}>
                        <div className='mb-4'>
                            <img src='images/logo/Logo.svg' className='logo' />
                            <span className='brandname'>Chef's Kitchen.</span></div>
                        <p className='des mb-5 pb-3'>Open an account in minutes, get full financial  control for much longer.</p>
                        <div className='sm mb-5 mb-sm-5'>
                            <FontAwesomeIcon icon={faFacebookF} className='ic' />
                            <FontAwesomeIcon icon={faInstagram} className='ic' />
                            <FontAwesomeIcon icon={faXTwitter} className='ic' />
                        </div>
                    </Col>
                    <Col md={7} sm={12} >
                        <Row>
                            {ls()}
                        </Row>
                    </Col>
                </Row>

            </Container>
        </section>
    )
}