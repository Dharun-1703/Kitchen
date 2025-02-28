import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Chefs() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 500,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 556,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    const ExpertData = [
        {
            profession: 'Senior Chef',
            name: 'Shoo Thar Mien',
            imgSrc: '/images/Expert/boyone.svg',
        },
        {
            profession: 'Junior Chef',
            name: 'Shoo Thar Mien',
            imgSrc: '/images/Expert/girl.png',
        },
        {
            profession: 'Junior Chef',
            name: 'Shoo Thar Mien',
            imgSrc: '/images/Expert/boytwo.svg',
        },
        {
            profession: 'Junior Chef',
            name: 'Shoo Thar Mien',
            imgSrc: '/images/Expert/girl.png',
        },
        {
            profession: 'Senior Chef',
            name: 'Shoo Thar Mien',
            imgSrc: '/images/Expert/boyone.svg',
        },
        {
            profession: 'Junior Chef',
            name: 'Shoo Thar Mien',
            imgSrc: '/images/Expert/boytwo.svg',
        },
    ]
    return (<section className='chefs'>
        <Container fluid>
            <Row>
                <h4 className='sectionTitle'>EXPERT CHEFS</h4>
                <h1 className='sectionDescription'>Let's meet the expert.</h1>
                <div className="content my-5">
                    <div className="container">
                        <Slider {...settings}>
                            {ExpertData.map((items, i) => (
                                <div key={i}>
                                    <div className='content m-3 py-14 my-10 text-center'>
                                        <Image src={items.imgSrc} alt="gaby" className='mainimage' fluid />
                                        <Image src={'/images/Expert/Linkedin.svg'} className='linkedin' alt="linkedin" fluid />
                                        <h3 className='text-2xl font-semibold text-white'>{items.name}</h3>
                                        <h4 className='fs-5 fw-light text-white pt-4 pb-2 text-opacity-50'>{items.profession}</h4>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </Row>
        </Container>
    </section>)
}