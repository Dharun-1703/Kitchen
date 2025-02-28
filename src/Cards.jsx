import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Image from 'react-bootstrap/Image';

export default function Cards() {
    const cards = [{
        name: 'Menu variations',
        src: '/images/Features/featureOne.svg'
    }, {
        name: 'Cooking warw',
        src: '/images/Features/featureTwo.svg'
    }, {
        name: 'Best chef',
        src: '/images/Features/featureThree.svg'
    }, {
        name: 'Fast food',
        src: '/images/Features/featureFour.svg'
    }];
    return (
        cards.map(c => {
            return (<Card className='card' key={c.name}>
                <Image src={c.src} className='ci' fluid />
                <Card.Body>
                    <Card.Title className='ct'>{c.name}</Card.Title>
                    <Card.Text className='cte'>
                        Sed ut perspiciatis unde <br /> omnis iste natus error
                    </Card.Text>
                    <Card.Link href="#" className='cl'>Learn More <FontAwesomeIcon icon={faChevronRight} /></Card.Link>
                </Card.Body>
            </Card>)

        })
    );
}