import Col from 'react-bootstrap/Col';

export default function ls() {
    const li = [{
        main: 'Company',
        sec: ['About', 'Careers', 'Mobile', 'Blog', 'How we work?']
    }, {
        main: 'Information',
        sec: ['Help/FAQ', 'Press', 'Affiliates', 'Hotel owners', 'Partners']
    }, {
        main: 'More',
        sec: ['Home', 'About Us', 'Recipe', 'Gallery']
    }]
    return (
        li.map(l => {
            return (<Col md={4} xs={6} key={l.main}><h4 className='text-white mb-3 title' >{l.main}</h4>
                <ul>
                    {l.sec.map(s => {
                        return <li key={s} className='text-white mb-3 lh-lg values'>{s}</li>
                    })}
                </ul></Col>)
        })
    )
}