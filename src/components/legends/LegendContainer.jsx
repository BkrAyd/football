import React from 'react'
import Container from 'react-bootstrap/esm/Container';
// import Button from 'react-bootstrap/Button';
import Row from "react-bootstrap/Row"
import { data } from "../../helpers/data";
import Legendcard from './Legendcard';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

const LegendContainer = () => {
    const [search, setsearch] = useState("")
    const handlechange=(e)=>{
        setsearch(e.target.value)
    }
    const filteredData= data.filter((Legend)=>Legend.name.toLowerCase().includes(search.trim().toLowerCase()))
    return (
        <>
        <Form.Control type="search" onChange={(e)=>handlechange(e)}
        placeholder="Search legends..." />
        <Container>
            <Row>
                
                {
                filteredData.map((Legend)=>(<Legendcard key={Legend.id} Legend={Legend}/>)
                    )
                }

            </Row>
        </Container>
        </>
    )
}

export default LegendContainer;