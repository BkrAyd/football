import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from "react-bootstrap/Col"
import { useState } from 'react';


const Legendcard = ({ Legend }) => {
    const [show, setshow] = useState(true)

    return (
        <Col xs={10} sm={8} md={6} lg={4} xl={3}>
            <Card onClick={()=>setshow(!show)} role='button'>
                {
                    show ? (<Card.Img onClick={() => setshow(false)} title={Legend.name} variant="top" src={Legend.img} />)
                        : (
                            <>
                                <Card.Body onClick={() => setshow(true)}>
                                    <Card.Title>{Legend.name}</Card.Title>
                                    <ul className='m-auto w-100'>
                                        {Legend.statistics.map(item => <li className='list-unstyled h5 text-start'> ⚽{item}</li>)}
                                    </ul>
                                    {/* <Button variant="primary">Go somewhere</Button> */}
                                </Card.Body>
                                <Card.Footer>
                                    Career Years: {Legend.official_career}
                                </Card.Footer>
                            </>
                        )
                }



            </Card>
        </Col>
    )
}

export default Legendcard