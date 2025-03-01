import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Stack from 'react-bootstrap/Stack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { Context } from './Context';
import { useRef } from 'react';
export default function Navtab() {
  const navbar = useContext(Context);
  const ref = useRef(null);
  const navlink = useRef(null);

  window.addEventListener('scroll', () => {
    if (window.scrollY >= 72) {
      ref.current.classList.add('shrink');
    } else {
      ref.current.classList.remove('shrink');

    }
  });

  return (
    <>
      <Navbar fixed='top' key='lg' expand='lg' className="navbar" ref={ref} variant='dark'>
        <Container fluid>
          <Navbar.Brand href="#" className='navbar-brand'>
            <Stack direction="horizontal" gap={2}>
              <img src='images/logo/Logo.svg' className='logo' />
              Chef's Kitchen.
            </Stack>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} className=' border-0 white' />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
            className='off '
          >
            <Offcanvas.Header closeButton closeVariant="white">
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                <Stack direction="horizontal" gap={2}>
                  <img src='images/logo/Logo.svg' />
                  Chef's Kitchen.
                </Stack>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className='offb'>
              <Nav className="justify-content-end flex-grow-1 me-auto pe-xl-3">

                {navbar.map((elemnt, i) => {
                  if (i > 4) {
                    return <Nav.Link key={elemnt} ref={navlink} href={`#${elemnt}`} className={elemnt.replace(" ", "_") + ' nav-link px-xl-3 px-lg-1'}>{elemnt}</Nav.Link>
                  }
                  else if (i != 4) {
                    return <Nav.Link key={elemnt} ref={navlink} onClick={() => {
                      navlink.current.addEventListener('click', () => {
                        navlink.current.classList.add('active')
                      })
                    }} href={`#${elemnt}`} className='nav-link px-xl-3 px-lg-1'>{elemnt}</Nav.Link>
                  }
                  else {
                    return <Nav.Link key={elemnt} ref={navlink} onClick={() => {
                      navlink.current.addEventListener('click', () => {
                        navlink.current.classList.add('active')
                      })
                    }} href={`#${elemnt}`} className=' nav-link num px-xl-3 px-lg-1'><FontAwesomeIcon icon={faPhone} className='call nav-link ' />{elemnt} </Nav.Link>
                  }
                })}

              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  )
}